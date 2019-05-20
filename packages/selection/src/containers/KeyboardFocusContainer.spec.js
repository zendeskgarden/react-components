/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import KeyboardFocusContainer from './KeyboardFocusContainer';

jest.useFakeTimers();

describe('KeyboardFocusContainer', () => {
  const BasicExample = () => (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }) => (
        <div {...getFocusProps({ 'data-test-id': 'trigger', 'data-focused': keyboardFocused })}>
          trigger
        </div>
      )}
    </KeyboardFocusContainer>
  );

  describe('getFocusProps', () => {
    describe('onFocus', () => {
      it('should not apply focused prop if focused by mouse', () => {
        const { getByTestId } = render(<BasicExample />);
        const trigger = getByTestId('trigger');

        fireEvent.mouseDown(trigger);
        jest.runOnlyPendingTimers();

        expect(trigger).toHaveAttribute('data-focused', 'false');
      });

      it('should apply focused prop if focused by keyboard', () => {
        const { getByTestId } = render(<BasicExample />);
        const trigger = getByTestId('trigger');

        fireEvent.focus(trigger);
        jest.runOnlyPendingTimers();

        expect(trigger).toHaveAttribute('data-focused', 'true');
      });
    });

    describe('onMouseDown', () => {
      it('should not apply focused prop if mouseddown', () => {
        const { getByTestId } = render(<BasicExample />);
        const trigger = getByTestId('trigger');

        fireEvent.mouseDown(trigger);
        jest.runOnlyPendingTimers();

        expect(trigger).toHaveAttribute('data-focused', 'false');
      });
    });

    describe('onBlur', () => {
      it('should remove focused prop if blurred', () => {
        const { getByTestId } = render(<BasicExample />);
        const trigger = getByTestId('trigger');

        fireEvent.focus(trigger);
        jest.runOnlyPendingTimers();
        expect(trigger).toHaveAttribute('data-focused', 'true');

        fireEvent.blur(trigger);
        jest.runOnlyPendingTimers();
        expect(trigger).toHaveAttribute('data-focused', 'false');
      });
    });
  });
});
