/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from 'garden-test-utils';
import { DatePickerRange } from '../DatePickerRange';

jest.useFakeTimers();

describe('DatePickerRange.EndGroup', () => {
  const user = userEvent.setup({ delay: null });

  it('focuses the end input when its own wrapper is clicked, not just the input itself', () => {
    const { container, getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose end date" />
        </DatePickerRange.EndGroup>
      </DatePickerRange>
    );

    const group = container.querySelector("[data-garden-id='forms.input_group']");

    fireEvent.click(group!);

    expect(getByTestId('end')).toHaveFocus();
  });

  it('also opens the dialog when clicked, if one is composed', async () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.Start>
          <input data-test-id="start" />
        </DatePickerRange.Start>
        <DatePickerRange.EndGroup data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose end date" />
        </DatePickerRange.EndGroup>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    await user.click(getByTestId('end-group'));

    expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
  });
});
