/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, fireEvent, within } from 'garden-test-utils';
import { addMonths } from 'date-fns/addMonths';
import { subMonths } from 'date-fns/subMonths';
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
    <DatePickerRange.Calendar />
  </DatePickerRange>
);

describe('Calendar', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockDate.set(DEFAULT_START_VALUE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Calendar display', () => {
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
          .getAllByRole('gridcell')
          .filter(cell => cell.getAttribute('data-test-id') === 'day')
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
          .getAllByRole('gridcell')
          .filter(cell => cell.getAttribute('data-test-id') === 'day')
      );
      const focusedDays = allDays.filter(day => day.getAttribute('tabindex') === '0');

      expect(focusedDays).toHaveLength(1);
    });
  });

  describe('Keyboard navigation', () => {
    const getDayButtons = (wrapper: HTMLElement) =>
      within(wrapper)
        .getAllByRole('gridcell')
        .filter(cell => cell.getAttribute('data-test-id') === 'day');

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
  });
});
