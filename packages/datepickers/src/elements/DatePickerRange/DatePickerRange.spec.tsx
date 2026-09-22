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
      const firstMonthCells = firstMonthDays.filter(
        day => day.getAttribute('data-test-hidden') !== 'true'
      );
      const secondMonthCells = secondMonthDays.filter(
        day => day.getAttribute('data-test-hidden') !== 'true'
      );

      expect(firstMonthDays[9]).toHaveAttribute('aria-selected', 'false');
      expect(secondMonthDays[9]).toHaveAttribute('aria-selected', 'true');

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
      const firstMonthCells = firstMonthDays.filter(
        day => day.getAttribute('data-test-hidden') !== 'true'
      );
      const secondMonthCells = secondMonthDays.filter(
        day => day.getAttribute('data-test-hidden') !== 'true'
      );

      expect(firstMonthDays[9]).toHaveAttribute('aria-selected', 'true');
      expect(secondMonthDays[9]).toHaveAttribute('aria-selected', 'false');

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

  describe('calendar view stability', () => {
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

    it('does not advance the calendar view when the last day of the second month is selected via the keyboard, even though that month has more days than the first', async () => {
      // February 2019 (28 days) is the first month, March 2019 (31 days) the second - the
      // mismatched month lengths are what previously threw off the "is this still within the
      // visible two months?" window check off by a day.
      const { getAllByTestId } = render(<ControlledExample startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day').filter(
        day => day.getAttribute('data-test-hidden') !== 'true'
      );
      const lastDayOfSecondMonth = secondMonthDays[secondMonthDays.length - 1]; // March 31, 2019

      expect(lastDayOfSecondMonth).toHaveTextContent('31');

      lastDayOfSecondMonth.focus();
      await user.keyboard('{Enter}');

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });
  });

  describe('Out-of-order input', () => {
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

    it('does not move the calendar view when a typed end date is before the start date', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '1/1/2000');
      await user.tab();

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('does not move the calendar view when a typed start date is after the end date', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/1/2020');
      await user.tab();

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('preserves the valid start value when a typed end date is out of order', async () => {
      const { getByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '1/1/2000');
      await user.tab();

      expect(getByTestId('start')).toHaveValue('February 5, 2019');
    });

    it('preserves the valid end value when a typed start date is out of order', async () => {
      const { getByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/1/2020');
      await user.tab();

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

    it('uses custom formatDate method when a date is selected from the calendar', async () => {
      const FORMATTED_DATE = 'test';
      const { getByTestId, getAllByTestId } = render(
        <Example onChange={onChangeSpy} formatDate={() => FORMATTED_DATE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(getByTestId('start')).toHaveValue(FORMATTED_DATE);
    });
  });

  describe('locale changes', () => {
    it('reformats Start/End when only the locale prop changes', () => {
      const { getByTestId, rerender } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          locale="en-US"
        />
      );
      const startInput = getByTestId('start');
      const endInput = getByTestId('end');

      expect(startInput).toHaveValue('February 5, 2019');
      expect(endInput).toHaveValue('March 5, 2019');

      rerender(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          locale="fr-FR"
        />
      );

      expect(startInput).toHaveValue('5 février 2019');
      expect(endInput).toHaveValue('5 mars 2019');
    });
  });
});
