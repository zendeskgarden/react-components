/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, getAllByTestId as globalGetAllByTestId } from 'garden-test-utils';
import mockDate from 'mockdate';
import { DatePickerRange } from './DatePickerRange';
import { IDatePickerRangeProps } from '../../types';

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
    <DatePickerRange.Calendar />
  </DatePickerRange>
);

describe('DatePickerRange', () => {
  const user = userEvent.setup();

  let onChangeSpy: (values: { startValue?: Date; endValue?: Date }) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_START_VALUE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Combobox semantics', () => {
    it('marks both inputs as a permanently-expanded combobox controlling the calendar', () => {
      const { getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendar = getByTestId('range-calendar');
      const startInput = getByTestId('start');
      const endInput = getByTestId('end');

      [startInput, endInput].forEach(input => {
        expect(input).toHaveAttribute('role', 'combobox');
        expect(input).toHaveAttribute('aria-expanded', 'true');
        expect(input).toHaveAttribute('aria-autocomplete', 'none');
        expect(input).toHaveAttribute('aria-controls', calendar.id);
        expect(input).not.toHaveAttribute('aria-haspopup');
      });
    });

    it('sets a native `autocomplete="off"` attribute on both inputs by default', () => {
      const { getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getByTestId('start')).toHaveAttribute('autocomplete', 'off');
      expect(getByTestId('end')).toHaveAttribute('autocomplete', 'off');
    });

    it('allows the native `autocomplete` attribute to be overridden on both inputs', () => {
      const { getByTestId } = render(
        <DatePickerRange startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE}>
          <DatePickerRange.Start>
            <input data-test-id="start" autoComplete="username" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" autoComplete="bday" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      expect(getByTestId('start')).toHaveAttribute('autocomplete', 'username');
      expect(getByTestId('end')).toHaveAttribute('autocomplete', 'bday');
    });
  });

  describe('onValueSettled', () => {
    let onValueSettledSpy: (result: {
      field: string;
      date?: Date;
      inputValue: string;
      valid: boolean;
      reason?: string;
    }) => void;

    beforeEach(() => {
      onValueSettledSpy = jest.fn();
    });

    it('reports a valid start date when a day is selected from the calendar with no values set', async () => {
      const { getAllByTestId } = render(
        <Example onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: new Date(2019, 2, 2),
        inputValue: 'March 2, 2019',
        valid: true
      });
    });

    it('reports a valid end date when an additional day is selected from the calendar', async () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[6]);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: new Date(2019, 2, 2),
        inputValue: 'March 2, 2019',
        valid: true
      });
    });

    it('does not report a stale value when a day is selected from the calendar', async () => {
      const { getAllByTestId } = render(
        <Example onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
    });

    it('preserves the end value and reports a valid start date when the new start is before the existing end', async () => {
      const { getAllByTestId } = render(
        <Example
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[0], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 2),
        endValue: DEFAULT_END_VALUE
      });
      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: new Date(2019, 1, 2),
        inputValue: 'February 2, 2019',
        valid: true
      });
    });

    it('preserves the end value and reports an invalid, out-of-order start date when the new start is after the existing end', async () => {
      const { getAllByTestId } = render(
        <Example
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[14]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 10),
        endValue: DEFAULT_END_VALUE
      });
      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: 'March 10, 2019',
        valid: false,
        reason: 'out-of-order'
      });
    });
  });

  describe('Out-of-range input', () => {
    const ControlledExample = ({
      startValue: initialStartValue,
      endValue: initialEndValue,
      ...props
    }: IDatePickerRangeProps) => {
      const [startValue, setStartValue] = useState(initialStartValue);
      const [endValue, setEndValue] = useState(initialEndValue);

      return (
        <Example
          {...props}
          startValue={startValue}
          endValue={endValue}
          onChange={value => {
            setStartValue(value.startValue);
            setEndValue(value.endValue);
          }}
        />
      );
    };

    it('does not move the calendar view when a typed start date is out of range', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={DEFAULT_START_VALUE}
          maxValue={DEFAULT_END_VALUE}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/1/2020');
      await user.tab();

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('does not move the calendar view when a typed end date is out of range', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={DEFAULT_START_VALUE}
          maxValue={DEFAULT_END_VALUE}
        />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '1/1/2020');
      await user.tab();

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('clears the stale start value pressed state and range highlight after a rejected out-of-range blur', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={DEFAULT_START_VALUE}
          maxValue={DEFAULT_END_VALUE}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/1/2020');
      await user.tab();

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      expect(firstMonthDays[9]).toHaveAttribute('aria-pressed', 'false');
      expect(secondMonthDays[9]).toHaveAttribute('aria-pressed', 'true');

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('clears the stale end value pressed state and range highlight after a rejected out-of-range blur', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={DEFAULT_START_VALUE}
          maxValue={DEFAULT_END_VALUE}
        />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '1/1/2020');
      await user.tab();

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      expect(firstMonthDays[9]).toHaveAttribute('aria-pressed', 'true');
      expect(secondMonthDays[9]).toHaveAttribute('aria-pressed', 'false');

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('preserves the still-valid end value when a new valid start date is chosen from the calendar after a rejected out-of-range start commit', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={DEFAULT_START_VALUE}
          maxValue={DEFAULT_END_VALUE}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/1/2020');
      await user.keyboard('{Enter}');

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      await user.click(firstMonthDays[10]); // February 6, 2019

      expect(startInput).toHaveValue('February 6, 2019');
      expect(getByTestId('end')).toHaveValue('March 5, 2019');
    });
  });

  describe('customParseDate()', () => {
    it('uses customParseDate to determine date validitiy if provided', async () => {
      const MOCK_DATE = new Date(2019, 0, 1);
      const customParseDateSpy: (input?: string) => Date = jest.fn().mockReturnValue(MOCK_DATE);
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          customParseDate={customParseDateSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: MOCK_DATE,
        endValue: DEFAULT_END_VALUE
      });
    });

    it('does not call onChange if parsed date is the current value', async () => {
      const customParseDateSpy: (input?: string) => Date = jest
        .fn()
        .mockReturnValue(DEFAULT_END_VALUE);
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          customParseDate={customParseDateSpy}
        />
      );
      const endInput = getByTestId('end');

      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('formatDate()', () => {
    it('uses custom formatDate method if provided', () => {
      const FORMATTED_DATE = 'test';
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          formatDate={() => FORMATTED_DATE}
        />
      );
      const startInput = getByTestId('start');

      expect(startInput).toHaveValue(FORMATTED_DATE);
    });
  });
});
