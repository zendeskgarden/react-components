/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import mockDate from 'mockdate';
import { DatePickerRange } from '../DatePickerRange';
import { IDatePickerRangeProps } from '../../../types';

const DEFAULT_START_VALUE = new Date(2019, 1, 5);
const DEFAULT_END_VALUE = new Date(2019, 2, 5);

const Example = (props: IDatePickerRangeProps) => (
  <DatePickerRange {...props}>
    <DatePickerRange.Start>
      <input data-test-id="start" />
    </DatePickerRange.Start>
    <DatePickerRange.End>
      <input data-test-id="end" />
    </DatePickerRange.End>
    <DatePickerRange.Trigger />
    <DatePickerRange.Dialog>
      <DatePickerRange.Calendar />
    </DatePickerRange.Dialog>
  </DatePickerRange>
);

jest.useFakeTimers();

describe('Trigger', () => {
  const user = userEvent.setup({ delay: null });

  beforeEach(() => {
    mockDate.set(DEFAULT_START_VALUE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('reflects the dialog open state via aria-expanded, and aria-controls references the dialog', () => {
    const { getByTestId } = render(
      <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
    );
    const button = getByTestId('calendar-button');
    const dialog = getByTestId('range-dialog');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', dialog.id);
  });

  it('opens the dialog and moves focus onto the selected day when clicked', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
    );
    const button = getByTestId('calendar-button');

    await user.click(button);

    expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');
    expect(button).toHaveAttribute('aria-expanded', 'true');

    const selectedDay = getAllByTestId('day').find(
      day => day.getAttribute('data-test-selected') === 'true'
    );

    expect(selectedDay).toHaveFocus();
  });

  it('opens the dialog when activated with the keyboard', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
    );
    const button = getByTestId('calendar-button');

    button.focus();
    await user.keyboard('{Enter}');

    expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

    const selectedDay = getAllByTestId('day').find(
      day => day.getAttribute('data-test-selected') === 'true'
    );

    expect(selectedDay).toHaveFocus();
  });

  it('moves focus onto todays date when no value is selected', async () => {
    const { getByTestId, getAllByTestId } = render(<Example />);

    await user.click(getByTestId('calendar-button'));

    const today = getAllByTestId('day').find(day => day.getAttribute('data-test-today') === 'true');

    expect(today).toHaveFocus();
  });

  it('opens on a typed, valid start date and focuses/selects it', async () => {
    const ControlledExample = () => {
      const [startValue, setStartValue] = useState<Date | undefined>(DEFAULT_START_VALUE);
      const [endValue, setEndValue] = useState<Date | undefined>(DEFAULT_END_VALUE);

      return (
        <Example
          startValue={startValue}
          endValue={endValue}
          onChange={value => {
            setStartValue(value.startValue);
            setEndValue(value.endValue);
          }}
        />
      );
    };
    const { getByTestId, getAllByTestId } = render(<ControlledExample />);
    const startInput = getByTestId('start');

    await user.clear(startInput);
    await user.type(startInput, '1/4/2019');
    await user.click(getByTestId('calendar-button'));

    const selectedDay = getAllByTestId('day').find(
      day => day.getAttribute('data-test-selected') === 'true'
    );

    expect(selectedDay).toHaveTextContent('4');
    expect(selectedDay).toHaveFocus();
  });
});
