/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, fireEvent } from 'garden-test-utils';
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
      const { getAllByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('displays previous month if previous paddle is clicked', async () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: /^Previous month/u }));

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('January 2019');
      expect(monthDisplays[1]).toHaveTextContent('February 2019');
    });

    it('displays next month if next paddle is clicked', async () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: /^Next month/u }));

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('displays current month if no value is provided', () => {
      const { getAllByRole } = render(<Example />);

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('does not render the hidden inner paddle between the two months at all', () => {
      const { getAllByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getAllByRole('button', { name: /^Previous month/u })).toHaveLength(1);
      expect(getAllByRole('button', { name: /^Next month/u })).toHaveLength(1);
    });

    it('resets preview date if start value is updated while outside of visible range', async () => {
      const { getAllByRole, getByRole, rerender } = render(
        <Example startValue={DEFAULT_START_VALUE} />
      );

      const previousPaddle = getByRole('button', { name: /^Previous month/u });

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      rerender(<Example startValue={addMonths(DEFAULT_START_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('resets preview date if end value is updated while outside of visible range', async () => {
      const { getAllByRole, getByRole, rerender } = render(
        <Example endValue={DEFAULT_END_VALUE} />
      );

      const nextPaddle = getByRole('button', { name: /^Next month/u });

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      rerender(<Example endValue={subMonths(DEFAULT_END_VALUE, 1)} />);

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if start input is focused while outside of visible range', async () => {
      const { getAllByRole, getByRole, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousPaddle = getByRole('button', { name: /^Previous month/u });

      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);
      await user.click(previousPaddle);

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('October 2018');
      expect(monthDisplays[1]).toHaveTextContent('November 2018');

      await user.click(getByTestId('start'));

      expect(monthDisplays[0]).toHaveTextContent('February 2019');
      expect(monthDisplays[1]).toHaveTextContent('March 2019');
    });

    it('resets preview date if end input is focused while outside of visible range', async () => {
      const { getAllByRole, getByRole, getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextPaddle = getByRole('button', { name: /^Next month/u });

      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);
      await user.click(nextPaddle);

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('June 2019');
      expect(monthDisplays[1]).toHaveTextContent('July 2019');

      await user.click(getByTestId('end'));

      expect(monthDisplays[0]).toHaveTextContent('March 2019');
      expect(monthDisplays[1]).toHaveTextContent('April 2019');
    });

    it('renders compact styling correctly', () => {
      const { getByRole, rerender } = render(<Example isCompact />);

      expect(getByRole('toolbar').parentElement).toHaveStyleRule(
        'grid-template-columns',
        'repeat(7, 32px) 16px repeat(7, 32px)'
      );
      rerender(<Example />);
      expect(getByRole('toolbar').parentElement).toHaveStyleRule(
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

      expect(getAllByRole('button', { name: /^Previous year/u })).toHaveLength(1);
      expect(getAllByRole('button', { name: /^Next year/u })).toHaveLength(1);
    });

    it('displays the same months one year earlier if the previous year paddle is clicked', async () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: /^Previous year/u }));

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('February 2018');
      expect(monthDisplays[1]).toHaveTextContent('March 2018');
    });

    it('displays the same months one year later if the next year paddle is clicked', async () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      await user.click(getByRole('button', { name: /^Next year/u }));

      const monthDisplays = getAllByRole('heading');

      expect(monthDisplays[0]).toHaveTextContent('February 2020');
      expect(monthDisplays[1]).toHaveTextContent('March 2020');
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when previous-year is clicked', () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getByRole('button', { name: /^Previous year/u });

      act(() => {
        previousButton.focus();
      });
      fireEvent.click(previousButton);

      expect(previousButton).toHaveFocus();

      const focusedDays = getAllByRole('gridcell').filter(
        day => day.getAttribute('tabindex') === '0'
      );

      expect(focusedDays).toHaveLength(1);
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when next-year is clicked', () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextButton = getByRole('button', { name: /^Next year/u });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(nextButton).toHaveFocus();

      const focusedDays = getAllByRole('gridcell').filter(
        day => day.getAttribute('tabindex') === '0'
      );

      expect(focusedDays).toHaveLength(1);
    });
  });

  describe('Keyboard navigation', () => {
    it('keeps exactly one day tabbable, without moving focus off the paddle, when next-month is clicked', () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const nextButton = getByRole('button', { name: /^Next month/u });

      act(() => {
        nextButton.focus();
      });
      fireEvent.click(nextButton);

      expect(nextButton).toHaveFocus();

      const focusedDays = getAllByRole('gridcell').filter(
        day => day.getAttribute('tabindex') === '0'
      );

      expect(focusedDays).toHaveLength(1);
      expect(focusedDays[0]).not.toHaveFocus();
    });

    it('keeps exactly one day tabbable, without moving focus off the paddle, when previous-month is clicked', () => {
      const { getAllByRole, getByRole } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      const previousButton = getByRole('button', { name: /^Previous month/u });

      act(() => {
        previousButton.focus();
      });
      fireEvent.click(previousButton);

      expect(previousButton).toHaveFocus();

      const focusedDays = getAllByRole('gridcell').filter(
        day => day.getAttribute('tabindex') === '0'
      );

      expect(focusedDays).toHaveLength(1);
    });
  });
});
