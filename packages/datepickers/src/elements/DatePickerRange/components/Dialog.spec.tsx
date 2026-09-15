/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ComponentProps } from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, renderRtl } from 'garden-test-utils';
import { DatePickerRange } from '../DatePickerRange';
import { IDatePickerRangeProps } from '../../../types';
import { Dialog } from './Dialog';

jest.useFakeTimers();

const Example = ({
  dialogProps,
  ...props
}: IDatePickerRangeProps & { dialogProps?: Partial<ComponentProps<typeof Dialog>> }) => (
  <DatePickerRange {...props}>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <DatePickerRange.Start opensDialog>
        <input data-test-id="start" />
      </DatePickerRange.Start>
      <DatePickerRange.End opensDialog>
        <input data-test-id="end" />
      </DatePickerRange.End>
      <DatePickerRange.Trigger data-test-id="trigger" />
      <DatePickerRange.Dialog {...dialogProps}>
        <DatePickerRange.Calendar />
      </DatePickerRange.Dialog>
    </div>
  </DatePickerRange>
);

describe('DatePickerRange.Dialog', () => {
  const user = userEvent.setup({ delay: null });

  describe('Styled menu', () => {
    it('applies StyledMenuWrapper and StyledMenu Garden component IDs', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      const dialog = getByTestId('range-dialog');

      expect(dialog).toHaveAttribute('data-garden-id', 'datepickers.menu_wrapper');
      expect(dialog.firstChild).toHaveAttribute('data-garden-id', 'datepickers.menu');
    });
  });

  describe('Dialog role', () => {
    it('has dialog role and aria-modal="false"', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('trigger'));

      const dialog = getByRole('dialog');

      expect(dialog).toHaveAttribute('aria-modal', 'false');
    });
  });

  describe('Accessible name', () => {
    it('has a default accessible name', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByRole('dialog', { name: 'Choose dates' })).toBeInTheDocument();
    });

    it('reflects a consumer-provided aria-label', async () => {
      const { getByTestId, getByRole } = render(
        <Example dialogProps={{ 'aria-label': 'Custom label' }} />
      );

      await user.click(getByTestId('trigger'));

      expect(getByRole('dialog', { name: 'Custom label' })).toBeInTheDocument();
    });
  });

  describe('Mount/animation behavior', () => {
    it('stays mounted while closed, hidden via aria-hidden, without rendering its children', () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(getByTestId('range-dialog')).toHaveAttribute('aria-hidden', 'true');
      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });

    it('renders its children and clears aria-hidden once open', async () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
      expect(getByTestId('range-dialog')).not.toHaveAttribute('aria-hidden');
      expect(queryByTestId('range-calendar')).toBeInTheDocument();
    });

    it('keeps rendering its children briefly after closing to allow the exit animation, then removes them', async () => {
      const { getByTestId, queryByTestId } = render(<Example />);

      await user.click(getByTestId('trigger'));
      await user.keyboard('{Escape}');

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
      expect(queryByTestId('range-calendar')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(200);
      });

      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });

    it('removes its children immediately on close when isAnimated is false', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example dialogProps={{ isAnimated: false }} />
      );

      await user.click(getByTestId('trigger'));
      await user.keyboard('{Escape}');

      expect(queryByTestId('range-calendar')).not.toBeInTheDocument();
    });
  });

  describe('Cross-field focus', () => {
    it('stays open when focus moves directly from Start to End', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('start'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('end'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });

    it('stays open when focus moves directly from End to Start', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('end'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('start'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('Multiple triggers', () => {
    const TwoTriggerExample = (props: IDatePickerRangeProps) => (
      <DatePickerRange {...props}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <DatePickerRange.Start opensDialog>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger data-test-id="start-trigger" />
          <DatePickerRange.End opensDialog>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger data-test-id="end-trigger" />
          <DatePickerRange.Dialog>
            <DatePickerRange.Calendar />
          </DatePickerRange.Dialog>
        </div>
      </DatePickerRange>
    );

    it('stays open when focus moves directly between two Trigger buttons', async () => {
      const { getByTestId } = render(<TwoTriggerExample />);

      await user.click(getByTestId('end-trigger'));

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

      // Moves focus directly (no click), so Trigger's own unconditional
      // open-on-click can't mask a tracking bug in the blur handler itself.
      act(() => {
        getByTestId('start-trigger').focus();
      });

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('RTL', () => {
    it('applies LTR classes by default', () => {
      const { getByTestId } = render(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', () => {
      const { getByTestId } = renderRtl(<Example />);

      expect(getByTestId('range-dialog')).toHaveAttribute('data-test-rtl', 'true');
    });
  });

  describe('appendToNode', () => {
    it('portals as expected', () => {
      const { container, rerender } = render(<Example />);
      const selector = '[data-test-id="range-dialog"]';

      expect(container.querySelector(selector)).not.toBeNull();

      const node = document.createElement('div');

      document.body.appendChild(node);
      rerender(<Example dialogProps={{ appendToNode: node }} />);

      expect(container.querySelector(selector)).toBeNull();
      expect(node.querySelector(selector)).not.toBeNull();
    });
  });
});
