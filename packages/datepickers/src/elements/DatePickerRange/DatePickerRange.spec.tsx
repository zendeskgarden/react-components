/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import userEvent from '@testing-library/user-event';
import { act, render, fireEvent, getAllByTestId as globalGetAllByTestId } from 'garden-test-utils';
import { KEYS } from '@zendeskgarden/container-utilities';
import { ClearableInput, Field } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledDayCell } from '../../styled';
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

    it('keeps the end value, shows the out-of-order start, and reports it without calling onChange, when the new start is after the existing end', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[14]); // March 10, 2019

      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: 'March 10, 2019',
        valid: false,
        reason: 'out-of-order'
      });
      expect(getByTestId('start')).toHaveValue('March 10, 2019');
      expect(getByTestId('end')).toHaveValue('March 5, 2019');
    });

    it('commits the new start and clears the end, as before, when the new start is after the existing end and keepTypedInput is false', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
          keepTypedInput={false}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[14]); // March 10, 2019

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 10),
        endValue: undefined
      });
      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: new Date(2019, 2, 10),
        inputValue: 'March 10, 2019',
        valid: true
      });
      expect(getByTestId('start')).toHaveValue('March 10, 2019');
      expect(getByTestId('end')).toHaveValue('');
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

  describe('calendar selection after a rejected value', () => {
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
            onChangeSpy(value);
            setStartValue(value.startValue);
            setEndValue(value.endValue);
          }}
        />
      );
    };

    it('shows the emitted values in both inputs when a day is clicked while End is focused after a rejected Start', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const startInput = getByTestId('start');
      const endInput = getByTestId('end');

      await user.clear(startInput);
      await user.type(startInput, 'garbage');
      await user.click(endInput);

      const firstMonthDays = globalGetAllByTestId(getAllByTestId('calendar-wrapper')[0], 'day');

      await user.click(firstMonthDays[14]); // February 10, 2019

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 10),
        endValue: DEFAULT_END_VALUE
      });
      expect(startInput).toHaveValue('February 10, 2019');
      expect(endInput).toHaveValue('March 5, 2019');
    });

    it('replaces the rejected End text when the current end value is clicked with no field focused', async () => {
      const { getByTestId, getAllByTestId } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const startInput = getByTestId('start');
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'garbage');
      await user.click(document.body);

      expect(endInput).toHaveValue('garbage');

      const secondMonthDays = globalGetAllByTestId(getAllByTestId('calendar-wrapper')[1], 'day');

      await user.click(secondMonthDays[9]); // March 5, 2019

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: DEFAULT_END_VALUE
      });
      expect(startInput).toHaveValue('February 5, 2019');
      expect(endInput).toHaveValue('March 5, 2019');
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

  describe.each([
    { prop: 'disabled', label: 'disabled' },
    { prop: 'readOnly', label: 'read-only' }
  ] as const)('when a field is $label', ({ prop, label }) => {
    type Field = 'start' | 'end';

    interface IExampleProps extends IDatePickerRangeProps {
      disabledOrReadOnlyFields?: Field[];
    }

    const fieldProps = (fields: Field[], field: Field) => ({ [prop]: fields.includes(field) });

    /** One `Trigger` per field, each inside its own group, as in the "Dialog" stories. */
    const GroupedExample = ({ disabledOrReadOnlyFields = [], ...props }: IExampleProps) => (
      <DatePickerRange {...props}>
        <DatePickerRange.StartGroup data-test-id="start-group">
          <DatePickerRange.Start>
            <input data-test-id="start" {...fieldProps(disabledOrReadOnlyFields, 'start')} />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger data-test-id="start-trigger" />
        </DatePickerRange.StartGroup>
        <DatePickerRange.EndGroup data-test-id="end-group">
          <DatePickerRange.End>
            <input data-test-id="end" {...fieldProps(disabledOrReadOnlyFields, 'end')} />
          </DatePickerRange.End>
          <DatePickerRange.Trigger data-test-id="end-trigger" />
        </DatePickerRange.EndGroup>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    /** A single `Trigger` outside either group, so it isn't associated with a field. */
    const UngroupedExample = ({ disabledOrReadOnlyFields = [], ...props }: IExampleProps) => (
      <DatePickerRange {...props}>
        <DatePickerRange.Start>
          <input data-test-id="start" {...fieldProps(disabledOrReadOnlyFields, 'start')} />
        </DatePickerRange.Start>
        <DatePickerRange.End>
          <input data-test-id="end" {...fieldProps(disabledOrReadOnlyFields, 'end')} />
        </DatePickerRange.End>
        <DatePickerRange.Trigger data-test-id="trigger" />
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    const isOpen = (getByTestId: (id: string) => HTMLElement) =>
      getByTestId('range-dialog').getAttribute('data-test-open') === 'true';

    describe.each([
      { field: 'start', other: 'end' },
      { field: 'end', other: 'start' }
    ] as const)(`when only $field is ${label}`, ({ field, other }) => {
      const renderExample = () =>
        render(
          <GroupedExample
            startValue={DEFAULT_START_VALUE}
            endValue={DEFAULT_END_VALUE}
            disabledOrReadOnlyFields={[field]}
          />
        );

      it("disables that field's trigger, but not the other field's", () => {
        const { getByTestId } = renderExample();

        expect(getByTestId(`${field}-trigger`)).toBeDisabled();
        expect(getByTestId(`${other}-trigger`)).toBeEnabled();
      });

      it("does not open when that field's trigger is clicked", () => {
        const { getByTestId } = renderExample();

        fireEvent.click(getByTestId(`${field}-trigger`));

        expect(isOpen(getByTestId)).toBe(false);
      });

      it('does not open when that field is clicked', () => {
        const { getByTestId } = renderExample();

        fireEvent.mouseDown(getByTestId(field));
        fireEvent.click(getByTestId(field));

        expect(isOpen(getByTestId)).toBe(false);
      });

      it("does not open when that field's group is clicked", () => {
        const { getByTestId } = renderExample();

        fireEvent.mouseDown(getByTestId(`${field}-group`));
        fireEvent.click(getByTestId(`${field}-group`));

        expect(isOpen(getByTestId)).toBe(false);
      });

      it.each([
        ['Down Arrow', {}],
        ['Alt+Down Arrow', { altKey: true }]
      ])('does not open on %s from that field', (_, modifiers) => {
        const { getByTestId } = renderExample();

        fireEvent.keyDown(getByTestId(field), { key: KEYS.DOWN, ...modifiers });

        expect(isOpen(getByTestId)).toBe(false);
      });

      it("still opens from the other field's trigger", async () => {
        const { getByTestId } = renderExample();

        await user.click(getByTestId(`${other}-trigger`));

        expect(isOpen(getByTestId)).toBe(true);
      });

      it('still opens on Down Arrow from the other field', () => {
        const { getByTestId } = renderExample();

        fireEvent.keyDown(getByTestId(other), { key: KEYS.DOWN });

        expect(isOpen(getByTestId)).toBe(true);
      });

      it('leaves a trigger outside either group enabled', () => {
        const { getByTestId } = render(<UngroupedExample disabledOrReadOnlyFields={[field]} />);

        expect(getByTestId('trigger')).toBeEnabled();
      });
    });

    describe(`when both fields are ${label}`, () => {
      const BOTH: Field[] = ['start', 'end'];

      it('disables every trigger, grouped or not', () => {
        const { getByTestId, unmount } = render(<GroupedExample disabledOrReadOnlyFields={BOTH} />);

        expect(getByTestId('start-trigger')).toBeDisabled();
        expect(getByTestId('end-trigger')).toBeDisabled();

        unmount();

        expect(
          render(<UngroupedExample disabledOrReadOnlyFields={BOTH} />).getByTestId('trigger')
        ).toBeDisabled();
      });

      it.each(['start', 'end'] as const)('does not open on Down Arrow from %s', field => {
        const { getByTestId } = render(<GroupedExample disabledOrReadOnlyFields={BOTH} />);

        fireEvent.keyDown(getByTestId(field), { key: KEYS.DOWN });

        expect(isOpen(getByTestId)).toBe(false);
      });

      it(`closes an already-open dialog once both fields become ${label}`, async () => {
        const { getByTestId, rerender } = render(<GroupedExample />);

        await user.click(getByTestId('start-trigger'));

        expect(isOpen(getByTestId)).toBe(true);

        rerender(<GroupedExample disabledOrReadOnlyFields={BOTH} />);

        expect(isOpen(getByTestId)).toBe(false);
      });

      it(`opens normally again once the fields are no longer ${label}`, async () => {
        const { getByTestId, rerender } = render(
          <GroupedExample disabledOrReadOnlyFields={BOTH} />
        );

        rerender(<GroupedExample />);

        expect(getByTestId('start-trigger')).toBeEnabled();

        await user.click(getByTestId('start-trigger'));

        expect(isOpen(getByTestId)).toBe(true);
      });
    });

    describe('calendar selection', () => {
      /** The inline calendar, as in the default "DatePickerRange" story. */
      const InlineExample = ({ disabledOrReadOnlyFields = [], ...props }: IExampleProps) => (
        <DatePickerRange onChange={onChangeSpy} {...props}>
          <DatePickerRange.Start>
            <input data-test-id="start" {...fieldProps(disabledOrReadOnlyFields, 'start')} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" {...fieldProps(disabledOrReadOnlyFields, 'end')} />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      const getDays = (getAllByTestId: (id: string) => HTMLElement[], month: 0 | 1) =>
        globalGetAllByTestId(getAllByTestId('calendar-wrapper')[month], 'day');

      describe(`when only start is ${label}`, () => {
        const renderExample = (props: IDatePickerRangeProps = {}) =>
          render(
            <InlineExample
              startValue={DEFAULT_START_VALUE}
              disabledOrReadOnlyFields={['start']}
              {...props}
            />
          );

        it('sets End, not Start, when a later day is clicked', async () => {
          const { getByTestId, getAllByTestId } = renderExample();

          await user.click(getDays(getAllByTestId, 1)[6]); // March 2, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: DEFAULT_START_VALUE,
            endValue: new Date(2019, 2, 2)
          });
          expect(getByTestId('start')).toHaveValue('February 5, 2019');
          expect(getByTestId('end')).toHaveValue('March 2, 2019');
        });

        it('moves End, rather than restarting the range, when both values are set', async () => {
          const { getAllByTestId } = renderExample({ endValue: DEFAULT_END_VALUE });

          await user.click(getDays(getAllByTestId, 0)[14]); // February 10, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: DEFAULT_START_VALUE,
            endValue: new Date(2019, 1, 10)
          });
        });

        it('marks days before the start value unavailable, but not the start day or later', () => {
          const { getAllByTestId } = renderExample();
          const days = getDays(getAllByTestId, 0);

          expect(days[8]).toHaveAttribute('aria-disabled', 'true'); // February 4, 2019
          expect(days[9]).not.toHaveAttribute('aria-disabled'); // February 5, 2019
          expect(days[10]).not.toHaveAttribute('aria-disabled'); // February 6, 2019
        });

        it('does not change either value when a day before the start value is clicked', async () => {
          const { getAllByTestId } = renderExample();

          await user.click(getDays(getAllByTestId, 0)[8]); // February 4, 2019

          expect(onChangeSpy).not.toHaveBeenCalled();
        });

        it('still shows the start value as selected', () => {
          const { getAllByTestId } = renderExample();

          expect(getDays(getAllByTestId, 0)[9]).toHaveAttribute('aria-selected', 'true');
        });

        it('reports End, not Start, as settled when the start day itself is clicked', async () => {
          const onValueSettledSpy = jest.fn();
          const { getAllByTestId } = renderExample({ onValueSettled: onValueSettledSpy });

          await user.click(getDays(getAllByTestId, 0)[9]); // February 5, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: DEFAULT_START_VALUE,
            endValue: new Date(2019, 1, 5)
          });
          expect(onValueSettledSpy).toHaveBeenCalledWith({
            field: 'end',
            date: new Date(2019, 1, 5),
            inputValue: 'February 5, 2019',
            valid: true
          });
        });

        it('sets End, leaving Start empty, when Start has no value', async () => {
          const { getByTestId, getAllByTestId } = renderExample({ startValue: undefined });

          expect(getDays(getAllByTestId, 0)[8]).not.toHaveAttribute('aria-disabled'); // February 4, 2019

          await user.click(getDays(getAllByTestId, 0)[14]); // February 10, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: undefined,
            endValue: new Date(2019, 1, 10)
          });
          expect(getByTestId('start')).toHaveValue('');
          expect(getByTestId('end')).toHaveValue('February 10, 2019');
        });

        it('sets End from a dialog opened from the End field', async () => {
          const { getByTestId, getAllByTestId } = render(
            <GroupedExample
              startValue={DEFAULT_START_VALUE}
              disabledOrReadOnlyFields={['start']}
              onChange={onChangeSpy}
            />
          );

          await user.click(getByTestId('end-trigger'));
          await user.click(getDays(getAllByTestId, 1)[6]); // March 2, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: DEFAULT_START_VALUE,
            endValue: new Date(2019, 2, 2)
          });
        });
      });

      describe(`when only end is ${label}`, () => {
        const renderExample = (props: IDatePickerRangeProps = {}) =>
          render(
            <InlineExample
              endValue={DEFAULT_END_VALUE}
              disabledOrReadOnlyFields={['end']}
              {...props}
            />
          );

        it('sets Start, not End, when an earlier day is clicked', async () => {
          const { getByTestId, getAllByTestId } = renderExample();

          await user.click(getDays(getAllByTestId, 0)[14]); // February 10, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: new Date(2019, 1, 10),
            endValue: DEFAULT_END_VALUE
          });
          expect(getByTestId('start')).toHaveValue('February 10, 2019');
          expect(getByTestId('end')).toHaveValue('March 5, 2019');
        });

        it('moves Start, rather than restarting the range, when both values are set', async () => {
          const { getAllByTestId } = renderExample({ startValue: DEFAULT_START_VALUE });

          await user.click(getDays(getAllByTestId, 0)[14]); // February 10, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: new Date(2019, 1, 10),
            endValue: DEFAULT_END_VALUE
          });
        });

        it('marks days after the end value unavailable, but not the end day or earlier', () => {
          const { getAllByTestId } = renderExample();
          const days = getDays(getAllByTestId, 1);

          expect(days[8]).not.toHaveAttribute('aria-disabled'); // March 4, 2019
          expect(days[9]).not.toHaveAttribute('aria-disabled'); // March 5, 2019
          expect(days[10]).toHaveAttribute('aria-disabled', 'true'); // March 6, 2019
        });

        it('does not change either value when a day after the end value is clicked', async () => {
          const { getAllByTestId } = renderExample();

          await user.click(getDays(getAllByTestId, 1)[10]); // March 6, 2019

          expect(onChangeSpy).not.toHaveBeenCalled();
        });

        it('sets Start, leaving End empty, when End has no value', async () => {
          const { getByTestId, getAllByTestId } = renderExample({ endValue: undefined });

          expect(getDays(getAllByTestId, 1)[10]).not.toHaveAttribute('aria-disabled'); // March 6, 2019

          await user.click(getDays(getAllByTestId, 1)[10]); // March 6, 2019

          expect(onChangeSpy).toHaveBeenCalledWith({
            startValue: new Date(2019, 2, 6),
            endValue: undefined
          });
          expect(getByTestId('start')).toHaveValue('March 6, 2019');
          expect(getByTestId('end')).toHaveValue('');
        });

        it('still shows the end value as selected', () => {
          const { getAllByTestId } = renderExample();

          expect(getDays(getAllByTestId, 1)[9]).toHaveAttribute('aria-selected', 'true');
        });
      });

      describe(`when both fields are ${label}`, () => {
        const BOTH: Field[] = ['start', 'end'];

        const renderExample = () =>
          render(
            <InlineExample
              startValue={DEFAULT_START_VALUE}
              endValue={DEFAULT_END_VALUE}
              disabledOrReadOnlyFields={BOTH}
            />
          );

        it('keeps the primary text color on days within the selected range', () => {
          const { getAllByTestId } = renderExample();
          const dayNumber = getDays(getAllByTestId, 0)[14].querySelector('[aria-hidden="true"]'); // February 10, 2019

          expect(dayNumber).not.toHaveStyleRule(
            'color',
            getColor({ theme: DEFAULT_THEME, variable: 'foreground.disabled' }),
            { modifier: `${StyledDayCell}[aria-disabled='true']:not([aria-selected='true']) &` }
          );
        });

        it('still shows both values as selected', () => {
          const { getAllByTestId } = renderExample();

          expect(getDays(getAllByTestId, 0)[9]).toHaveAttribute('aria-selected', 'true'); // February 5, 2019
          expect(getDays(getAllByTestId, 1)[9]).toHaveAttribute('aria-selected', 'true'); // March 5, 2019
        });

        it('does not change either value when a day is clicked', async () => {
          const { getAllByTestId } = renderExample();

          await user.click(getDays(getAllByTestId, 0)[14]); // February 10, 2019

          expect(onChangeSpy).not.toHaveBeenCalled();
        });

        it.each([
          ['Enter', '{Enter}'],
          ['Space', ' ']
        ])('does not change either value when %s is pressed on a day', async (_, key) => {
          const { getAllByTestId } = renderExample();

          getDays(getAllByTestId, 0)[9].focus(); // February 5, 2019
          await user.keyboard(key);

          expect(onChangeSpy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('calendar selection while a read-only field has focus', () => {
    it('sets End, not Start, when Start is read-only and focused', async () => {
      const { getByTestId, getAllByTestId } = render(
        <DatePickerRange startValue={DEFAULT_START_VALUE} onChange={onChangeSpy}>
          <DatePickerRange.Start>
            <input data-test-id="start" readOnly />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('start'));
      await user.click(globalGetAllByTestId(getAllByTestId('calendar-wrapper')[1], 'day')[6]); // March 2, 2019

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: new Date(2019, 2, 2)
      });
    });

    it('sets Start, not End, when End is read-only and focused', async () => {
      const { getByTestId, getAllByTestId } = render(
        <DatePickerRange endValue={DEFAULT_END_VALUE} onChange={onChangeSpy}>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" readOnly />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('end'));
      await user.click(globalGetAllByTestId(getAllByTestId('calendar-wrapper')[0], 'day')[14]); // February 10, 2019

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 10),
        endValue: DEFAULT_END_VALUE
      });
    });
  });

  describe('inline calendar availability', () => {
    interface IAvailabilityExampleProps extends IDatePickerRangeProps {
      start?: { disabled?: boolean; readOnly?: boolean };
      end?: { disabled?: boolean; readOnly?: boolean };
    }

    const AvailabilityExample = ({ start, end, ...props }: IAvailabilityExampleProps) => (
      <DatePickerRange onChange={onChangeSpy} {...props}>
        <DatePickerRange.Start>
          <input data-test-id="start" {...start} />
        </DatePickerRange.Start>
        <DatePickerRange.End>
          <input data-test-id="end" {...end} />
        </DatePickerRange.End>
        <DatePickerRange.Calendar />
      </DatePickerRange>
    );

    const getGrids = (getAllByRole: (role: string) => HTMLElement[]) => getAllByRole('grid');

    const getDays = (getAllByTestId: (id: string) => HTMLElement[], month: 0 | 1) =>
      globalGetAllByTestId(getAllByTestId('calendar-wrapper')[month], 'day');

    const getVisibleDays = (getAllByTestId: (id: string) => HTMLElement[]) =>
      getAllByTestId('day').filter(day => day.getAttribute('data-test-hidden') === 'false');

    const getPaddles = (getByTestId: (id: string) => HTMLElement) =>
      ['previous-year', 'previous-month', 'next-month', 'next-year'].map(id => getByTestId(id));

    describe.each([
      { name: 'both fields are read-only', start: { readOnly: true }, end: { readOnly: true } },
      {
        name: 'Start is disabled and End is read-only',
        start: { disabled: true },
        end: { readOnly: true }
      },
      {
        name: 'Start is read-only and End is disabled',
        start: { readOnly: true },
        end: { disabled: true }
      }
    ])('when $name', ({ start, end }) => {
      const renderExample = (props: IDatePickerRangeProps = {}) =>
        render(
          <AvailabilityExample
            startValue={DEFAULT_START_VALUE}
            endValue={DEFAULT_END_VALUE}
            start={start}
            end={end}
            {...props}
          />
        );

      it('marks each month grid read-only, not disabled', () => {
        const { getAllByRole } = renderExample();

        getGrids(getAllByRole).forEach(grid => {
          expect(grid).toHaveAttribute('aria-readonly', 'true');
          expect(grid).not.toHaveAttribute('aria-disabled');
        });
      });

      it('does not mark days unavailable, other than those outside minValue/maxValue', () => {
        const { getAllByTestId } = renderExample({ minValue: new Date(2019, 1, 3) });
        const firstMonthDays = getDays(getAllByTestId, 0);

        expect(firstMonthDays[6]).toHaveAttribute('aria-disabled', 'true'); // February 2, 2019
        expect(firstMonthDays[7]).not.toHaveAttribute('aria-disabled'); // February 3, 2019, before the range
        expect(firstMonthDays[14]).not.toHaveAttribute('aria-disabled'); // February 10, 2019, within the range
        expect(getDays(getAllByTestId, 1)[14]).not.toHaveAttribute('aria-disabled'); // March 10, 2019, after the range
      });

      it('keeps one day as a tab stop', () => {
        const { getAllByTestId } = renderExample();

        expect(
          getVisibleDays(getAllByTestId).filter(day => day.getAttribute('tabindex') === '0')
        ).toHaveLength(1);
      });

      it('can still be browsed with the keyboard and the toolbar', async () => {
        const { getByTestId, getAllByTestId } = renderExample();

        getPaddles(getByTestId).forEach(paddle => expect(paddle).toBeEnabled());

        getDays(getAllByTestId, 0)[9].focus(); // February 5, 2019
        await user.keyboard('{ArrowRight}');

        expect(getDays(getAllByTestId, 0)[10]).toHaveFocus(); // February 6, 2019

        await user.click(getByTestId('next-month'));

        expect(getAllByTestId('calendar-wrapper')[0]).toHaveTextContent('March 2019');
      });

      it('does not preview a range when a day is hovered', () => {
        const { getAllByTestId } = renderExample({ endValue: undefined });

        fireEvent.mouseEnter(getDays(getAllByTestId, 0)[14]); // February 10, 2019

        expect(getDays(getAllByTestId, 0)[12]).toHaveAttribute('data-test-highlighted', 'false'); // February 8, 2019
      });
    });

    describe('when both fields are disabled', () => {
      const renderExample = () =>
        render(
          <AvailabilityExample
            startValue={DEFAULT_START_VALUE}
            endValue={DEFAULT_END_VALUE}
            start={{ disabled: true }}
            end={{ disabled: true }}
          />
        );

      it('marks each month grid disabled, not read-only', () => {
        const { getAllByRole } = renderExample();

        getGrids(getAllByRole).forEach(grid => {
          expect(grid).toHaveAttribute('aria-disabled', 'true');
          expect(grid).not.toHaveAttribute('aria-readonly');
        });
      });

      it('marks every day unavailable', () => {
        const { getAllByTestId } = renderExample();
        const days = getVisibleDays(getAllByTestId);

        expect(days).toHaveLength(59); // February + March 2019
        days.forEach(day => expect(day).toHaveAttribute('aria-disabled', 'true'));
      });

      it('leaves no day as a tab stop', () => {
        const { getAllByTestId } = renderExample();

        getVisibleDays(getAllByTestId).forEach(day => expect(day).not.toHaveAttribute('tabindex'));
      });

      it('still renders the toolbar, with every paddle disabled', () => {
        const { getByRole, getByTestId } = renderExample();

        expect(getByRole('toolbar')).toBeInTheDocument();
        getPaddles(getByTestId).forEach(paddle => expect(paddle).toBeDisabled());
      });

      it('does not preview a range when a day is hovered', () => {
        const { getAllByTestId } = render(
          <AvailabilityExample
            startValue={DEFAULT_START_VALUE}
            start={{ disabled: true }}
            end={{ disabled: true }}
          />
        );

        fireEvent.mouseEnter(getDays(getAllByTestId, 0)[14]); // February 10, 2019

        expect(getDays(getAllByTestId, 0)[12]).toHaveAttribute('data-test-highlighted', 'false'); // February 8, 2019
      });

      it('restores the tab stop, paddles, and grid state once the fields are no longer disabled', () => {
        const { getAllByRole, getAllByTestId, getByTestId, rerender } = renderExample();

        rerender(
          <AvailabilityExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
        );

        getGrids(getAllByRole).forEach(grid => {
          expect(grid).not.toHaveAttribute('aria-disabled');
          expect(grid).not.toHaveAttribute('aria-readonly');
        });
        expect(getDays(getAllByTestId, 0)[14]).not.toHaveAttribute('aria-disabled'); // February 10, 2019
        expect(
          getVisibleDays(getAllByTestId).filter(day => day.getAttribute('tabindex') === '0')
        ).toHaveLength(1);
        getPaddles(getByTestId).forEach(paddle => expect(paddle).toBeEnabled());
      });
    });
  });

  describe('focus when the fields become disabled or read-only', () => {
    interface IFocusExampleProps extends IDatePickerRangeProps {
      start?: { disabled?: boolean; readOnly?: boolean };
      end?: { disabled?: boolean; readOnly?: boolean };
    }

    const InlineFocusExample = ({ start, end, ...props }: IFocusExampleProps) => (
      <DatePickerRange startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} {...props}>
        <DatePickerRange.Start>
          <input data-test-id="start" {...start} />
        </DatePickerRange.Start>
        <DatePickerRange.End>
          <input data-test-id="end" {...end} />
        </DatePickerRange.End>
        <DatePickerRange.Calendar />
      </DatePickerRange>
    );

    const DialogFocusExample = ({ start, end, ...props }: IFocusExampleProps) => (
      <DatePickerRange startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} {...props}>
        <DatePickerRange.StartGroup>
          <DatePickerRange.Start>
            <input data-test-id="start" {...start} />
          </DatePickerRange.Start>
          <DatePickerRange.Trigger data-test-id="start-trigger" />
        </DatePickerRange.StartGroup>
        <DatePickerRange.EndGroup>
          <DatePickerRange.End>
            <input data-test-id="end" {...end} />
          </DatePickerRange.End>
          <DatePickerRange.Trigger data-test-id="end-trigger" />
        </DatePickerRange.EndGroup>
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    const getDays = (getAllByTestId: (id: string) => HTMLElement[], month: 0 | 1) =>
      globalGetAllByTestId(getAllByTestId('calendar-wrapper')[month], 'day');

    describe('inline calendar', () => {
      it('is not a tab stop while the fields are enabled', () => {
        const { getAllByRole } = render(<InlineFocusExample />);

        getAllByRole('grid').forEach(grid => expect(grid).not.toHaveAttribute('tabindex'));
      });

      it.each([
        { month: 0 as const, name: 'first' },
        { month: 1 as const, name: 'second' }
      ])(
        'moves focus to the $name month grid when both fields become disabled while one of its days has focus',
        ({ month }) => {
          const { getAllByRole, getAllByTestId, rerender } = render(<InlineFocusExample />);

          act(() => getDays(getAllByTestId, month)[9].focus());

          rerender(<InlineFocusExample start={{ disabled: true }} end={{ disabled: true }} />);

          const grid = getAllByRole('grid')[month];

          expect(grid).toHaveFocus();
          expect(grid).toHaveAttribute('tabindex', '-1');
        }
      );

      it('moves focus to the first month grid when both fields become disabled while a toolbar paddle has focus', () => {
        const { getAllByRole, getByTestId, rerender } = render(<InlineFocusExample />);

        act(() => getByTestId('next-month').focus());

        rerender(<InlineFocusExample start={{ disabled: true }} end={{ disabled: true }} />);

        expect(getAllByRole('grid')[0]).toHaveFocus();
      });

      it('does not move focus when both fields become disabled while focus is outside the calendar', () => {
        const { getAllByRole, rerender } = render(
          <>
            <InlineFocusExample />
            <button data-test-id="outside" type="button">
              Outside
            </button>
          </>
        );
        const outside = document.querySelector<HTMLButtonElement>('[data-test-id="outside"]')!;

        act(() => outside.focus());

        rerender(
          <>
            <InlineFocusExample start={{ disabled: true }} end={{ disabled: true }} />
            <button data-test-id="outside" type="button">
              Outside
            </button>
          </>
        );

        expect(outside).toHaveFocus();
        getAllByRole('grid').forEach(grid => expect(grid).not.toHaveFocus());
      });

      it('keeps focus on the day when both fields become read-only', () => {
        const { getAllByTestId, rerender } = render(<InlineFocusExample />);
        const day = getDays(getAllByTestId, 0)[9];

        act(() => day.focus());

        rerender(<InlineFocusExample start={{ readOnly: true }} end={{ readOnly: true }} />);

        expect(day).toHaveFocus();
      });

      it('removes the grid from focus handling once the fields are enabled again', () => {
        const { getAllByRole, rerender } = render(
          <InlineFocusExample start={{ disabled: true }} end={{ disabled: true }} />
        );

        rerender(<InlineFocusExample />);

        getAllByRole('grid').forEach(grid => expect(grid).not.toHaveAttribute('tabindex'));
      });
    });

    describe('Dialog composition', () => {
      it.each(['start', 'end'] as const)(
        'returns focus to the %s field it was opened from when both fields become read-only',
        async field => {
          const { getByTestId, rerender } = render(<DialogFocusExample />);

          await user.click(getByTestId(`${field}-trigger`));

          expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

          rerender(<DialogFocusExample start={{ readOnly: true }} end={{ readOnly: true }} />);

          expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
          expect(getByTestId(field)).toHaveFocus();
        }
      );

      it('does not force focus anywhere when both fields become disabled', async () => {
        const { getAllByRole, getByTestId, rerender } = render(<DialogFocusExample />);

        await user.click(getByTestId('start-trigger'));

        rerender(<DialogFocusExample start={{ disabled: true }} end={{ disabled: true }} />);

        expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'false');
        expect(getByTestId('start')).not.toHaveFocus();
        getAllByRole('grid', { hidden: true }).forEach(grid => expect(grid).not.toHaveFocus());
      });
    });
  });

  describe('clear button focus, across field compositions', () => {
    type Field = 'start' | 'end';

    const WrappedClearableInput = React.forwardRef<
      HTMLInputElement,
      React.ComponentProps<typeof ClearableInput>
    >((props, ref) => <ClearableInput {...props} ref={ref} />);

    WrappedClearableInput.displayName = 'WrappedClearableInput';

    const StyledClearableInput = styled(ClearableInput)``;

    /** Renders `field` via `renderField`, and the other field as a plain input. */
    const CompositionExample = ({
      field,
      renderField,
      onValueSettled
    }: {
      field: Field;
      renderField: (testId: string) => React.ReactElement;
      onValueSettled: IDatePickerRangeProps['onValueSettled'];
    }) => (
      <DatePickerRange
        startValue={DEFAULT_START_VALUE}
        endValue={DEFAULT_END_VALUE}
        onChange={onChangeSpy}
        onValueSettled={onValueSettled}
      >
        {field === 'start' ? (
          renderField('start')
        ) : (
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
        )}
        {field === 'end' ? (
          renderField('end')
        ) : (
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        )}
        <DatePickerRange.Dialog>
          <DatePickerRange.Calendar />
        </DatePickerRange.Dialog>
      </DatePickerRange>
    );

    const FieldComponent = { start: DatePickerRange.Start, end: DatePickerRange.End };
    const GroupComponent = { start: DatePickerRange.StartGroup, end: DatePickerRange.EndGroup };

    const WrapperRefField = ({ field, testId }: { field: Field; testId: string }) => {
      const wrapperRef = useRef<HTMLDivElement>(null);
      const FieldTag = FieldComponent[field];

      return (
        <FieldTag wrapperRef={wrapperRef}>
          <WrappedClearableInput data-test-id={testId} wrapperRef={wrapperRef} />
        </FieldTag>
      );
    };

    const COMPOSITIONS: {
      name: string;
      renderField: (field: Field) => (testId: string) => React.ReactElement;
    }[] = [
      {
        name: 'a direct ClearableInput',
        renderField: field => testId => {
          const FieldTag = FieldComponent[field];

          return (
            <FieldTag>
              <ClearableInput data-test-id={testId} />
            </FieldTag>
          );
        }
      },
      {
        name: 'a wrapped ClearableInput, with wrapperRef on the field',
        renderField: field => testId => <WrapperRefField field={field} testId={testId} />
      },
      {
        name: 'a styled ClearableInput inside its group',
        renderField: field => testId => {
          const FieldTag = FieldComponent[field];
          const GroupTag = GroupComponent[field];

          return (
            <GroupTag>
              <FieldTag>
                <StyledClearableInput data-test-id={testId} />
              </FieldTag>
              <DatePickerRange.Trigger data-test-id={`${testId}-trigger`} />
            </GroupTag>
          );
        }
      },
      {
        name: 'a wrapped ClearableInput inside its group',
        renderField: field => testId => {
          const FieldTag = FieldComponent[field];
          const GroupTag = GroupComponent[field];

          return (
            <GroupTag>
              <FieldTag>
                <WrappedClearableInput data-test-id={testId} />
              </FieldTag>
              <DatePickerRange.Trigger data-test-id={`${testId}-trigger`} />
            </GroupTag>
          );
        }
      }
    ];

    describe.each(['start', 'end'] as const)('for %s', field => {
      describe.each(COMPOSITIONS)('with $name', ({ renderField }) => {
        it('waits to settle, and keeps the dialog open, until focus leaves the field past its clear button', async () => {
          const onValueSettledSpy = jest.fn();
          const { getByRole, getByTestId } = render(
            <CompositionExample
              field={field}
              renderField={renderField(field)}
              onValueSettled={onValueSettledSpy}
            />
          );
          const input = getByTestId(field);

          await user.click(input);
          await user.clear(input);
          await user.type(input, 'invalid date');

          expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

          onValueSettledSpy.mockClear();
          await user.tab();

          expect(getByRole('button', { name: 'Clear' })).toHaveFocus();
          expect(onValueSettledSpy).not.toHaveBeenCalled();
          expect(getByTestId('range-dialog')).toHaveAttribute('data-test-open', 'true');

          await user.tab();

          expect(onValueSettledSpy).toHaveBeenCalledWith(
            expect.objectContaining({ field, valid: false, reason: 'malformed' })
          );
        });
      });

      it("commits a typed date when its group's own Trigger is clicked, rather than treating the Trigger as part of the field", async () => {
        const { getByTestId } = render(
          <CompositionExample
            field={field}
            renderField={COMPOSITIONS[3].renderField(field)}
            onValueSettled={jest.fn()}
          />
        );
        const input = getByTestId(field);
        const typed = field === 'start' ? '2/10/2019' : '3/10/2019';

        await user.click(input);
        await user.clear(input);
        await user.type(input, typed);
        await user.click(getByTestId(`${field}-trigger`));

        expect(onChangeSpy).toHaveBeenCalledWith(
          field === 'start'
            ? { startValue: new Date(2019, 1, 10), endValue: DEFAULT_END_VALUE }
            : { startValue: DEFAULT_START_VALUE, endValue: new Date(2019, 2, 10) }
        );
      });
    });

    describe('Start/End wrapperRef', () => {
      /** Inline (no Dialog), with Start rendered as a wrapped ClearableInput bounded by `wrapperRef`. */
      const InlineWrapperRefExample = ({
        hasWrapperRef = true,
        onValueSettled
      }: {
        hasWrapperRef?: boolean;
        onValueSettled?: IDatePickerRangeProps['onValueSettled'];
      }) => {
        const wrapperRef = useRef<HTMLDivElement>(null);

        return (
          <DatePickerRange
            startValue={DEFAULT_START_VALUE}
            endValue={DEFAULT_END_VALUE}
            onChange={onChangeSpy}
            onValueSettled={onValueSettled}
          >
            <DatePickerRange.Start wrapperRef={hasWrapperRef ? wrapperRef : undefined}>
              <WrappedClearableInput data-test-id="start" wrapperRef={wrapperRef} />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <input data-test-id="end" />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
        );
      };

      it('waits to settle until focus leaves the field past its clear button, without a Dialog', async () => {
        const onValueSettledSpy = jest.fn();
        const { getByRole, getByTestId } = render(
          <InlineWrapperRefExample onValueSettled={onValueSettledSpy} />
        );
        const input = getByTestId('start');

        await user.clear(input);
        await user.type(input, 'invalid date');
        onValueSettledSpy.mockClear();
        await user.tab();

        expect(getByRole('button', { name: 'Clear' })).toHaveFocus();
        expect(onValueSettledSpy).not.toHaveBeenCalled();

        await user.tab();

        expect(onValueSettledSpy).toHaveBeenCalledWith(
          expect.objectContaining({ field: 'start', valid: false, reason: 'malformed' })
        );
      });

      it("leaves a direct ClearableInput child's own wrapperRef attached, rather than replacing it", () => {
        const wrapperRef = React.createRef<HTMLDivElement>();

        render(
          <DatePickerRange>
            <DatePickerRange.Start wrapperRef={wrapperRef}>
              <ClearableInput data-test-id="start" wrapperRef={wrapperRef} />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <input data-test-id="end" />
            </DatePickerRange.End>
          </DatePickerRange>
        );

        expect(wrapperRef.current).toHaveAttribute('data-garden-id', 'forms.input_group');
      });

      it('stops treating the old element as the field boundary once wrapperRef is removed', async () => {
        const onValueSettledSpy = jest.fn();
        const { getByRole, getByTestId, rerender } = render(
          <InlineWrapperRefExample onValueSettled={onValueSettledSpy} />
        );

        rerender(
          <InlineWrapperRefExample hasWrapperRef={false} onValueSettled={onValueSettledSpy} />
        );

        const input = getByTestId('start');

        await user.clear(input);
        await user.type(input, 'invalid date');
        onValueSettledSpy.mockClear();
        await user.tab();

        // Without a boundary, Tabbing onto the clear button counts as leaving the field.
        expect(getByRole('button', { name: 'Clear' })).toHaveFocus();
        expect(onValueSettledSpy).toHaveBeenCalledTimes(1);

        await user.tab();

        expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('group semantics within labelled Fields', () => {
    it("keeps a single labelled group per field inside StartGroup/EndGroup, dropping each ClearableInput's own", () => {
      const { getAllByRole, getByTestId } = render(
        <DatePickerRange>
          <Field>
            <Field.Label>Start date</Field.Label>
            <DatePickerRange.StartGroup>
              <DatePickerRange.Start>
                <ClearableInput data-test-id="start" />
              </DatePickerRange.Start>
              <DatePickerRange.Trigger data-test-id="start-trigger" />
            </DatePickerRange.StartGroup>
          </Field>
          <Field>
            <Field.Label>End date</Field.Label>
            <DatePickerRange.EndGroup>
              <DatePickerRange.End>
                <ClearableInput data-test-id="end" />
              </DatePickerRange.End>
              <DatePickerRange.Trigger data-test-id="end-trigger" />
            </DatePickerRange.EndGroup>
          </Field>
          <DatePickerRange.Dialog>
            <DatePickerRange.Calendar />
          </DatePickerRange.Dialog>
        </DatePickerRange>
      );
      const groups = getAllByRole('group');

      expect(groups).toHaveLength(2);
      expect(groups[0]).toHaveAccessibleName('Start date');
      expect(groups[0]).toContainElement(getByTestId('start'));
      expect(groups[0]).toContainElement(getByTestId('start-trigger'));
      expect(groups[1]).toHaveAccessibleName('End date');
      expect(groups[1]).toContainElement(getByTestId('end'));
      expect(groups[1]).toContainElement(getByTestId('end-trigger'));
    });

    it("keeps a consumer's own ClearableInput wrapperProps, alongside Start's blur handling", async () => {
      const onWrapperBlur = jest.fn();
      const onValueSettledSpy = jest.fn();
      const { getByRole, getByTestId } = render(
        <DatePickerRange onValueSettled={onValueSettledSpy}>
          <DatePickerRange.Start>
            <ClearableInput
              data-test-id="start"
              wrapperProps={{ 'data-test-id': 'inner', onBlur: onWrapperBlur } as any}
            />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const input = getByTestId('start');

      expect(getByTestId('inner')).toContainElement(input);

      await user.type(input, 'invalid date');
      await user.tab();

      expect(getByRole('button', { name: 'Clear' })).toHaveFocus();
      expect(onValueSettledSpy).not.toHaveBeenCalled();
      expect(onWrapperBlur).toHaveBeenCalled();
    });

    it("keeps each ClearableInput's own labelled group when there's no StartGroup/EndGroup around it", () => {
      const { getAllByRole } = render(
        <DatePickerRange>
          <Field>
            <Field.Label>Start date</Field.Label>
            <DatePickerRange.Start>
              <ClearableInput data-test-id="start" />
            </DatePickerRange.Start>
          </Field>
          <Field>
            <Field.Label>End date</Field.Label>
            <DatePickerRange.End>
              <ClearableInput data-test-id="end" />
            </DatePickerRange.End>
          </Field>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const groups = getAllByRole('group');

      expect(groups).toHaveLength(2);
      expect(groups[0]).toHaveAccessibleName('Start date');
      expect(groups[1]).toHaveAccessibleName('End date');
    });
  });

  describe('keepTypedInput', () => {
    const ControlledExample = ({
      keepTypedInput,
      onValueSettled
    }: Pick<IDatePickerRangeProps, 'keepTypedInput' | 'onValueSettled'>) => {
      const [range, setRange] = useState<{ startValue?: Date; endValue?: Date }>({
        startValue: DEFAULT_START_VALUE,
        endValue: DEFAULT_END_VALUE
      });

      return (
        <DatePickerRange
          startValue={range.startValue}
          endValue={range.endValue}
          onChange={setRange}
          onValueSettled={onValueSettled}
          keepTypedInput={keepTypedInput}
          minValue={new Date(2019, 0, 1)}
        >
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
    };

    const typeInto = async (input: HTMLElement, text: string) => {
      await user.clear(input);
      await user.type(input, text);
    };

    describe.each([
      {
        field: 'start',
        committed: 'February 5, 2019',
        outOfOrder: '4/1/2019',
        typed: '2/10/2019',
        reformatted: 'February 10, 2019'
      },
      {
        field: 'end',
        committed: 'March 5, 2019',
        outOfOrder: '1/10/2019',
        typed: '3/10/2019',
        reformatted: 'March 10, 2019'
      }
    ] as const)('for $field', ({ field, committed, outOfOrder, typed, reformatted }) => {
      describe.each([
        [
          'blurring',
          async () => {
            await user.tab();
          }
        ],
        [
          'pressing Enter',
          async () => {
            await user.keyboard('{Enter}');
          }
        ]
      ] as const)('when settling by %s', (_, settle) => {
        it('keeps unparseable typed text by default', async () => {
          const { getByTestId } = render(<ControlledExample />);
          const input = getByTestId(field);

          await typeInto(input, 'garbage');
          await settle();

          expect(input).toHaveValue('garbage');
        });

        it.each([
          ['unparseable text', 'garbage'],
          ['an out-of-range date', '1/1/2018'],
          ['an out-of-order date', outOfOrder]
        ])('reverts %s to the committed value when false', async (__, text) => {
          const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
          const input = getByTestId(field);

          await typeInto(input, text);
          await settle();

          expect(input).toHaveValue(committed);
        });

        it('still reports what was typed through onValueSettled, before reverting, when false', async () => {
          const onValueSettledSpy = jest.fn();
          const { getByTestId } = render(
            <ControlledExample keepTypedInput={false} onValueSettled={onValueSettledSpy} />
          );

          await typeInto(getByTestId(field), 'garbage');
          onValueSettledSpy.mockClear();
          await settle();

          expect(onValueSettledSpy).toHaveBeenCalledWith(
            expect.objectContaining({
              field,
              inputValue: 'garbage',
              valid: false,
              reason: 'malformed'
            })
          );
        });

        it('restores the committed value in an emptied field when false, as in earlier versions', async () => {
          const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
          const input = getByTestId(field);

          await user.clear(input);
          await settle();

          expect(input).toHaveValue(committed);
        });

        it('reformats a valid typed date to the committed value when false, as in earlier versions', async () => {
          const { getByTestId } = render(<ControlledExample keepTypedInput={false} />);
          const input = getByTestId(field);

          await typeInto(input, typed);
          await settle();

          expect(input).toHaveValue(reformatted);
        });
      });
    });
  });

  describe('typed format', () => {
    const ControlledExample = ({
      customParseDate
    }: Pick<IDatePickerRangeProps, 'customParseDate'>) => {
      const [range, setRange] = useState<{ startValue?: Date; endValue?: Date }>({
        startValue: DEFAULT_START_VALUE,
        endValue: DEFAULT_END_VALUE
      });

      return (
        <>
          <DatePickerRange
            startValue={range.startValue}
            endValue={range.endValue}
            onChange={setRange}
            customParseDate={customParseDate}
          >
            <DatePickerRange.Start>
              <input data-test-id="start" />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <input data-test-id="end" />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
          <button
            type="button"
            data-test-id="set-externally"
            onClick={() =>
              setRange({ startValue: new Date(2019, 1, 12), endValue: new Date(2019, 2, 12) })
            }
          >
            Set externally
          </button>
        </>
      );
    };

    describe.each([
      { field: 'start', typed: '2/10/2019' },
      { field: 'end', typed: '3/10/2019' }
    ] as const)('for $field', ({ field, typed }) => {
      it.each([
        [
          'blurring',
          async () => {
            await user.tab();
          }
        ],
        [
          'pressing Enter',
          async () => {
            await user.keyboard('{Enter}');
          }
        ]
      ])('keeps a valid typed date in the format it was typed in after %s', async (_, settle) => {
        const { getByTestId } = render(<ControlledExample />);
        const input = getByTestId(field);

        await user.clear(input);
        await user.type(input, typed);
        await settle();

        expect(input).toHaveValue(typed);
      });

      it('keeps text parsed by customParseDate as typed, too', async () => {
        const month = field === 'start' ? 1 : 2;
        const customParseDate = (inputValue?: string) =>
          inputValue === 'the tenth' ? new Date(2019, month, 10) : new Date(NaN);
        const { getByTestId } = render(<ControlledExample customParseDate={customParseDate} />);
        const input = getByTestId(field);

        await user.clear(input);
        await user.type(input, 'the tenth');
        await user.tab();

        expect(input).toHaveValue('the tenth');
      });

      it('still reformats once the value changes to a different day', async () => {
        const { getByTestId } = render(<ControlledExample />);
        const input = getByTestId(field);

        await user.clear(input);
        await user.type(input, typed);
        await user.tab();
        await user.click(getByTestId('set-externally'));

        expect(input).toHaveValue(field === 'start' ? 'February 12, 2019' : 'March 12, 2019');
      });
    });
  });

  describe('clearing', () => {
    const ClearingExample = ({
      startRequired,
      ...props
    }: IDatePickerRangeProps & { startRequired?: boolean }) => (
      <DatePickerRange
        startValue={DEFAULT_START_VALUE}
        endValue={DEFAULT_END_VALUE}
        onChange={onChangeSpy}
        {...props}
      >
        <DatePickerRange.Start>
          <input data-test-id="start" required={startRequired} />
        </DatePickerRange.Start>
        <DatePickerRange.End>
          <input data-test-id="end" />
        </DatePickerRange.End>
        <DatePickerRange.Calendar />
      </DatePickerRange>
    );

    describe.each([
      { field: 'start', expected: { startValue: undefined, endValue: DEFAULT_END_VALUE } },
      { field: 'end', expected: { startValue: DEFAULT_START_VALUE, endValue: undefined } }
    ] as const)('for $field', ({ field, expected }) => {
      it.each([
        [
          'blurring',
          async () => {
            await user.tab();
          }
        ],
        [
          'pressing Enter',
          async () => {
            await user.keyboard('{Enter}');
          }
        ]
      ])('commits undefined once a keyboard-emptied field settles by %s', async (_, settle) => {
        const { getByTestId } = render(<ClearingExample />);

        await user.clear(getByTestId(field));
        await settle();

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy).toHaveBeenCalledWith(expected);
      });

      it('reports the clear through onValueSettled only once, even after leaving the field', async () => {
        const onValueSettledSpy = jest.fn();
        const { getByTestId } = render(<ClearingExample onValueSettled={onValueSettledSpy} />);

        await user.clear(getByTestId(field));
        await user.tab();

        expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
        expect(onValueSettledSpy).toHaveBeenCalledWith({
          field,
          date: undefined,
          inputValue: '',
          valid: true
        });
      });

      it('does not commit undefined when keepTypedInput is false, restoring the committed value instead', async () => {
        const { getByTestId } = render(<ClearingExample keepTypedInput={false} />);

        await user.clear(getByTestId(field));
        await user.tab();

        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });

    it('commits undefined for a required field too, reporting it as required', async () => {
      const onValueSettledSpy = jest.fn();
      const { getByTestId } = render(
        <ClearingExample startRequired onValueSettled={onValueSettledSpy} />
      );

      await user.clear(getByTestId('start'));
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: undefined,
        endValue: DEFAULT_END_VALUE
      });
      expect(onValueSettledSpy).toHaveBeenCalledWith(
        expect.objectContaining({ field: 'start', valid: false, reason: 'required' })
      );
    });
  });
});
