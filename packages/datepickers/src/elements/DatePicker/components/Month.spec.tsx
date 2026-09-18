/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent, within } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

const DEFAULT_DATE = new Date(2019, 1, 5);

const Example = (props: Omit<IDatePickerProps, 'children'>) => (
  <>
    <label data-test-id="label" htmlFor="input">
      Label
    </label>
    <DatePicker {...props}>
      <input data-test-id="input" id="input" />
    </DatePicker>
    <button data-test-id="outside" type="button">
      Outside
    </button>
    <div data-test-id="outside-background">Non-interactive background</div>
  </>
);

jest.useFakeTimers();

describe('Month', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Calendar display', () => {
    it('displays dates with correct previous styling', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      const days = getAllByTestId('day');

      for (let x = 0; x < days.length; x++) {
        if (x <= 4) {
          expect(days[x]).toHaveAttribute('data-test-previous', 'true');
        } else if (x >= 33) {
          expect(days[x]).toHaveAttribute('data-test-previous', 'true');
        } else {
          expect(days[x]).toHaveAttribute('data-test-previous', 'false');
        }
      }
    });

    it('displays dates with selected and today styling', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      const days = getAllByTestId('day');

      expect(days[9]).toHaveAttribute('data-test-selected', 'true');
      expect(days[9]).toHaveAttribute('data-test-today', 'true');
    });

    it('renders the visible day number plus a visually-hidden full date', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      const days = getAllByTestId('day');

      expect(days[9]).toHaveTextContent('5');
      expect(within(days[9]).getByText('5')).toHaveAttribute('aria-hidden', 'true');
      expect(within(days[9]).getByTestId('full-date')).toHaveTextContent('5 February 2019');
    });

    it('describes each real day cell as a selectable cell', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      getAllByTestId('day').forEach(day => {
        expect(day).toHaveAttribute('aria-roledescription', 'selectable cell');
      });
    });

    it('displays "Sun" as default first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Sun');
    });

    it('display locale based first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} locale="en-GB" />
      );

      await user.click(getByTestId('calendar-button'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Mon');
    });

    it('display custom first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} locale="en-GB" weekStartsOn={3} />
      );

      await user.click(getByTestId('calendar-button'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Wed');
    });

    it('displays disabled styling for minimum and maximum values', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      await user.click(getByTestId('calendar-button'));
      const days = getAllByTestId('day');

      for (let x = 0; x < days.length; x++) {
        const element = days[x];

        if (x <= 6) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else if (x > 11) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else {
          expect(element).toHaveAttribute('data-test-disabled', 'false');
        }
      }
    });

    it('displays selected month in correct format', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('renders the month/year heading as an aria-live h2 with an id', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const heading = getByRole('heading', { level: 2 });

      expect(heading).toHaveAttribute('aria-live', 'polite');
      expect(heading).toHaveAttribute('id');
    });

    it('displays previous month if previous paddle is clicked', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getByTestId('previous-month'));

      expect(getByTestId('month-display')).toHaveTextContent('January 2019');
    });

    it('displays next month if next paddle is clicked', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getByTestId('next-month'));

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');
    });

    it('displays current month if no value is provided', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('calendar-button'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });
  });

  describe('Calendar selection', () => {
    it('calls onChange when date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28));
    });

    it('updates input value when date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(input).toHaveValue('January 28, 2019');
    });

    it('returns focus to the input when a date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(input).toHaveFocus();
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('reopens on a second click of the already-focused input after a date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(input).toHaveFocus();
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');

      await user.click(input);

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('selects, closes, and returns focus to the input on Enter', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));

      const day = getAllByTestId('day')[1];

      day.focus();
      await user.keyboard('{Enter}');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28));
      expect(input).toHaveValue('January 28, 2019');
      expect(input).toHaveFocus();
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('selects, closes, and returns focus to the input on Space', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));

      const day = getAllByTestId('day')[1];

      day.focus();
      await user.keyboard(' ');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28));
      expect(input).toHaveValue('January 28, 2019');
      expect(input).toHaveFocus();
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('does not select date if before minDate', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      await user.click(getByTestId('calendar-button'));
      const days = getAllByTestId('day');

      fireEvent.click(days[0]);
      fireEvent.click(days[days.length - 1]);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('does not select a disabled date via keyboard, but keeps it focusable', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      await user.click(getByTestId('calendar-button'));
      const disabledDay = getAllByTestId('day')[0];

      expect(disabledDay).toHaveAttribute('data-test-disabled', 'true');
      expect(disabledDay).toHaveAttribute('aria-disabled', 'true');
      expect(disabledDay).not.toHaveAttribute('disabled');

      disabledDay.focus();

      expect(disabledDay).toHaveFocus();

      await user.keyboard('{Enter}');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Day grid keyboard navigation', () => {
    it('gives exactly one day button tabindex="0", matching the focused day', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');
      const focusedDay = days[9];

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveAttribute('tabindex', '0');

      days
        .filter(day => day !== focusedDay)
        .forEach(day => {
          expect(day).toHaveAttribute('tabindex', '-1');
        });
    });

    it('moves focus to the next day when ArrowRight is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.RIGHT });

      expect(days[10]).toHaveFocus();
      expect(days[10]).toHaveAttribute('tabindex', '0');
      expect(days[9]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous day when ArrowLeft is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.LEFT });

      expect(days[8]).toHaveFocus();
      expect(days[8]).toHaveAttribute('tabindex', '0');
      expect(days[9]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous day when ArrowRight is pressed, in RTL', async () => {
      const { getByTestId, getAllByTestId } = renderRtl(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.RIGHT });

      expect(days[8]).toHaveFocus();
      expect(days[8]).toHaveAttribute('tabindex', '0');
      expect(days[9]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the next day when ArrowLeft is pressed, in RTL', async () => {
      const { getByTestId, getAllByTestId } = renderRtl(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.LEFT });

      expect(days[10]).toHaveFocus();
      expect(days[10]).toHaveAttribute('tabindex', '0');
      expect(days[9]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus one week forward when ArrowDown is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.DOWN });

      expect(days[16]).toHaveFocus();
    });

    it('moves focus one week back when ArrowUp is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.UP });

      expect(days[2]).toHaveFocus();
    });

    it('moves focus to the start of the week when Home is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.HOME });

      expect(days[7]).toHaveFocus();
    });

    it('moves focus to the end of the week when End is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.END });

      expect(days[13]).toHaveFocus();
    });

    it('moves focus to the same day next month when PageDown is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.PAGE_DOWN });

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('5');
    });

    it('moves focus to the same day previous month when PageUp is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.PAGE_UP });

      expect(getByTestId('month-display')).toHaveTextContent('January 2019');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('5');
    });

    it('clamps to the last day of the month when PageDown lands on a day that does not exist', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={new Date(2019, 0, 31)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const selectedDay = getAllByTestId('day').find(
        day => day.getAttribute('data-test-selected') === 'true'
      )!;

      fireEvent.keyDown(selectedDay, { key: KEYS.PAGE_DOWN });

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('28');
    });

    it('moves focus to the same day next year when Shift+PageDown is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.PAGE_DOWN, shiftKey: true });

      expect(getByTestId('month-display')).toHaveTextContent('February 2020');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('5');
    });

    it('moves focus to the same day previous year when Shift+PageUp is pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key: KEYS.PAGE_UP, shiftKey: true });

      expect(getByTestId('month-display')).toHaveTextContent('February 2018');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('5');
    });

    it('clamps February 29 to February 28 when Shift+PageDown crosses into a non-leap year', async () => {
      mockDate.set(new Date(2020, 1, 29));

      const { getByTestId, getAllByTestId } = render(
        <Example value={new Date(2020, 1, 29)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const selectedDay = getAllByTestId('day').find(
        day => day.getAttribute('data-test-selected') === 'true'
      )!;

      fireEvent.keyDown(selectedDay, { key: KEYS.PAGE_DOWN, shiftKey: true });

      expect(getByTestId('month-display')).toHaveTextContent('February 2021');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('28');

      mockDate.set(DEFAULT_DATE);
    });

    it('advances the month display and focuses day 1 of the new month when navigating past the end of the month', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={new Date(2019, 1, 28)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const selectedDay = getAllByTestId('day').find(
        day => day.getAttribute('data-test-selected') === 'true'
      )!;

      fireEvent.keyDown(selectedDay, { key: KEYS.RIGHT });

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');

      const newDays = getAllByTestId('day');
      const focusedDay = newDays.find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('1');
      expect(focusedDay).toHaveAttribute('data-test-previous', 'false');
    });
  });

  describe('Calendar grid roles', () => {
    it('has grid role and is labelled by the month/year heading', async () => {
      const { getByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const heading = getByRole('heading', { level: 2 });
      const grid = getByRole('grid');

      expect(grid).toHaveAttribute('aria-labelledby', heading.id);
    });

    it('hides the abbreviated day-label from screen readers in favor of a visually-hidden full weekday name', async () => {
      const { getByTestId, getAllByRole, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const columnHeaders = getAllByRole('columnheader');
      const dayLabels = getAllByTestId('day-label');
      const fullDayLabels = getAllByTestId('day-label-full');

      expect(columnHeaders[0]).not.toHaveAttribute('abbr');
      expect(dayLabels[0]).toHaveTextContent('Sun');
      expect(dayLabels[0]).toHaveAttribute('aria-hidden', 'true');
      expect(fullDayLabels[0]).toHaveTextContent('Sunday');
      expect(fullDayLabels[0]).toHaveAttribute('hidden');
    });

    it('groups the day-label cells and each week of days into rows of 7', async () => {
      const { getByTestId, getAllByTestId, getAllByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const rows = getAllByRole('row');
      const headerRow = rows.find(row => within(row).queryAllByRole('columnheader').length > 0);
      const weekRows = rows.filter(row => within(row).queryAllByRole('gridcell').length > 0);
      const expectedWeekCount = getAllByTestId('day').length / 7;

      expect(headerRow).toBeDefined();
      expect(within(headerRow!).getAllByRole('columnheader')).toHaveLength(7);
      expect(weekRows).toHaveLength(expectedWeekCount);
      weekRows.forEach(row => {
        expect(within(row).getAllByRole('gridcell')).toHaveLength(7);
      });
    });

    it('makes each gridcell itself the focusable roving-tabindex element, with no nested button', async () => {
      const { getByTestId, getAllByTestId, getAllByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');
      const gridcells = getAllByRole('gridcell');

      expect(gridcells).toHaveLength(days.length);

      const gridcell = gridcells[9];

      expect(gridcell).toBe(days[9]);
      expect(gridcell.tagName).toBe('TD');
      expect(gridcell).toHaveAttribute('role', 'gridcell');
      expect(gridcell).toHaveAttribute('tabindex');
      expect(within(gridcell).queryAllByRole('button')).toHaveLength(0);
    });

    it('marks the committed value with aria-selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      expect(getAllByTestId('day')[9]).toHaveAttribute('aria-selected', 'true');
    });

    it('clears aria-selected on the stale value after a rejected out-of-range blur', async () => {
      const ControlledExample = () => {
        const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

        return (
          <Example
            value={value}
            onChange={setValue}
            minValue={subDays(DEFAULT_DATE, 2)}
            maxValue={addDays(DEFAULT_DATE, 2)}
          />
        );
      };
      const { getByTestId, getAllByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));

      fireEvent.change(input, { target: { value: '1/1/2020' } });
      fireEvent.blur(input);

      expect(getAllByTestId('day')[9]).toHaveAttribute('aria-selected', 'false');
    });

    it('marks today with aria-current when it is not the committed value', async () => {
      const { getByTestId, getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');
      const today = days.find(day => day.getAttribute('data-test-today') === 'true');

      expect(today).toHaveAttribute('aria-current', 'date');
      expect(today).toHaveAttribute('aria-selected', 'false');
    });

    it('renders aria-selected on every day cell, true only for the committed value', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      getAllByTestId('day').forEach((day, index) => {
        expect(day).toHaveAttribute('aria-selected', index === 9 ? 'true' : 'false');
      });
    });
  });
});
