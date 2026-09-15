/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from 'garden-test-utils';
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

const Example = (props: Omit<IDatePickerProps, 'children'>) => (
  <DatePicker {...props}>
    <input data-test-id="input" />
  </DatePicker>
);

describe('DatePicker.Calendar', () => {
  const user = userEvent.setup();

  describe('Labelled region', () => {
    it('exposes the calendar grid as a region labelled by the calendar toggle button', async () => {
      const { getByTestId, getByRole } = render(<Example />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('region', { name: 'Choose date' })).toBe(getByTestId('calendar-wrapper'));
    });

    it('reflects a custom toggleCalendarLabel', async () => {
      const { getByTestId, getByRole } = render(<Example toggleCalendarLabel="Pick a date" />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('region', { name: 'Pick a date' })).toBeInTheDocument();
    });
  });

  describe('Scroll region behavior', () => {
    const originalScrollWidth = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollWidth');

    afterEach(() => {
      Object.defineProperty(Element.prototype, 'scrollWidth', originalScrollWidth as any);
    });

    it('is not in the tab order while its content fits without scrolling', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('calendar-button'));

      expect(getByTestId('calendar-wrapper')).not.toHaveAttribute('tabindex');
    });

    it('becomes keyboard-focusable once its content overflows, so keyboard users can reach it', async () => {
      Object.defineProperty(Element.prototype, 'scrollWidth', {
        configurable: true,
        value: 800
      });

      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('calendar-button'));

      const region = getByTestId('calendar-wrapper');

      await waitFor(() => expect(region).toHaveAttribute('tabindex', '0'));

      region.focus();

      expect(region).toHaveFocus();
    });
  });
});
