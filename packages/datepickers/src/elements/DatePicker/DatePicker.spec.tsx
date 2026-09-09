/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, renderRtl, fireEvent, within } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { ClearableInput, Input } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { DatePicker } from './DatePicker';
import { IDatePickerProps } from '../../types';

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

const ClearableExample = (props: Omit<IDatePickerProps, 'children'>) => (
  <>
    <DatePicker {...props}>
      <ClearableInput data-test-id="input" />
    </DatePicker>
    <button data-test-id="outside" type="button">
      Outside
    </button>
  </>
);

jest.useFakeTimers();

describe('DatePicker', () => {
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

  describe('Month navigation buttons', () => {
    it('renders as buttons with accessible names', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('button', { name: 'Previous month' })).toBeInTheDocument();
      expect(getByRole('button', { name: 'Next month' })).toBeInTheDocument();
    });

    it('changes month on Enter and Space, matching click behavior', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByRole('button', { name: 'Next month' });

      act(() => {
        nextButton.focus();
      });
      await user.keyboard('{Enter}');

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');

      const previousButton = getByRole('button', { name: 'Previous month' });

      act(() => {
        previousButton.focus();
      });
      await user.keyboard(' ');

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('sets lang="en" on the default labels', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('button', { name: 'Previous month' })).toHaveAttribute('lang', 'en');
      expect(getByRole('button', { name: 'Next month' })).toHaveAttribute('lang', 'en');
    });

    it('reflects consumer-provided labels without setting lang', async () => {
      const { getByTestId, getByRole } = render(
        <Example
          value={DEFAULT_DATE}
          previousMonthLabel="Mois précédent"
          nextMonthLabel="Mois suivant"
        />
      );

      await user.click(getByTestId('calendar-button'));

      const previousButton = getByRole('button', { name: 'Mois précédent' });
      const nextButton = getByRole('button', { name: 'Mois suivant' });

      expect(previousButton).not.toHaveAttribute('lang');
      expect(nextButton).not.toHaveAttribute('lang');
    });

    it('leaves focus on the paddle and marks the corresponding day in the new month as tabbable', async () => {
      const { getByTestId, getAllByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByRole('button', { name: 'Next month' });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');
      expect(nextButton).toHaveFocus();

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('5');
      expect(focusedDay).not.toHaveFocus();
    });

    it('clamps to the last day of the month when paddle navigation lands on a day that does not exist', async () => {
      const { getByTestId, getAllByTestId, getByRole } = render(
        <Example value={new Date(2019, 0, 31)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByRole('button', { name: 'Next month' });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
      expect(nextButton).toHaveFocus();

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('28');
    });
  });

  describe('Year navigation buttons', () => {
    it('renders as buttons with accessible names', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('button', { name: 'Previous year' })).toBeInTheDocument();
      expect(getByRole('button', { name: 'Next year' })).toBeInTheDocument();
    });

    it('changes year on Enter and Space, matching click behavior', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByRole('button', { name: 'Next year' });

      act(() => {
        nextButton.focus();
      });
      await user.keyboard('{Enter}');

      expect(getByTestId('month-display')).toHaveTextContent('February 2020');

      const previousButton = getByRole('button', { name: 'Previous year' });

      act(() => {
        previousButton.focus();
      });
      await user.keyboard(' ');

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('sets lang="en" on the default labels', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('button', { name: 'Previous year' })).toHaveAttribute('lang', 'en');
      expect(getByRole('button', { name: 'Next year' })).toHaveAttribute('lang', 'en');
    });

    it('reflects consumer-provided labels without setting lang', async () => {
      const { getByTestId, getByRole } = render(
        <Example
          value={DEFAULT_DATE}
          previousYearLabel="Année précédente"
          nextYearLabel="Année suivante"
        />
      );

      await user.click(getByTestId('calendar-button'));

      const previousButton = getByRole('button', { name: 'Année précédente' });
      const nextButton = getByRole('button', { name: 'Année suivante' });

      expect(previousButton).not.toHaveAttribute('lang');
      expect(nextButton).not.toHaveAttribute('lang');
    });

    it('leaves focus on the paddle and marks the corresponding day next year as tabbable, matching Shift+PageDown', async () => {
      const { getByTestId, getAllByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByRole('button', { name: 'Next year' });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(getByTestId('month-display')).toHaveTextContent('February 2020');
      expect(nextButton).toHaveFocus();

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('5');
      expect(focusedDay).not.toHaveFocus();
    });

    it('leaves focus on the paddle and marks the corresponding day previous year as tabbable, matching Shift+PageUp', async () => {
      const { getByTestId, getAllByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const previousButton = getByRole('button', { name: 'Previous year' });

      act(() => {
        previousButton.focus();
      });
      fireEvent.click(previousButton);

      expect(getByTestId('month-display')).toHaveTextContent('February 2018');
      expect(previousButton).toHaveFocus();

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('5');
    });

    it('clamps February 29 to February 28 when navigating into a non-leap year', async () => {
      mockDate.set(new Date(2020, 1, 29));

      const { getByTestId, getAllByTestId, getByRole } = render(
        <Example value={new Date(2020, 1, 29)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      fireEvent.click(getByRole('button', { name: 'Next year' }));

      expect(getByTestId('month-display')).toHaveTextContent('February 2021');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('28');

      mockDate.set(DEFAULT_DATE);
    });
  });

  describe('Header toolbar', () => {
    it('gives the header a toolbar role and an accessible name', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('toolbar')).toHaveAccessibleName('Calendar view');
    });

    it('isolates the toolbar into its own stacking context, so it paints above the overlapping month box', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('toolbar')).toHaveStyleRule('isolation', 'isolate');
    });

    it('sets lang="en" on the default toolbar label', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('toolbar')).toHaveAttribute('lang', 'en');
    });

    it('reflects a consumer-provided toolbar label without setting lang', async () => {
      const { getByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} toolbarLabel="Navigation du calendrier" />
      );

      await user.click(getByTestId('calendar-button'));

      const toolbar = getByRole('toolbar');

      expect(toolbar).toHaveAccessibleName('Navigation du calendrier');
      expect(toolbar).not.toHaveAttribute('lang');
    });

    it('gives exactly one paddle tabindex="0" initially, matching the first control', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const previousYear = getByRole('button', { name: 'Previous year' });
      const previousMonth = getByRole('button', { name: 'Previous month' });
      const nextMonth = getByRole('button', { name: 'Next month' });
      const nextYear = getByRole('button', { name: 'Next year' });

      expect(previousYear).toHaveAttribute('tabindex', '0');
      [previousMonth, nextMonth, nextYear].forEach(button => {
        expect(button).toHaveAttribute('tabindex', '-1');
      });
    });

    it('moves focus to the next paddle when ArrowRight is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

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

    it('moves focus to the previous paddle when ArrowLeft is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const previousMonth = getByRole('button', { name: 'Previous month' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        previousMonth.focus();
      });
      fireEvent.keyDown(previousMonth, { key: KEYS.LEFT });

      expect(previousYear).toHaveFocus();
    });

    it('wraps focus from the last paddle to the first when ArrowRight is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextYear = getByRole('button', { name: 'Next year' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        nextYear.focus();
      });
      fireEvent.keyDown(nextYear, { key: KEYS.RIGHT });

      expect(previousYear).toHaveFocus();
    });

    it('wraps focus from the first paddle to the last when ArrowLeft is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const previousYear = getByRole('button', { name: 'Previous year' });
      const nextYear = getByRole('button', { name: 'Next year' });

      act(() => {
        previousYear.focus();
      });
      fireEvent.keyDown(previousYear, { key: KEYS.LEFT });

      expect(nextYear).toHaveFocus();
    });

    it('moves focus to the first paddle when Home is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextMonth = getByRole('button', { name: 'Next month' });
      const previousYear = getByRole('button', { name: 'Previous year' });

      act(() => {
        nextMonth.focus();
      });
      fireEvent.keyDown(nextMonth, { key: KEYS.HOME });

      expect(previousYear).toHaveFocus();
    });

    it('moves focus to the last paddle when End is pressed', async () => {
      const { getByTestId, getByRole } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const previousMonth = getByRole('button', { name: 'Previous month' });
      const nextYear = getByRole('button', { name: 'Next year' });

      act(() => {
        previousMonth.focus();
      });
      fireEvent.keyDown(previousMonth, { key: KEYS.END });

      expect(nextYear).toHaveFocus();
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

    it('updates input value when controlled value is updated', () => {
      const { getByTestId, rerender } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      expect(input).toHaveValue('February 5, 2019');

      rerender(<Example value={addDays(DEFAULT_DATE, 1)} onChange={onChangeSpy} />);

      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(input).toHaveValue('February 6, 2019');
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

    it('does not warn about updating a component while rendering another when controlled', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());

      const Controlled = () => {
        const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

        return (
          <DatePicker value={value} onChange={setValue}>
            <input data-test-id="input" />
          </DatePicker>
        );
      };

      const { getByTestId, getAllByTestId } = render(<Controlled />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      const hasRenderPhaseUpdateWarning = consoleErrorSpy.mock.calls.some(
        args => typeof args[0] === 'string' && args[0].includes('Cannot update a component')
      );

      expect(hasRenderPhaseUpdateWarning).toBe(false);

      consoleErrorSpy.mockRestore();
    });

    it('does not call onChange when a typed date falls outside minValue/maxValue', async () => {
      const { getByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Input', () => {
    it('displays provided value', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('February 5, 2019');
    });

    it('displays empty string if no value provided', () => {
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('');
    });

    it('opens the calendar when the input is clicked, without moving focus into the grid', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(input).toHaveFocus();
    });

    it('does not open the calendar when the input receives keyboard focus', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.tab();

      expect(getByTestId('input')).toHaveFocus();
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('does not open the datepicker on Up Arrow', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.UP });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('typing into the input does not open the calendar if it is not already open', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      input.focus();
      fireEvent.change(input, { target: { value: '1/4/2019' } });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('does not revert in-progress typed text on Enter/Escape while the calendar is closed', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'Jan' } });
      fireEvent.keyDown(input, { key: KEYS.ENTER });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
      expect(input).toHaveValue('Jan');

      fireEvent.change(input, { target: { value: 'Jan 4' } });
      fireEvent.keyDown(input, { key: KEYS.ESCAPE });

      expect(input).toHaveValue('Jan 4');
    });

    it('opens the calendar when the associated label is clicked, without moving focus into the grid', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      await user.click(getByTestId('label'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getByTestId('input')).toHaveFocus();
    });

    it('leaves datepicker open if calendar is moused down', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getByTestId('calendar-wrapper'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('calls onChange with provided date if manually added in short format', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('calls onChange with provided date if manually added in medium format', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'Jan 4, 2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('calls onChange with provided date if manually added in long format', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'January 4th, 2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('does not call onChange with provided date if invalid', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('updates input value when controlled value is changed', () => {
      const { getByTestId, rerender } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      expect(getByTestId('input')).toHaveValue('February 5, 2019');

      rerender(<Example value={addDays(DEFAULT_DATE, 1)} onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('February 6, 2019');
    });

    it('preserves the typed format after the controlled value round-trips through onChange', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

        return <Example value={value} onChange={setValue} />;
      };
      const { getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(input).toHaveValue('1/4/2019');
    });

    it('reformats to the canonical format if the controlled value changes to a different date', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

        return (
          <>
            <Example value={value} onChange={setValue} />
            <button
              type="button"
              data-test-id="set-externally"
              onClick={() => setValue(addDays(DEFAULT_DATE, 1))}
            >
              Fill date
            </button>
          </>
        );
      };
      const { getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('set-externally'));

      expect(input).toHaveValue('February 6, 2019');
    });

    it('preserves the typed format after closing the calendar without selecting a different day', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

        return <Example value={value} onChange={setValue} />;
      };
      const { getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('calendar-button'));
      fireEvent.keyDown(input, { key: KEYS.ESCAPE });

      expect(input).toHaveValue('1/4/2019');
    });

    it('preserves the typed format after closing the calendar by clicking outside', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

        return <Example value={value} onChange={setValue} />;
      };
      const { getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('calendar-button'));

      await user.click(getByTestId('outside'));

      expect(input).toHaveValue('1/4/2019');
    });

    it('does not discard unparseable typed text when closing the calendar by clicking outside', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.click(getByTestId('calendar-button'));

      await user.click(getByTestId('outside'));

      expect(input).toHaveValue('invalid date');
    });
  });

  describe('Combobox input attributes', () => {
    it('exposes the input as a combobox with haspopup, autocomplete, and controls attributes', () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByRole('combobox', { expanded: false });
      const menu = getByTestId('datepicker-menu');

      expect(input).toHaveAttribute('aria-haspopup', 'dialog');
      expect(input).toHaveAttribute('aria-autocomplete', 'none');
      expect(input).toHaveAttribute('aria-controls', menu.id);
    });

    it('sets aria-expanded to true when the calendar opens', async () => {
      const { getByRole, getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      expect(getByRole('combobox', { expanded: true })).toBeInTheDocument();
    });
  });

  describe('Opening the calendar from the input', () => {
    it('opens on Down Arrow and moves focus onto the selected day', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it('opens on Alt+Down Arrow and moves focus onto the selected day', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN, altKey: true });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it("moves focus onto today's date on Down Arrow when no value is selected", () => {
      const { getByTestId, getAllByTestId } = render(<Example onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });

      const days = getAllByTestId('day');
      const today = days.find(day => day.getAttribute('data-test-today') === 'true');

      expect(today).toHaveFocus();
    });

    it('does not close or error on Down Arrow while already open', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.DOWN });
      fireEvent.keyDown(input, { key: KEYS.DOWN });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });
  });

  describe('onValueSettled', () => {
    let onValueSettledSpy: (result: { date?: Date; inputValue: string; valid: boolean }) => void;

    beforeEach(() => {
      onValueSettledSpy = jest.fn();
    });

    it('reports a valid date when blurring after typing a parseable date', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('reports invalid when blurring after typing unparseable text', () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    it('reports valid when blurring an empty, non-required field', () => {
      const { getByTestId } = render(
        <Example onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('reports invalid when blurring an empty, required field', () => {
      const RequiredExample = (props: Omit<IDatePickerProps, 'children'>) => (
        <DatePicker {...props}>
          <input data-test-id="input" required />
        </DatePicker>
      );
      const { getByTestId } = render(
        <RequiredExample onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: false,
        reason: 'required'
      });
    });

    it('reports a valid date when a day is selected from the calendar', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 28),
        inputValue: 'January 28, 2019',
        valid: true
      });
    });

    it('does not report a stale value when a day is selected from the calendar', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      await user.click(getByTestId('calendar-button'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(onValueSettledSpy).toHaveBeenCalledTimes(1);
    });

    it('reports invalid when blurring after typing a date outside minValue/maxValue', () => {
      const { getByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: '1/4/2019' } });
      fireEvent.blur(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '1/4/2019',
        valid: false,
        reason: 'out-of-range'
      });
    });

    it('reports invalid when closing the calendar by clicking outside after typing unparseable text', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.click(getByTestId('calendar-button'));

      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    it('reports a valid date when closing the calendar by clicking outside after typing a parseable date', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('calendar-button'));

      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('does not affect the existing onChange behavior', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('settles immediately when the input is manually cleared, without waiting for blur', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('settles immediately when a ClearableInput clear button is clicked, without waiting for blur', async () => {
      const { getByRole } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );

      await user.click(getByRole('button', { name: 'Clear' }));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('does not settle when focus moves to another focusable element inside the input group, like a ClearableInput clear button', async () => {
      const { getByTestId } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.tab();

      expect(onValueSettledSpy).not.toHaveBeenCalled();
    });

    it('settles once focus actually leaves the input group, after passing through a clear button', async () => {
      const { getByTestId } = render(
        <ClearableExample
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');
      await user.tab();
      await user.click(getByTestId('outside'));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });
  });

  describe('validation', () => {
    const errorColor = getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' });

    it("reflects a ClearableInput child's validation on the outer widget group", () => {
      const { container } = render(
        <DatePicker value={DEFAULT_DATE}>
          <ClearableInput data-test-id="input" validation="error" />
        </DatePicker>
      );

      const outerGroup = container.querySelector("[data-garden-id='forms.input_group']");

      expect(outerGroup).toHaveStyleRule('border-color', errorColor);
    });

    it("reflects a plain Input child's validation on the outer widget group", () => {
      const { container } = render(
        <DatePicker value={DEFAULT_DATE}>
          <Input data-test-id="input" validation="error" />
        </DatePicker>
      );

      const outerGroup = container.querySelector("[data-garden-id='forms.input_group']");

      expect(outerGroup).toHaveStyleRule('border-color', errorColor);
    });

    it('does not warn about multiple validation-bearing Inputs for a plain Input child', () => {
      const environment = process.env.NODE_ENV;
      const consoleWarning = console.warn;

      process.env.NODE_ENV = 'development';
      console.warn = jest.fn();

      render(
        <DatePicker value={DEFAULT_DATE}>
          <Input data-test-id="input" validation="error" />
        </DatePicker>
      );

      expect(console.warn).not.toHaveBeenCalledWith(expect.stringContaining('<InputGroup>'));

      process.env.NODE_ENV = environment;
      console.warn = consoleWarning;
    });
  });

  describe('Calendar trigger button', () => {
    it('has an accessible name, aria-haspopup, aria-expanded, and aria-controls', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');
      const menu = getByTestId('datepicker-menu');

      expect(button).toHaveAttribute('aria-haspopup', 'dialog');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('aria-controls', menu.id);
      expect(button).toHaveAccessibleName('Choose date');
    });

    it('is excluded from the Tab sequence, but can still receive programmatic focus', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');

      expect(button).toHaveAttribute('tabindex', '-1');

      button.focus();

      expect(button).toHaveFocus();
    });

    it('opens the calendar and moves focus onto the selected day when clicked', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const button = getByTestId('calendar-button');

      await user.click(button);

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it('opens the calendar when activated with the keyboard', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const button = getByTestId('calendar-button');

      button.focus();
      await user.keyboard('{Enter}');

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      expect(getAllByTestId('day')[9]).toHaveFocus();
    });

    it('moves focus onto todays date when no value is selected', async () => {
      const { getByTestId, getAllByTestId } = render(<Example onChange={onChangeSpy} />);

      await user.click(getByTestId('calendar-button'));

      const days = getAllByTestId('day');
      const today = days.find(day => day.getAttribute('data-test-today') === 'true');

      expect(today).toHaveFocus();
    });

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

    it('closes the calendar and returns focus to the input on Escape, without selecting a date', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getAllByTestId('day')[9]).toHaveFocus();

      fireEvent.keyDown(getAllByTestId('day')[9], { key: KEYS.ESCAPE });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
      expect(getByTestId('input')).toHaveFocus();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('closes the calendar when clicking outside of the widget', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('outside'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes the calendar when clicking a non-interactive element outside the widget', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('outside-background'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes the calendar when the input receives focus', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

      await user.click(getByTestId('input'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('opens on a typed, valid date and focuses/selects it', async () => {
      const ControlledExample = () => {
        const [value, setValue] = React.useState<Date | undefined>(DEFAULT_DATE);

        return <Example value={value} onChange={setValue} />;
      };
      const { getByTestId, getAllByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');
      await user.click(getByTestId('calendar-button'));

      const selectedDay = getAllByTestId('day').find(
        day => day.getAttribute('data-test-selected') === 'true'
      );

      expect(selectedDay).toHaveTextContent('4');
      expect(selectedDay).toHaveFocus();
    });
  });

  describe('Calendar dialog', () => {
    it('has dialog role, aria-modal="false", and an accessible name matching the calendar button', async () => {
      const { getByTestId, getByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const dialog = getByRole('dialog', { name: 'Choose date' });

      expect(dialog).toHaveAttribute('aria-modal', 'false');
    });
  });

  describe('customParseDate()', () => {
    it('uses customParseDate to determine date validitiy if provided', async () => {
      const MOCK_DATE = new Date(2019, 0, 1);
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(MOCK_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith(MOCK_DATE);
    });

    it('does not call onChange if parsed date is the current value', async () => {
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(DEFAULT_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, 'invalid date');

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('formatDate()', () => {
    it('uses custom formatDate method if provided', () => {
      const FORMATTED_DATE = 'test';
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} formatDate={() => FORMATTED_DATE} />
      );
      const input = getByTestId('input');

      expect(input).toHaveValue(FORMATTED_DATE);
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

    it('labels day-label cells as columnheaders with the full weekday name', async () => {
      const { getByTestId, getAllByRole } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const columnHeaders = getAllByRole('columnheader');

      expect(columnHeaders[0]).toHaveAttribute('abbr', 'Sunday');
      expect(columnHeaders[0]).toHaveTextContent('Sun');
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

  describe('Calendar', () => {
    it('applies LTR classes by default', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', async () => {
      const { getByTestId } = renderRtl(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'true');
    });

    it('portals as expected', () => {
      const { container, rerender } = render(<Example />);
      const selector = '[data-test-id="datepicker-menu"]';

      expect(container.querySelector(selector)).not.toBeNull();

      const node = document.createElement('DIV');

      document.body.appendChild(node);

      rerender(<Example appendToNode={node} />);

      expect(container.querySelector(selector)).toBeNull();
      expect(node.querySelector(selector)).not.toBeNull();
    });
  });
});
