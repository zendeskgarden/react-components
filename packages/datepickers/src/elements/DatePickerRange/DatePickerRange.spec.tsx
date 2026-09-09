/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import {
  act,
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
import { ClearableInput } from '@zendeskgarden/react-forms';
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
      const { getByTestId, rerender } = render(<Example isCompact />);

      expect(getByTestId('range-calendar')).toHaveStyleRule(
        'grid-template-columns',
        'repeat(7, 32px) 16px repeat(7, 32px)'
      );
      rerender(<Example />);
      expect(getByTestId('range-calendar')).toHaveStyleRule(
        'grid-template-columns',
        'repeat(7, 40px) 20px repeat(7, 40px)'
      );
    });
  });

  describe('Header toolbar', () => {
    it('gives the header a toolbar role and an accessible name', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getByRole('toolbar')).toHaveAccessibleName('Calendar view');
    });

    it('sets lang="en" on the default toolbar label', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getByRole('toolbar')).toHaveAttribute('lang', 'en');
    });

    it('reflects a consumer-provided toolbar label without setting lang', () => {
      const { getByRole } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          toolbarLabel="Navigation du calendrier"
        />
      );

      const toolbar = getByRole('toolbar');

      expect(toolbar).toHaveAccessibleName('Navigation du calendrier');
      expect(toolbar).not.toHaveAttribute('lang');
    });

    it('renders the year paddles with default accessible names and lang="en"', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getByRole('button', { name: 'Previous year' });
      const nextButton = getByRole('button', { name: 'Next year' });

      expect(previousButton).toHaveAttribute('lang', 'en');
      expect(nextButton).toHaveAttribute('lang', 'en');
    });

    it('reflects consumer-provided year paddle labels without setting lang', () => {
      const { getByRole } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          previousYearLabel="Année précédente"
          nextYearLabel="Année suivante"
        />
      );

      const previousButton = getByRole('button', { name: 'Année précédente' });
      const nextButton = getByRole('button', { name: 'Année suivante' });

      expect(previousButton).not.toHaveAttribute('lang');
      expect(nextButton).not.toHaveAttribute('lang');
    });

    it('renders exactly one previous-year and next-year paddle', () => {
      const { getAllByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getAllByRole('button', { name: 'Previous year' })).toHaveLength(1);
      expect(getAllByRole('button', { name: 'Next year' })).toHaveLength(1);
    });

    it('displays the same months one year earlier if the previous year paddle is clicked', async () => {
      const { getByRole, getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: 'Previous year' }));

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2018');
      expect(monthDisplays[1]).toHaveTextContent('March 2018');
    });

    it('displays the same months one year later if the next year paddle is clicked', async () => {
      const { getByRole, getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: 'Next year' }));

      const monthDisplays = getAllByTestId('month-display');

      expect(monthDisplays[0]).toHaveTextContent('February 2020');
      expect(monthDisplays[1]).toHaveTextContent('March 2020');
    });

    it('gives exactly one paddle tabindex="0" initially, matching the first control', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousYear = getByRole('button', { name: 'Previous year' });
      const previousMonth = getByRole('button', { name: 'Previous month' });
      const nextMonth = getByRole('button', { name: 'Next month' });
      const nextYear = getByRole('button', { name: 'Next year' });

      expect(previousYear).toHaveAttribute('tabindex', '0');
      [previousMonth, nextMonth, nextYear].forEach(button => {
        expect(button).toHaveAttribute('tabindex', '-1');
      });
    });

    it('moves focus to the next paddle when ArrowRight is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousYear = getByRole('button', { name: 'Previous year' });
      const previousMonth = getByRole('button', { name: 'Previous month' });

      act(() => {
        previousYear.focus();
      });
      fireEvent.keyDown(previousYear, { key: KEYS.RIGHT });

      expect(previousMonth).toHaveFocus();
      expect(previousMonth).toHaveAttribute('tabindex', '0');
      expect(previousYear).toHaveAttribute('tabindex', '-1');
    });

    it('moves focus to the previous paddle when ArrowLeft is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousMonth = getByRole('button', { name: 'Previous month' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        previousMonth.focus();
      });
      fireEvent.keyDown(previousMonth, { key: KEYS.LEFT });

      expect(previousYear).toHaveFocus();
    });

    it('wraps focus from the last paddle to the first when ArrowRight is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextYear = getByRole('button', { name: 'Next year' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        nextYear.focus();
      });
      fireEvent.keyDown(nextYear, { key: KEYS.RIGHT });

      expect(previousYear).toHaveFocus();
    });

    it('wraps focus from the first paddle to the last when ArrowLeft is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousYear = getByRole('button', { name: 'Previous year' });
      const nextYear = getByRole('button', { name: 'Next year' });

      act(() => {
        previousYear.focus();
      });
      fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

      expect(nextYear).toHaveFocus();
    });

    it('moves focus to the first paddle when Home is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextMonth = getByRole('button', { name: 'Next month' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        nextMonth.focus();
      });
      fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

      expect(previousYear).toHaveFocus();
    });

    it('moves focus to the last paddle when End is pressed', () => {
      const { getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousMonth = getByRole('button', { name: 'Previous month' });
      const nextYear = getByRole('button', { name: 'Next year' });

      act(() => {
        previousMonth.focus();
      });
      fireEvent.keyDown(previousMonth, { key: KEYS.END });

      expect(nextYear).toHaveFocus();
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when previous-year is clicked', () => {
      const { getByRole, getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getByRole('button', { name: 'Previous year' });

      act(() => {
        previousButton.focus();
      });
      fireEvent.click(previousButton);

      expect(previousButton).toHaveFocus();

      const wrappers = getAllByTestId('calendar-wrapper');
      const allDays = wrappers.flatMap(wrapper =>
        within(wrapper)
          .getAllByRole('button')
          .filter(button => button.getAttribute('data-test-id') === 'day')
      );
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when next-year is clicked', () => {
      const { getByRole, getAllByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextButton = getByRole('button', { name: 'Next year' });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(nextButton).toHaveFocus();

      const wrappers = getAllByTestId('calendar-wrapper');
      const allDays = wrappers.flatMap(wrapper =>
        within(wrapper)
          .getAllByRole('button')
          .filter(button => button.getAttribute('data-test-id') === 'day')
      );
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
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

    it('advances from start to end again after clearing both fields via ClearableInput', async () => {
      const ControlledExample = ({
        startValue: initialStartValue,
        endValue: initialEndValue,
        ...props
      }: IDatePickerRangeProps) => {
        const [startValue, setStartValue] = useState(initialStartValue);
        const [endValue, setEndValue] = useState(initialEndValue);

        return (
          <DatePickerRange
            {...props}
            startValue={startValue}
            endValue={endValue}
            onChange={value => {
              setStartValue(value.startValue);
              setEndValue(value.endValue);
            }}
            onValueSettled={result => {
              if (result.valid) {
                if (result.field === 'start') {
                  setStartValue(result.date);
                } else {
                  setEndValue(result.date);
                }
              }
            }}
          >
            <DatePickerRange.Start>
              <ClearableInput data-test-id="start" />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <ClearableInput data-test-id="end" />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
        );
      };

      const { getAllByTestId, getByTestId, getAllByRole } = render(
        <ControlledExample startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const clearButtons = getAllByRole('button', { name: 'Clear' });

      await user.click(clearButtons[1]);
      await user.click(clearButtons[0]);

      await user.click(globalGetAllByTestId(calendarWrappers[0], 'day')[6]);
      await user.click(globalGetAllByTestId(calendarWrappers[1], 'day')[6]);

      expect(getByTestId('start')).toHaveValue('February 2, 2019');
      expect(getByTestId('end')).toHaveValue('March 2, 2019');
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

    it('does not select a disabled date via keyboard, but keeps it focusable', async () => {
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
      const firstMonthDays = globalGetAllByTestId(calendarWrappers[0], 'day').filter(
        day => day.tagName === 'BUTTON'
      );
      const disabledDay = firstMonthDays[0];

      expect(disabledDay).toHaveAttribute('data-test-disabled', 'true');
      expect(disabledDay).toHaveAttribute('aria-disabled', 'true');
      expect(disabledDay).not.toHaveAttribute('disabled');

      disabledDay.focus();

      expect(disabledDay).toHaveFocus();

      await user.keyboard('{Enter}');

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

      act(() => {
        nextButton.focus();
      });
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

      act(() => {
        previousButton.focus();
      });
      fireEvent.click(previousButton);

      expect(previousButton).toHaveFocus();

      const wrappers = getAllByTestId('calendar-wrapper');
      const allDays = [...getDayButtons(wrappers[0]), ...getDayButtons(wrappers[1])];
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
    });

    it('highlights the candidate range as focus moves via keyboard, matching mouse hover', () => {
      const { getAllByTestId } = render(<Example startValue={DEFAULT_START_VALUE} />);

      const calendarWrappers = getAllByTestId('calendar-wrapper');
      const firstMonthDays = getDayButtons(calendarWrappers[0]);

      fireEvent.keyDown(firstMonthDays[4], { key: KEYS.PAGE_DOWN });

      const firstMonthCells = globalGetAllByTestId(calendarWrappers[0], 'day-cell');
      const secondMonthCells = globalGetAllByTestId(calendarWrappers[1], 'day-cell');

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
      }
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
