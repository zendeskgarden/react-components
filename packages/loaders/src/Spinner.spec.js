/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Spinner from './Spinner';

jest.useFakeTimers();

describe('Spinner', () => {
  beforeEach(() => {
    clearTimeout.mockClear();
    global.cancelAnimationFrame = jest.fn();
    global.requestAnimationFrame = jest.fn();
  });

  describe('Loading delay', () => {
    it('hides loader for initial delay', () => {
      const { queryByTestId } = render(<Spinner data-test-id="spinner" />);

      expect(queryByTestId('spinner')).toBeNull();
    });

    it('shows loader after initial delay', () => {
      const { queryByTestId } = render(<Spinner data-test-id="spinner" />);

      jest.runOnlyPendingTimers();

      expect(queryByTestId('spinner')).not.toBeNull();
    });
  });

  describe('Animation', () => {
    it('updates animation after request animation frame', () => {
      const { container } = render(<Spinner data-test-id="spinner" />);

      jest.runOnlyPendingTimers();

      expect(container.firstChild.firstChild).toMatchInlineSnapshot(
        `
<circle
  class=""
  cx="40"
  cy="40"
  fill="none"
  r="34"
  stroke="currentColor"
  stroke-dasharray="0 250"
  stroke-linecap="round"
  stroke-width="6"
  transform="rotate(-90, 40, 40)"
/>
`
      );

      // Requestion animation with 1000 MS delay
      requestAnimationFrame.mock.calls[0][0](1000);

      expect(container.firstChild.firstChild).toMatchInlineSnapshot(
        `
<circle
  class="styled-elements__SpinnerCircle-sc-19dhio6-1 jXGDit"
  cx="40"
  cy="40"
  fill="none"
  r="34"
  stroke="currentColor"
  stroke-dasharray="33.04 250"
  stroke-linecap="round"
  stroke-width="5"
  transform="rotate(186.6, 40, 40)"
/>
`
      );
    });
  });
});
