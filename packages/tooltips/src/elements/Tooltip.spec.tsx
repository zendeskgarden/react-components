/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent, act } from 'garden-test-utils';

import Tooltip, { ITooltipProps } from './Tooltip';

jest.useFakeTimers();

describe('Tooltip', () => {
  const BasicExample = ({ placement, size, type, ...other }: Partial<ITooltipProps>) => (
    <Tooltip
      placement={placement}
      size={size}
      type={type}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua."
      data-test-id="tooltip"
      {...other}
    >
      <button data-test-id="trigger">Trigger</button>
    </Tooltip>
  );

  it('renders tooltip within appendToNode prop', () => {
    const { getByTestId } = render(<BasicExample appendToNode={document.body} />);

    expect(getByTestId('tooltip').parentElement!.parentElement!.tagName).toBe('BODY');
  });

  describe('Types', () => {
    it('renders light tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="light" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveClass('c-tooltip--light');
    });

    it('renders dark tooltip if provided', () => {
      const { getByTestId } = render(<BasicExample type="dark" />);

      act(() => {
        fireEvent.focus(getByTestId('trigger'));
        jest.runOnlyPendingTimers();
      });

      const tooltip = getByTestId('tooltip');

      expect(tooltip).toBeInTheDocument();
      expect(tooltip).not.toHaveClass('c-tooltip--light');
    });
  });
});
