/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent, createEvent } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { KEY_CODES } from '@zendeskgarden/container-utilities';

import { MultiThumbRange } from './MultiThumbRange';
import { Label } from './common/Label';
import { Field } from './common/Field';

jest.mock('lodash.debounce', () => {
  const wrapWithCancel = (fn: any) => {
    fn.cancel = jest.fn();

    return fn;
  };

  return {
    default: (fn: any) => wrapWithCancel(fn),
    __esModule: true
  };
});

describe('MultiThumbRange', () => {
  const user = userEvent.setup();

  let originalGetBoundingClientRect: any;

  beforeEach(() => {
    originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 100,
        height: 10,
        top: 0,
        left: 20,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {
          return undefined;
        }
      };
    });
  });

  afterEach(() => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  describe('Slider', () => {
    it('removes document event listeners on unmount', () => {
      const originalRemoveEventListener = window.removeEventListener;

      window.removeEventListener = jest.fn();

      const { unmount } = render(<MultiThumbRange />);

      unmount();

      expect(window.removeEventListener).toHaveBeenCalled();

      window.removeEventListener = originalRemoveEventListener;
    });
  });

  describe('MultiThumbRange label', () => {
    it('clicking the label focuses the min thumb', async () => {
      const { getByText, getAllByRole } = render(
        <Field>
          <Label>MultiThumbRange</Label>
          <MultiThumbRange />
        </Field>
      );
      const label = getByText('MultiThumbRange');
      const minThumb = getAllByRole('slider')[0];

      expect(minThumb).not.toHaveFocus();
      await user.click(label);
      expect(minThumb).toHaveFocus();
    });

    it('focus leaves the min thumb when user blurs out of min thumb', async () => {
      const { getByText, getAllByRole } = render(
        <Field>
          <Label>MultiThumbRange</Label>
          <MultiThumbRange />
        </Field>
      );
      const label = getByText('MultiThumbRange');
      const minThumb = getAllByRole('slider')[0];

      expect(minThumb).not.toHaveFocus();
      await user.click(label);
      expect(minThumb).toHaveFocus();

      await user.tab();
      expect(minThumb).not.toHaveFocus();
    });

    it('hovering over the label visually identifies the min thumb', async () => {
      const { getByText, getAllByRole } = render(
        <Field>
          <Label>MultiThumbRange</Label>
          <MultiThumbRange />
        </Field>
      );
      const label = getByText('MultiThumbRange');
      const minThumb = getAllByRole('slider')[0];

      expect(minThumb).toHaveStyleRule('border-color', getColor('blue', 600));
      expect(minThumb).toHaveStyleRule('background-color', getColor('blue', 600));

      await user.hover(label);

      ['border-color', 'background-color'].forEach(color => {
        expect(minThumb).toHaveStyleRule(color, getColor('blue', 700), {
          modifier: ':hover'
        });
      });
    });

    it('pressing on the label visually identifies the activated min thumb', async () => {
      const { getByText, getAllByRole } = render(
        <Field>
          <Label>MultiThumbRange</Label>
          <MultiThumbRange />
        </Field>
      );
      const label = getByText('MultiThumbRange');
      const minThumb = getAllByRole('slider')[0];

      expect(minThumb).toHaveStyleRule('border-color', getColor('blue', 600));
      expect(minThumb).toHaveStyleRule('background-color', getColor('blue', 600));

      await user.click(label);

      expect(minThumb).toHaveStyleRule('border-color', getColor('blue', 600), {
        modifier: ':active'
      });
      expect(minThumb).toHaveStyleRule('background-color', getColor('blue', 700), {
        modifier: ':active'
      });
    });
  });

  describe('Track', () => {
    it('positioning style is applied correctly', () => {
      const { getByTestId } = render(
        <div style={{ width: 500 }}>
          <MultiThumbRange minValue={15} maxValue={75} />
        </div>
      );

      expect(getByTestId('track')).toHaveStyle('background-size: 60px; background-position: 15px;');
    });

    it('positioning style is applied correctly when in RTL mode', () => {
      const { getByTestId } = renderRtl(
        <div style={{ width: 500 }}>
          <MultiThumbRange minValue={15} maxValue={75} />
        </div>
      );

      expect(getByTestId('track')).toHaveStyle('background-size: 60px; background-position: 25px;');
    });
  });

  describe('Slider selection', () => {
    it('updates min value if slider is clicked near min thumb', () => {
      const onChangeSpy = jest.fn();
      const { getByTestId } = render(
        <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
      );

      const slider = getByTestId('slider');
      const mouseEvent = createEvent.mouseDown(slider);

      (mouseEvent as any).pageX = 45;
      fireEvent(slider, mouseEvent);

      expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 25, maxValue: 75 });
    });

    it('updates max value if slider is clicked near max thumb', () => {
      const onChangeSpy = jest.fn();
      const { getByTestId } = render(
        <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
      );

      const slider = getByTestId('slider');
      const mouseEvent = createEvent.mouseDown(slider);

      (mouseEvent as any).pageX = 100;
      fireEvent(slider, mouseEvent);

      expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
    });
  });

  describe('Min Thumb', () => {
    it('applies correct accessibility values', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveAttribute('role', 'slider');
      expect(thumb).toHaveAttribute('tabIndex', '0');
      expect(thumb).toHaveAttribute('aria-valuemin', '0');
      expect(thumb).toHaveAttribute('aria-valuemax', '75');
      expect(thumb).toHaveAttribute('aria-valuenow', '15');
      expect(thumb).toHaveAttribute('aria-label', '15');
    });

    it('removes thumb from tab order when disabled', () => {
      const { getAllByTestId } = render(<MultiThumbRange disabled minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveAttribute('tabIndex', '-1');
    });

    it('applies correct style', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('left: 15px');
    });

    it('applies correct style if minValue is less than min', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={10} min={15} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('left: 0');
    });

    it('applies correct style if minValue is greater than maxValue', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={90} maxValue={80} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('left: 80px');
    });

    it('applies correct style if minValue is greater than max', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={90} max={80} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('left: 100px');
    });

    it('applies correct style when in RTL mode', () => {
      const { getAllByTestId } = renderRtl(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('right: 15px');
    });

    describe('Key Handlers (LTR)', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      it('decrements minValue on LEFT key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });

      it('decrements minValue on DOWN key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });

      it('increments minValue on RIGHT key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('increments minValue on UP key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('jumps minValue up on PAGE_UP key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} jump={10} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.PAGE_UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 25, maxValue: 75 });
      });

      it('jumps minValue down on PAGE_DOWN key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} jump={10} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.PAGE_DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 5, maxValue: 75 });
      });

      it('sets minValue to min on HOME key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.HOME });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 0, maxValue: 75 });
      });

      it('sets minValue to maxValue on END key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.END });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 75, maxValue: 75 });
      });
    });

    describe('Key Handlers (RTL)', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      it('increments minValue on LEFT key', () => {
        const { getAllByTestId } = renderRtl(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('decrements minValue on RIGHT key', () => {
        const { getAllByTestId } = renderRtl(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[0], { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });
    });

    describe('Drag Functionality', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      describe('document mousemove event', () => {
        it('updates minValue on drag', () => {
          const { container, getAllByTestId } = render(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[0];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove', {
            target: container.firstChild
          } as any);

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
        });

        it('updates minValue on drag in RTL mode', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[0];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 75, maxValue: 75 });
        });

        it('does not update minValue when disabled', async () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange disabled minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[0];

          await user.click(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('Max Thumb', () => {
    it('applies correct accessibility values', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveAttribute('role', 'slider');
      expect(thumb).toHaveAttribute('tabIndex', '0');
      expect(thumb).toHaveAttribute('aria-valuemin', '15');
      expect(thumb).toHaveAttribute('aria-valuemax', '100');
      expect(thumb).toHaveAttribute('aria-valuenow', '75');
      expect(thumb).toHaveAttribute('aria-label', '75');
    });

    it('removes thumb from tab order when disabled', () => {
      const { getAllByTestId } = render(<MultiThumbRange disabled minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveAttribute('tabindex', '-1');
    });

    it('applies correct style', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveStyle('left: 75px');
    });

    it('applies correct style if maxValue is greater than max', () => {
      const { getAllByTestId } = render(<MultiThumbRange maxValue={75} max={70} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveStyle('left: 100px');
    });

    it('applies correct style if maxValue is less than minValue', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={50} maxValue={40} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveStyle('left: 40px');
    });

    it('applies correct style if maxValue is less than min', () => {
      const { getAllByTestId } = render(<MultiThumbRange maxValue={10} min={15} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('left: 0');
    });

    it('applies correct style when in RTL mode', () => {
      const { getAllByTestId } = renderRtl(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveStyle('right: 75px');
    });

    describe('Key Handlers (LTR)', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      it('decrements maxValue on LEFT key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });

      it('decrements maxValue on DOWN key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });

      it('increments maxValue on RIGHT key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('increments maxValue on UP key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('jumps maxValue up on PAGE_UP key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} jump={10} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[1], { keyCode: KEY_CODES.PAGE_UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 85 });
      });

      it('jumps maxValue down on PAGE_DOWN key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} jump={10} onChange={onChangeSpy} />
        );

        fireEvent.keyDown(getAllByTestId('thumb')[1], { keyCode: KEY_CODES.PAGE_DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 65 });
      });

      it('sets maxValue to minValue on HOME key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.HOME });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 15 });
      });

      it('sets maxValue to max on END key', () => {
        const { getAllByTestId } = render(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.END });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 100 });
      });
    });

    describe('Key Handlers (RTL)', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      it('increments maxValue on LEFT key', () => {
        const { getAllByTestId } = renderRtl(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('decrements maxValue on RIGHT key', () => {
        const { getAllByTestId } = renderRtl(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        const maxThumb = getAllByTestId('thumb')[1];

        fireEvent.keyDown(maxThumb, { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });
    });

    describe('Drag Functionality', () => {
      let onChangeSpy: jest.Mock;

      beforeEach(() => {
        onChangeSpy = jest.fn();
      });

      describe('document mousemove event', () => {
        it('updates maxValue on drag', () => {
          const { container, getAllByTestId } = render(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[1];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove', {
            target: container.firstChild
          } as any);

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 15 });
        });

        it('updates maxValue on drag in RTL mode', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[1];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 90 });
        });

        it('does not update maxValue when disabled', async () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange disabled minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[1];

          await user.click(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          (mouseEvent as any).pageX = 30;

          fireEvent(container.ownerDocument!, mouseEvent);

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
  });
});
