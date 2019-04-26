/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mountWithTheme } from '@zendeskgarden/react-testing';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { FocusJailContainer } from './FocusJailContainer';

jest.useFakeTimers();

describe('FocusJailContainer', () => {
  let wrapper;
  let focusElementSpy;

  const basicExample = ({ focusOnMount } = {}) => (
    <FocusJailContainer focusOnMount={focusOnMount}>
      {({ getContainerProps, containerRef }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
          <p>non-focusable test</p>
          <button data-test-id="button">focusable button</button>
          <input data-test-id="input" />
        </div>
      )}
    </FocusJailContainer>
  );

  const findContainer = enzymeWrapper => enzymeWrapper.find('[data-test-id="container"]');
  const findInput = enzymeWrapper => enzymeWrapper.find('[data-test-id="input"]');

  beforeEach(() => {
    focusElementSpy = jest.spyOn(FocusJailContainer.prototype, 'focusElement');
    wrapper = mountWithTheme(basicExample());
  });

  afterEach(() => {
    focusElementSpy.mockClear();
  });

  describe('componentDidMount()', () => {
    it('focuses container element by default', () => {
      focusElementSpy.mockReset();
      wrapper = mountWithTheme(basicExample());
      expect(focusElementSpy).toHaveBeenCalledWith(findContainer(wrapper).getDOMNode());
    });

    it('does not focus container element if focusOnMount is false', () => {
      focusElementSpy.mockReset();
      wrapper = mountWithTheme(basicExample({ focusOnMount: false }));
      expect(focusElementSpy).not.toHaveBeenCalled();
    });
  });

  describe('containerRef', () => {
    it('throws error if containerRef is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        mountWithTheme(
          <FocusJailContainer>
            {({ getContainerProps }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })}>Test</div>
            )}
          </FocusJailContainer>
        );
      }).toThrow('Accessibility Error: You must apply the ref prop to your containing element.');

      console.error = originalError;
    });
  });

  describe('getContainerProps()', () => {
    it('retrieves references by refKey', () => {
      expect(wrapper.instance().container).toBe(findContainer(wrapper).getDOMNode());
    });

    describe('onKeyDown()', () => {
      it('performs no action if non-tab key is pressed', () => {
        wrapper.simulate('keydown', { keyCode: KEY_CODES.END });

        // Container is still focused during initial mount
        expect(focusElementSpy).toHaveBeenCalledTimes(1);
      });

      it('focuses container if no tabbable elements found', () => {
        focusElementSpy.mockClear();
        wrapper = mountWithTheme(
          <FocusJailContainer>
            {({ getContainerProps, containerRef }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
                <p>non-focusable test</p>
              </div>
            )}
          </FocusJailContainer>
        );
        wrapper.simulate('keydown', { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(2);
        expect(focusElementSpy).toHaveBeenLastCalledWith(findContainer(wrapper).getDOMNode());
      });

      it('focuses first element if tab key is pressed', () => {
        wrapper.simulate('keydown', { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(1);
        expect(focusElementSpy).toHaveBeenLastCalledWith(findContainer(wrapper).getDOMNode());
      });

      it('focuses last element if tab and shift key is pressed', () => {
        wrapper.simulate('keydown', { keyCode: KEY_CODES.TAB, shiftKey: true });

        expect(focusElementSpy).toHaveBeenCalledTimes(2);
        expect(focusElementSpy).toHaveBeenLastCalledWith(findInput(wrapper).getDOMNode());
      });

      it("doesn't intercept tab key if not the first or last tabbable item", () => {
        wrapper = mountWithTheme(
          <FocusJailContainer>
            {({ getContainerProps, containerRef }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
                <p>non-focusable test</p>
                <button>Focusable button</button>
                <input ref={ref => setTimeout(() => ref && ref.focus())} />
                <button>Another button</button>
              </div>
            )}
          </FocusJailContainer>,
          { enzymeOptions: { attachTo: document.body } }
        );
        focusElementSpy.mockClear();
        wrapper.simulate('keydown', { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(0);
      });
    });
  });
});
