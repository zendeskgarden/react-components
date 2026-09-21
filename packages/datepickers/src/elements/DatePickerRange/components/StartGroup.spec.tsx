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

describe('DatePickerRange.StartGroup', () => {
  const user = userEvent.setup({ delay: null });

  it('focuses the start input when its own wrapper is clicked, not just the input itself', () => {
    const { container, getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.StartGroup>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose start date" />
        </DatePickerRange.StartGroup>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
      </DatePickerRange>
    );

    const group = container.querySelector("[data-garden-id='forms.input_group']");

    fireEvent.click(group!);

    expect(getByTestId('start')).toHaveFocus();
  });

  it('also opens the dialog when clicked, if one is composed', async () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.StartGroup data-test-id="start-group">
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger toggleCalendarLabel="Choose start date" />
        </DatePickerRange.StartGroup>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    await user.click(getByTestId('start-group'));

    expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
  });

  it('zeroes the trailing corner radius when isFlush is set, since it always abuts the following EndGroup', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.StartGroup isFlush data-test-id="start-group">
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
        </DatePickerRange.StartGroup>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
      </DatePickerRange>
    );

    expect(getByTestId('start-group')).toHaveStyleRule('border-start-end-radius', '0');
    expect(getByTestId('start-group')).toHaveStyleRule('border-end-end-radius', '0');
  });

  it('does not zero any corner radius when isFlush is not set', () => {
    const { getByTestId } = render(
      <DatePickerRange>
        <DatePickerRange.StartGroup data-test-id="start-group">
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
        </DatePickerRange.StartGroup>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
      </DatePickerRange>
    );

    expect(getByTestId('start-group')).not.toHaveStyleRule('border-start-end-radius', '0');
    expect(getByTestId('start-group')).not.toHaveStyleRule('border-end-end-radius', '0');
  });
});
