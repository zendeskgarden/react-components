/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, getAllByTestId as globalGetAllByTestId } from 'garden-test-utils';
import { KEYS } from '@zendeskgarden/container-utilities';
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

        const getVisibleDays = (getAllByTestId: (id: string) => HTMLElement[]) =>
          getAllByTestId('day').filter(day => day.getAttribute('data-test-hidden') === 'false');

        it('marks every day unavailable', () => {
          const { getAllByTestId } = renderExample();
          const days = getVisibleDays(getAllByTestId);

          expect(days).toHaveLength(59); // February + March 2019
          days.forEach(day => expect(day).toHaveAttribute('aria-disabled', 'true'));
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

        it('can still be browsed with the keyboard and the toolbar', async () => {
          const { getByTestId, getAllByTestId } = renderExample();

          getDays(getAllByTestId, 0)[9].focus(); // February 5, 2019
          await user.keyboard('{ArrowRight}');

          expect(getDays(getAllByTestId, 0)[10]).toHaveFocus(); // February 6, 2019

          await user.click(getByTestId('next-month'));

          expect(getAllByTestId('calendar-wrapper')[0]).toHaveTextContent('March 2019');
        });

        it(`makes days available again once the fields are no longer ${label}`, () => {
          const { getAllByTestId, rerender } = renderExample();

          rerender(<InlineExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />);

          expect(getDays(getAllByTestId, 0)[14]).not.toHaveAttribute('aria-disabled'); // February 10, 2019
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
});
