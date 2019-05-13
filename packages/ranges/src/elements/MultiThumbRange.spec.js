/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { render, renderRtl, fireEvent } from 'garden-test-utils';
import MultiThumbRange from './MultiThumbRange';

jest.mock('lodash.debounce');
import debounce from 'lodash.debounce';

describe('MultiThumbRange', () => {
  let originalGetBoundingClientRect;

  beforeEach(() => {
    debounce.mockImplementation(fn => fn);

    originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return { width: 100, height: 10, top: 0, left: 0, bottom: 0, right: 0, x: 20 };
    });
  });

  afterEach(() => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  describe('Slider', () => {
    it('shows correct styling when disabled', () => {
      const { getByTestId } = render(<MultiThumbRange disabled />);

      expect(getByTestId('slider')).toHaveClass('is-disabled');
    });

    it('shows correct styling when in RTL mode', () => {
      const { getByTestId } = renderRtl(<MultiThumbRange />);

      expect(getByTestId('slider')).toHaveClass('is-rtl');
    });

    it('removes document event listeners on unmount', () => {
      const originalRemoveEventListener = window.removeEventListener;

      window.removeEventListener = jest.fn();

      const { unmount } = render(<MultiThumbRange />);

      unmount();

      expect(window.removeEventListener).toHaveBeenCalled();

      window.removeEventListener = originalRemoveEventListener;
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

  describe('Min Thumb', () => {
    it('applies correct accessibility values', () => {
      const { getAllByTestId } = render(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveAttribute('role', 'slider');
      expect(thumb).toHaveAttribute('tabIndex', '0');
      expect(thumb).toHaveAttribute('aria-valuemin', '0');
      expect(thumb).toHaveAttribute('aria-valuemax', '75');
      expect(thumb).toHaveAttribute('aria-valuenow', '15');
      expect(thumb).toHaveAttribute('aria-valuetext', '15');
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

    it('applies correct style when in RTL mode', () => {
      const { getAllByTestId } = renderRtl(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[0];

      expect(thumb).toHaveStyle('right: 15px');
    });

    describe('Key Handlers (LTR)', () => {
      let onChangeSpy;

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
      let onChangeSpy;

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
      let onChangeSpy;

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
          });

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
        });

        it('updates minValue on drag in RTL mode', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[0];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 75, maxValue: 75 });
        });

        it('does not update minValue when disabled', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange disabled minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[0];

          fireEvent.mouseDown(thumb);
          fireEvent.focus(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

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
      expect(thumb).toHaveAttribute('aria-valuetext', '75');
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

    it('applies correct style when in RTL mode', () => {
      const { getAllByTestId } = renderRtl(<MultiThumbRange minValue={15} maxValue={75} />);
      const thumb = getAllByTestId('thumb')[1];

      expect(thumb).toHaveStyle('right: 75px');
    });

    describe('Key Handlers (LTR)', () => {
      let onChangeSpy;

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
      let onChangeSpy;

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
      let onChangeSpy;

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
          });

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 15 });
        });

        it('updates maxValue on drag in RTL mode', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[1];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 90 });
        });

        it('does not update maxValue when disabled', () => {
          const { container, getAllByTestId } = renderRtl(
            <MultiThumbRange disabled minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          );
          const thumb = getAllByTestId('thumb')[1];

          fireEvent.mouseDown(thumb);

          const mouseEvent = new MouseEvent('mousemove');

          mouseEvent.pageX = 30;

          fireEvent(container.ownerDocument, mouseEvent);

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
  });
});
