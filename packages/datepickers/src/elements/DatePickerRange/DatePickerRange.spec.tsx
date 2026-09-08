/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  fireEvent,
  getAllByTestId as globalGetAllByTestId,
  within,
  renderRtl
} from 'garden-test-utils';
import { KEYS } from '@zendeskgarden/container-utilities';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
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

  describe('Calendar display', () => {
    it('displays dates with correct previous styling', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      for (let x = 0; x < firstMonthDays.length; x++) {
        if (x <= 4) {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else if (x >= 33) {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else {
          expect(firstMonthDays[x]).toHaveAttribute('data-test-hidden', 'false');
        }
      }

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      for (let x = 0; x < secondMonthDays.length; x++) {
        if (x <= 4) {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else if (x >= 36) {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'true');
        } else {
          expect(secondMonthDays[x]).toHaveAttribute('data-test-hidden', 'false');
        }
      }
    });

    it('renders a visually-hidden date instead of a disabled button in empty previous-month cells', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const emptyDay = firstMonthDays[0];

      expect(emptyDay.tagName).not.toBe('BUTTON');
      expect(emptyDay).toHaveTextContent('27, January 2019');
      expect(emptyDay).toHaveAttribute('data-test-hidden', 'true');
    });

    it('displays dates with selected and today styling', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      expect(firstMonthDays[9]).toHaveAttribute('data-test-selected', 'true');
      expect(firstMonthDays[9]).toHaveAttribute('data-test-today', 'true');

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      expect(secondMonthDays[9]).toHaveAttribute('data-test-selected', 'true');
    });

    it('marks the committed start and end values with aria-pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      expect(firstMonthDays[9]).toHaveAttribute('aria-pressed', 'true');
      expect(firstMonthDays[8]).toHaveAttribute('aria-pressed', 'false');

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      expect(secondMonthDays[9]).toHaveAttribute('aria-pressed', 'true');
    });

    it('never renders aria-selected in the grid', () => {
      const { container } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(container.querySelector('[aria-selected]')).toBeNull();
    });

    it('displays "Sun" as default first day of week', () => {
      const { getAllByTestId } = render(<Example />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Sun');
    });

    it('display locale based first day of week', () => {
      const { getAllByTestId } = render(<Example locale="en-GB" />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Mon');
    });

    it('display custom first day of week', () => {
      const { getAllByTestId } = render(<Example locale="en-GB" weekStartsOn={3} />);

      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Wed');
    });

    it('displays highlighted days correctly if both values are provided', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly if both values are provided in RTL mode', () => {
      const { getAllByTestId } = renderRtl(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('displays highlighted days correctly when moused', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);

      for (let x = 0; x < firstMonthCells.length; x++) {
        const cell = firstMonthCells[x];

        if (x < 4) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-start', 'true');
        }
      }

      for (let x = 0; x < secondMonthCells.length; x++) {
        const cell = secondMonthCells[x];

        if (x < 5) {
          expect(cell).toHaveAttribute('data-test-highlighted', 'true');
        } else {
          expect(cell).toHaveAttribute('data-test-highlighted', 'false');
        }

        if (x === 4) {
          expect(cell).toHaveAttribute('data-test-end', 'true');
        }
      }
    });

    it('removes highlighted days when moused away', async () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

      await user.hover(globalGetAllByTestId(calendarWrappers[1], 'day')[9]);
      await user.unhover(getAllByTestId('calendar-internal-wrapper')[1]);

      firstMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });

      secondMonthCells.forEach(cell => {
        expect(cell).toHaveAttribute('data-test-highlighted', 'false');
      });
    });

    it('displays disabled styling for minimum and maximum values', () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          minValue={subDays(DEFAULT_START_VALUE, 2)}
          maxValue={addDays(DEFAULT_END_VALUE, 1)}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');

      for (let x = 0; x < firstMonthDays.length; x++) {
        const element = firstMonthDays[x];

        if (x < 5) {
          expect(element).not.toHaveAttribute('data-test-disabled');
        } else if (x < 7) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else if (x >= 7 && x <= 32) {
          expect(element).toHaveAttribute('data-test-disabled', 'false');
        } else {
          expect(element).not.toHaveAttribute('data-test-disabled');
        }
      }

      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      for (let x = 0; x < secondMonthDays.length; x++) {
        const element = secondMonthDays[x];

        if (x < 5) {
          expect(element).not.toHaveAttribute('data-test-disabled');
        } else if (x >= 5 && x < 11) {
          expect(element).toHaveAttribute('data-test-disabled', 'false');
        } else if (x >= 11 && x < 36) {
          expect(element).toHaveAttribute('data-test-disabled', 'true');
        } else {
          expect(element).not.toHaveAttribute('data-test-disabled');
        }
      }
    });

    it('displays preview months in correct format', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('displays previous month if previous paddle is clicked', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getAllByTestId('previous-month')[0]);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('January 2019');
      expect(monthDisplays[1]).toHaveTextContent('February 2019');
    });

    it('displays next month if next paddle is clicked', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getAllByTestId('next-month')[0]);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('displays current month if no value is provided', () => {
      const { getAllByTestId } = render(<Example />);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('renders the functional month paddles with default accessible names and lang="en"', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getByRole('button', { name: 'Previous month' });
      const nextButton = getByRole('button', { name: 'Next month' });

      expect(previousButton).toHaveAttribute('lang', 'en');
      expect(nextButton).toHaveAttribute('lang', 'en');
    });

    it('reflects consumer-provided paddle labels without setting lang', () => {
      const { getByRole } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          previousMonthLabel="Mois précédent"
          nextMonthLabel="Mois suivant"
        />
      );

      const previousButton = getByRole('button', { name: 'Mois précédent' });
      const nextButton = getByRole('button', { name: 'Mois suivant' });

      expect(previousButton).not.toHaveAttribute('lang');
      expect(nextButton).not.toHaveAttribute('lang');
    });

    it('does not render the hidden inner paddle between the two months at all', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getAllByTestId('previous-month')).toHaveLength(1);
      expect(getAllByTestId('next-month')).toHaveLength(1);
    });

    it('resets preview date if start value is updated while outside of visible range', async () => {
      const { getAllByTestId, rerender } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const previousPaddle = getAllByTestId('previous-month')[0];

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      rerender(<Example startValue={addMonths(DEFAULT_START_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('resets preview date if end value is updated while outside of visible range', async () => {
      const { getAllByTestId, rerender } = render(<Example endValue={DEFAULT_END_VALUE} />);

      const nextPaddle = getAllByTestId('next-month')[0];

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      rerender(<Example endValue={subMonths(DEFAULT_END_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if start input is focused while outside of visible range', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousPaddle = getAllByTestId('previous-month')[0];

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      await user.click(getByTestId('start'));

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if end input is focused while outside of visible range', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextPaddle = getAllByTestId('next-month')[0];

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      await user.click(getByTestId('end'));

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('renders compact styling correctly', () => {
      const { getAllByTestId, rerender } = render(<Example isCompact />);
      const calendarWrappers = getAllByTestId('calendar-wrapper');

      expect(calendarWrappers[0]).toHaveStyleRule('margin', '16px');
      rerender(<Example />);
      expect(calendarWrappers[0]).toHaveStyleRule('margin', '20px');
    });
  });

  describe('Calendar grid structure', () => {
    it('renders each month as a table with th day-labels and td days', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-internal-wrapper');

      calendarWrappers.forEach(wrapper => {
        expect(wrapper.tagName).toBe('TABLE');

        const dayLabels = globalGetAllByTestId(wrapper, 'day-label');
        const days = globalGetAllByTestId(wrapper, 'day');

        dayLabels.forEach(label => {
          expect(label.closest('th')).not.toBeNull();
        });
        days.forEach(day => {
          expect(day.closest('td')).not.toBeNull();
        });
      });
    });

    it('groups day-label cells and each week of days into table rows', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const wrapper = getAllByTestId('calendar-internal-wrapper')[0];
      const days = globalGetAllByTestId(wrapper, 'day');
      const rows = within(wrapper).getAllByRole('row');
      const headerRow = rows.find(row => within(row).queryAllByRole('columnheader').length > 0);
      const weekRows = rows.filter(row => row !== headerRow);

      expect(headerRow).toBeDefined();
      expect(within(headerRow!).getAllByRole('columnheader')).toHaveLength(7);
      expect(weekRows).toHaveLength(days.length / 7);
      weekRows.forEach(row => {
        expect(within(row).getAllByRole('gridcell')).toHaveLength(7);
      });
    });
  });

  describe('Calendar grid roles', () => {
    it('gives each month table a grid role labelled by its own month/year heading', () => {
      const { getAllByTestId, getAllByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const grids = getAllByRole('grid');

      expect(grids).toHaveLength(2);

      calendarWrappers.forEach((wrapper, index) => {
        const heading = within(wrapper).getByRole('heading', { level: 2 });

        expect(grids[index]).toHaveAttribute('aria-labelledby', heading.id);
      });
    });
  });

  describe('Calendar selection', () => {
    it('clears end value when date is selected', async () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 2),
        endValue: undefined
      });
    });

    it('selects end value when additional date is selected', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} onChange={onChangeSpy} />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 5),
        endValue: new Date(2019, 2, 2)
      });
    });

    it('selects start value if no values are selected', async () => {
      const { getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 2),
        endValue: undefined
      });
    });

    it('updates start value when clicked date is before end value', async () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} onChange={onChangeSpy} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');

      await user.click(globalGetAllByTestId(calendarWrappers[0], 'day')[5]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 1),
        endValue: undefined
      });
    });

    it('updates start input value when date is changed', () => {
      const { getByTestId, rerender } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      rerender(
        <Example
          startValue={new Date(2019, 1, 10)}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('start')).toHaveValue('February 10, 2019');
    });

    it('updates end input value when date is changed', () => {
      const { getByTestId, rerender } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      rerender(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={new Date(2019, 2, 15)}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('end')).toHaveValue('March 15, 2019');
    });

    it('does not select date if before minDate', async () => {
      const { getAllByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_START_VALUE, 2)}
          maxValue={addDays(DEFAULT_END_VALUE, 2)}
        />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day');
      const secondMonthDays = globalGetAllByTestId(calendarWrappers[1], 'day');

      await user.click(firstMonthDays[4]);
      await user.click(secondMonthDays[33]);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('selects start value via keyboard when no values are selected', async () => {
      const { getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const day = globalGetAllByTestId(calendarWrappers[1], 'day')[6];

      day.focus();
      await user.keyboard('{Enter}');

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 2),
        endValue: undefined
      });
    });

    it('updates valid start value when start input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('start'));
      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 8),
        endValue: new Date(2019, 2, 5)
      });
    });

    it('updates invalid start value when start input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('start'));
      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 2, 8),
        endValue: undefined
      });
    });

    it('updates valid end value when end input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('end'));
      await user.click(globalGetAllByTestId(monthDisplays[1], 'day')[12]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 5),
        endValue: new Date(2019, 2, 8)
      });
    });

    it('updates invalid end value when end input is focused', async () => {
      const { getAllByTestId, getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      const monthDisplays = getAllByTestId('calendar-wrapper');

      await user.click(getByTestId('end'));
      await user.click(globalGetAllByTestId(monthDisplays[0], 'day')[8]);

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 1, 4),
        endValue: undefined
      });
    });
  });

  describe('Keyboard navigation', () => {
    const getDayButtons = (wrapper: HTMLElement) =>
      within(wrapper)
        .getAllByRole('button')
        .filter(button => button.getAttribute('data-test-id') === 'day');

    it('gives exactly one day button tabindex="0" across both months, matching the start value', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);
      const secondMonthDays = getDayButtons(calendarWrappers[1]);
      const focusedDay = firstMonthDays[4];

      expect(focusedDay).toHaveAttribute('tabindex', '0');

      [...firstMonthDays, ...secondMonthDays]
        .filter(day => day !== focusedDay)
        .forEach(day => {
          expect(day).toHaveAttribute('tabindex', '-1');
        });
    });

    it('moves focus to the next day when ArrowRight is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.RIGHT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[5]).toHaveFocus();
      expect(days[5]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous day when ArrowLeft is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.LEFT });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[3]).toHaveFocus();
      expect(days[3]).toHaveAttribute('tabindex', '0');
      expect(days[4]).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus one week forward when ArrowDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.DOWN });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[11]).toHaveFocus();
    });

    it('moves focus one week back when ArrowUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[11], { key: KEYS.UP });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[4]).toHaveFocus();
    });

    it('moves focus into the second month grid when ArrowRight crosses the month boundary', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);
      const lastDayOfFebruary = firstMonthDays[firstMonthDays.length - 1];

      fireEvent.keyDown(lastDayOfFebruary, { key: KEYS.RIGHT });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);

      expect(secondMonthDays[0]).toHaveFocus();
      expect(secondMonthDays[0]).toHaveTextContent('1');
    });

    it('moves focus to the start of the week when Home is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.HOME });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[2]).toHaveFocus();
      expect(days[2]).toHaveTextContent('3');
    });

    it('moves focus to the end of the week when End is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.END });

      const days = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      expect(days[8]).toHaveFocus();
      expect(days[8]).toHaveTextContent('9');
    });

    it('moves focus to the same day next month, into the second grid, when PageDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);

      expect(secondMonthDays[4]).toHaveFocus();
      expect(secondMonthDays[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day previous month, shifting the window, when PageUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_UP });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('January 2019');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('February 2019');

      const days = getDayButtons(wrappers[0]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day next year when Shift+PageDown is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN, shiftKey: true });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('January 2020');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('February 2020');

      const days = getDayButtons(wrappers[1]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('moves focus to the same day previous year when Shift+PageUp is pressed', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_UP, shiftKey: true });

      const wrappers = getAllByTestId('calendar-wrapper');

      expect(within(wrappers[0]).getByTestId('month-display')).toHaveTextContent('February 2018');
      expect(within(wrappers[1]).getByTestId('month-display')).toHaveTextContent('March 2018');

      const days = getDayButtons(wrappers[0]);

      expect(days[4]).toHaveFocus();
      expect(days[4]).toHaveTextContent('5');
    });

    it('clamps to the last day of the month when PageDown lands on a day that does not exist', () => {
      mockDate.set(new Date(2019, 0, 31));

      const { getAllByTestId } = render(<Example startValue={new Date(2019, 0, 31)} />);

      const firstMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[0]);
      const selectedDay = firstMonthDays.find(
        day => day.getAttribute('data-test-selected') === 'true'
      )!;

      fireEvent.keyDown(selectedDay, { key: KEYS.PAGE_DOWN });

      const secondMonthDays = getDayButtons(getAllByTestId('calendar-wrapper')[1]);
      const focusedDay = secondMonthDays.find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveFocus();
      expect(focusedDay).toHaveTextContent('28');
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when next-month is clicked', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextButton = getAllByTestId('next-month')[0];

      nextButton.focus();
      fireEvent.click(nextButton);

      expect(nextButton).toHaveFocus();

      const wrappers = getAllByTestId('calendar-wrapper');
      const allDays = [...getDayButtons(wrappers[0]), ...getDayButtons(wrappers[1])];
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
      expect(focusedDays[0]).not.toHaveFocus();
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when previous-month is clicked', () => {
      const { getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getAllByTestId('previous-month')[0];

      previousButton.focus();
      fireEvent.click(previousButton);

      expect(previousButton).toHaveFocus();

      const wrappers = getAllByTestId('calendar-wrapper');
      const allDays = [...getDayButtons(wrappers[0]), ...getDayButtons(wrappers[1])];
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
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
