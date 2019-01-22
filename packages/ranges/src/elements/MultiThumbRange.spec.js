/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import MultiThumbRange from './MultiThumbRange';

jest.mock('lodash.debounce');
import debounce from 'lodash.debounce';

describe('MultiThumbRange', () => {
  beforeEach(() => {
    debounce.mockImplementation(fn => fn);

    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return { width: 100, height: 10, top: 0, left: 0, bottom: 0, right: 0, x: 20 };
    });
  });

  describe('Slider', () => {
    it('shows correct styling when disabled', () => {
      const example = mountWithTheme(<MultiThumbRange disabled />);

      expect(example.find('[data-test-id="slider"]').first()).toHaveClassName('is-disabled');
    });

    it('shows correct styling when in RTL mode', () => {
      const example = mountWithTheme(<MultiThumbRange />, { rtl: true });

      expect(example.find('[data-test-id="slider"]').first()).toHaveClassName('is-rtl');
    });

    it('removes document event listeners on unmount', () => {
      window.removeEventListener = jest.fn();
      const example = mountWithTheme(<MultiThumbRange />);

      example.unmount();

      expect(window.removeEventListener).toHaveBeenCalled();
    });
  });

  describe('Track', () => {
    it('positioning style is applied correctly', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />).first();

      example.setState({ railWidthPx: 500 });

      expect(example.find('[data-test-id="track"]')).toHaveStyle({
        backgroundSize: '60px',
        backgroundPosition: '15px'
      });
    });

    it('positioning style is applied correctly when in RTL mode', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />, {
        rtl: true
      }).first();

      example.setState({ railWidthPx: 500 });

      expect(example.find('[data-test-id="track"]')).toHaveStyle({
        backgroundSize: '60px',
        backgroundPosition: '25px'
      });
    });
  });

  describe('Min Thumb', () => {
    it('applies correct accessibility values', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />).first();
      const thumb = example.find('[data-test-id="thumb"]').first();

      expect(thumb).toHaveProp('role', 'slider');
      expect(thumb).toHaveProp('tabIndex', 0);
      expect(thumb).toHaveProp('aria-valuemin', 0);
      expect(thumb).toHaveProp('aria-valuemax', 75);
      expect(thumb).toHaveProp('aria-valuenow', 15);
      expect(thumb).toHaveProp('aria-valuetext', 15);
    });

    it('removes thumb from tab order when disabled', () => {
      const example = mountWithTheme(
        <MultiThumbRange disabled minValue={15} maxValue={75} />
      ).first();
      const thumb = example.find('[data-test-id="thumb"]').first();

      expect(thumb).toHaveProp('tabIndex', -1);
    });

    it('applies correct style', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />).first();
      const thumb = example.find('[data-test-id="thumb"]').first();

      expect(thumb).toHaveStyle({ left: '15px' });
    });

    it('applies correct style when in RTL mode', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />, {
        rtl: true
      }).first();
      const thumb = example.find('[data-test-id="thumb"]').first();

      expect(thumb).toHaveStyle({ right: '15px' });
    });

    describe('Key Handlers (LTR)', () => {
      let example;
      let onChangeSpy;
      let minThumb;

      beforeEach(() => {
        onChangeSpy = jest.fn();
        example = mountWithTheme(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        minThumb = example.find('[data-test-id="thumb"]').first();
      });

      it('decrements minValue on LEFT key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });

      it('decrements minValue on DOWN key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });

      it('increments minValue on RIGHT key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('increments minValue on UP key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('sets minValue to min on HOME key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.HOME });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 0, maxValue: 75 });
      });

      it('sets minValue to maxValue on END key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.END });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 75, maxValue: 75 });
      });
    });

    describe('Key Handlers (RTL)', () => {
      let example;
      let onChangeSpy;
      let minThumb;

      beforeEach(() => {
        onChangeSpy = jest.fn();
        example = mountWithTheme(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />,
          { rtl: true }
        );
        minThumb = example.find('[data-test-id="thumb"]').first();
      });

      it('increments minValue on LEFT key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 20, maxValue: 75 });
      });

      it('decrements minValue on RIGHT key', () => {
        minThumb.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
      });
    });

    describe('Drag Functionality', () => {
      const documentEvents = {};
      let example;
      let onChangeSpy;

      const buildExample = customExample => {
        document.addEventListener = jest.fn((name, fn) => {
          documentEvents[name] = fn;
        });
        document.removeEventListener = jest.fn();
        example = customExample;
        const thumb = example.find('[data-test-id="thumb"]').first();

        thumb.simulate('mousedown');
        thumb.simulate('focus');

        example.update();
      };

      beforeEach(() => {
        onChangeSpy = jest.fn();

        buildExample(
          mountWithTheme(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          )
        );
      });

      describe('onMouseDown', () => {
        it('attaches events to document', () => {
          expect(document.addEventListener).toHaveBeenCalledTimes(2);
        });

        it('applies focused styling', () => {
          expect(example.find('[data-test-id="thumb"]').first()).toHaveClassName('is-focused');
        });
      });

      describe('document mousemove event', () => {
        it('updates minValue on drag', () => {
          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 10, maxValue: 75 });
        });

        it('updates minValue on drag in RTL mode', () => {
          onChangeSpy = jest.fn();
          buildExample(
            mountWithTheme(
              <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />,
              { rtl: true }
            )
          );

          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 75, maxValue: 75 });
        });

        it('does not update minValue when disabled', () => {
          onChangeSpy = jest.fn();
          buildExample(
            mountWithTheme(
              <MultiThumbRange
                minValue={15}
                maxValue={75}
                step={5}
                onChange={onChangeSpy}
                disabled
              />
            )
          );

          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });

      describe('document mouseup event', () => {
        it('removes event listeners from document', () => {
          const onDocumentMouseUp = documentEvents.mouseup;

          onDocumentMouseUp();

          expect(document.removeEventListener).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe('Max Thumb', () => {
    it('applies correct accessibility values', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />).first();
      const thumb = example.find('[data-test-id="thumb"]').last();

      expect(thumb).toHaveProp('role', 'slider');
      expect(thumb).toHaveProp('tabIndex', 0);
      expect(thumb).toHaveProp('aria-valuemin', 15);
      expect(thumb).toHaveProp('aria-valuemax', 100);
      expect(thumb).toHaveProp('aria-valuenow', 75);
      expect(thumb).toHaveProp('aria-valuetext', 75);
    });

    it('removes thumb from tab order when disabled', () => {
      const example = mountWithTheme(
        <MultiThumbRange disabled minValue={15} maxValue={75} />
      ).first();
      const thumb = example.find('[data-test-id="thumb"]').last();

      expect(thumb).toHaveProp('tabIndex', -1);
    });

    it('applies correct style', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />).first();
      const thumb = example.find('[data-test-id="thumb"]').last();

      expect(thumb).toHaveStyle({ left: '75px' });
    });

    it('applies correct style when in RTL mode', () => {
      const example = mountWithTheme(<MultiThumbRange minValue={15} maxValue={75} />, {
        rtl: true
      }).first();
      const thumb = example.find('[data-test-id="thumb"]').last();

      expect(thumb).toHaveStyle({ right: '75px' });
    });

    describe('Key Handlers (LTR)', () => {
      let example;
      let onChangeSpy;
      let maxThumb;

      beforeEach(() => {
        onChangeSpy = jest.fn();
        example = mountWithTheme(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
        );
        maxThumb = example.find('[data-test-id="thumb"]').last();
      });

      it('decrements maxValue on LEFT key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });

      it('decrements maxValue on DOWN key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.DOWN });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });

      it('increments maxValue on RIGHT key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('increments maxValue on UP key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.UP });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('sets maxValue to minValue on HOME key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.HOME });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 15 });
      });

      it('sets maxValue to max on END key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.END });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 100 });
      });
    });

    describe('Key Handlers (RTL)', () => {
      let example;
      let onChangeSpy;
      let maxThumb;

      beforeEach(() => {
        onChangeSpy = jest.fn();
        example = mountWithTheme(
          <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />,
          { rtl: true }
        );
        maxThumb = example.find('[data-test-id="thumb"]').last();
      });

      it('increments maxValue on LEFT key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.LEFT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 80 });
      });

      it('decrements maxValue on RIGHT key', () => {
        maxThumb.simulate('keydown', { keyCode: KEY_CODES.RIGHT });
        expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 70 });
      });
    });

    describe('Drag Functionality', () => {
      const documentEvents = {};
      let example;
      let onChangeSpy;

      const buildExample = customExample => {
        document.addEventListener = jest.fn((name, fn) => {
          documentEvents[name] = fn;
        });
        document.removeEventListener = jest.fn();
        example = customExample;
        const thumb = example.find('[data-test-id="thumb"]').last();

        thumb.simulate('mousedown');
        thumb.simulate('focus');

        example.update();
      };

      beforeEach(() => {
        onChangeSpy = jest.fn();

        buildExample(
          mountWithTheme(
            <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />
          )
        );
      });

      describe('onMouseDown', () => {
        it('attaches events to document', () => {
          expect(document.addEventListener).toHaveBeenCalledTimes(2);
        });

        it('applies focused styling', () => {
          expect(example.find('[data-test-id="thumb"]').last()).toHaveClassName('is-focused');
        });
      });

      describe('document mousemove event', () => {
        it('updates minValue on drag', () => {
          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 15 });
        });

        it('updates minValue on drag in RTL mode', () => {
          onChangeSpy = jest.fn();
          buildExample(
            mountWithTheme(
              <MultiThumbRange minValue={15} maxValue={75} step={5} onChange={onChangeSpy} />,
              { rtl: true }
            )
          );

          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).toHaveBeenCalledWith({ minValue: 15, maxValue: 90 });
        });

        it('does not update maxValue when disabled', () => {
          onChangeSpy = jest.fn();
          buildExample(
            mountWithTheme(
              <MultiThumbRange
                minValue={15}
                maxValue={75}
                step={5}
                onChange={onChangeSpy}
                disabled
              />
            )
          );

          const onDocumentMouseMove = documentEvents.mousemove;

          onDocumentMouseMove({ pageX: 30 });

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });

      describe('document mouseup event', () => {
        it('removes event listeners from document', () => {
          const onDocumentMouseUp = documentEvents.mouseup;

          onDocumentMouseUp();

          expect(document.removeEventListener).toHaveBeenCalledTimes(2);
        });
      });
    });
  });
});
