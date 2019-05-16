/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { KEY_CODES } from '@zendeskgarden/react-selection';
import { FocusJailContainer } from './FocusJailContainer';

jest.useFakeTimers();

describe('FocusJailContainer', () => {
  let focusElementSpy;

  const BasicExample = props => (
    <FocusJailContainer {...props}>
      {({ getContainerProps, containerRef }) => (
        <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
          <p>non-focusable test</p>
          <button data-test-id="button">focusable button</button>
          <input data-test-id="input" />
        </div>
      )}
    </FocusJailContainer>
  );

  beforeEach(() => {
    focusElementSpy = jest.spyOn(FocusJailContainer.prototype, 'focusElement');
  });

  afterEach(() => {
    focusElementSpy.mockClear();
    focusElementSpy.mockReset();
  });

  describe('componentDidMount()', () => {
    it('focuses container element by default', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(focusElementSpy).toHaveBeenCalledWith(getByTestId('container'));
    });

    it('does not focus container element if focusOnMount is false', () => {
      render(<BasicExample focusOnMount={false} />);

      expect(focusElementSpy).not.toHaveBeenCalled();
    });
  });

  describe('containerRef', () => {
    it('throws error if containerRef is not provided', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => {
        render(
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
    describe('onKeyDown()', () => {
      it('performs no action if non-tab key is pressed', () => {
        const { container } = render(<BasicExample />);

        fireEvent.keyDown(container, { keyCode: KEY_CODES.END });

        // Container is still focused during initial mount
        expect(focusElementSpy).toHaveBeenCalledTimes(1);
      });

      it('focuses container if no tabbable elements found', () => {
        const { container, getByTestId } = render(
          <FocusJailContainer>
            {({ getContainerProps, containerRef }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
                <p>non-focusable test</p>
              </div>
            )}
          </FocusJailContainer>
        );

        fireEvent.keyDown(container.firstChild, { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(2);
        expect(focusElementSpy).toHaveBeenLastCalledWith(getByTestId('container'));
      });

      it('focuses first element if tab key is pressed', () => {
        const { container, getByTestId } = render(<BasicExample />);

        fireEvent.keyDown(container.firstChild, { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(1);
        expect(focusElementSpy).toHaveBeenLastCalledWith(getByTestId('container'));
      });

      it('focuses last element if tab and shift key is pressed', () => {
        const { container, getByTestId } = render(<BasicExample />);

        fireEvent.keyDown(container.firstChild, { keyCode: KEY_CODES.TAB, shiftKey: true });

        expect(focusElementSpy).toHaveBeenCalledTimes(2);
        expect(focusElementSpy).toHaveBeenLastCalledWith(getByTestId('input'));
      });

      it("doesn't intercept tab key if not the first or last tabbable item", () => {
        const { getByTestId } = render(
          <FocusJailContainer>
            {({ getContainerProps, containerRef }) => (
              <div {...getContainerProps({ 'data-test-id': 'container' })} ref={containerRef}>
                <p>non-focusable test</p>
                <button>Focusable button</button>
                <input ref={ref => setTimeout(() => ref && ref.focus())} />
                <button>Another button</button>
              </div>
            )}
          </FocusJailContainer>
        );

        focusElementSpy.mockClear();
        fireEvent.keyDown(getByTestId('container'), { keyCode: KEY_CODES.TAB });

        expect(focusElementSpy).toHaveBeenCalledTimes(0);
      });
    });
  });
});
