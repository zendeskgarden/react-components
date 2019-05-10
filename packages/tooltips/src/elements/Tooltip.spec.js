/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Tooltip from './Tooltip';

jest.useFakeTimers();

describe('Tooltip', () => {
  const BasicExample = ({ placement, size, type } = {}) => (
    <Tooltip
      placement={placement}
      size={size}
      type={type}
      trigger={<button data-test-id="trigger">Trigger</button>}
      data-test-id="tooltip"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Tooltip>
  );

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="light" />);

      fireEvent.focus(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      expect(getByTestId('tooltip')).toBeInTheDocument();
    });

    it('renders dark tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="dark" />);

      fireEvent.focus(getByTestId('trigger'));
      jest.runOnlyPendingTimers();

      expect(getByTestId('tooltip')).toBeInTheDocument();
    });
  });
});
