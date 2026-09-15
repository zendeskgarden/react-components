/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, within } from 'garden-test-utils';
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
    it('doesnt render calendar elements when hidden', () => {
      const { queryByTestId } = render(<Example value={DEFAULT_DATE} />);

      expect(queryByTestId('datepicker-menu')).toBeEmptyDOMElement();
    });

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

  describe('Day navigation keyboard event bubbling', () => {
    it.each([
      KEYS.RIGHT,
      KEYS.LEFT,
      KEYS.UP,
      KEYS.DOWN,
      KEYS.HOME,
      KEYS.END,
      KEYS.PAGE_UP,
      KEYS.PAGE_DOWN
    ])('does not let "%s" bubble past the day grid to an ancestor', async key => {
      const ancestorKeyDownSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={ancestorKeyDownSpy}>
          <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
        </div>
      );

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');

      fireEvent.keyDown(days[9], { key });

      expect(ancestorKeyDownSpy).not.toHaveBeenCalled();
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

    it('wraps each day in a non-focusable, unnamed gridcell containing exactly one button', async () => {
      const { getByTestId, getAllByTestId, getAllByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const dayButtons = getAllByTestId('day');
      const gridcells = getAllByRole('gridcell');

      expect(dayButtons[9].tagName).toBe('BUTTON');
      expect(gridcells).toHaveLength(dayButtons.length);

      const gridcell = gridcells[9];

      expect(gridcell).toHaveAttribute('role', 'gridcell');
      expect(gridcell).not.toHaveAttribute('tabindex');
      expect(within(gridcell).getAllByRole('button')).toHaveLength(1);
      expect(within(gridcell).getByRole('button')).toBe(dayButtons[9]);
    });

    it('marks the committed value with aria-pressed', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      expect(getAllByTestId('day')[9]).toHaveAttribute('aria-pressed', 'true');
    });

    it('clears aria-pressed on the stale value after a rejected out-of-range blur', async () => {
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

      expect(getAllByTestId('day')[9]).toHaveAttribute('aria-pressed', 'false');
    });

    it('marks today with aria-current when it is not the committed value', async () => {
      const { getByTestId, getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');
      const today = days.find(day => day.getAttribute('data-test-today') === 'true');

      expect(today).toHaveAttribute('aria-current', 'date');
      expect(today).toHaveAttribute('aria-pressed', 'false');
    });

    it('never renders aria-selected in the grid', async () => {
      const { getByTestId, container } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      expect(container.querySelectorAll('[aria-selected]')).toHaveLength(0);
    });
  });
});
