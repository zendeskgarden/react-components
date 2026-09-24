/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, fireEvent } from 'garden-test-utils';
import mockDate from 'mockdate';
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

describe('Calendar', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Month navigation buttons', () => {
    it('changes month on Enter and Space, matching click behavior', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByTestId('next-month');

      act(() => {
        nextButton.focus();
      });
      await user.keyboard('{Enter}');

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');

      const previousButton = getByTestId('previous-month');

      act(() => {
        previousButton.focus();
      });
      await user.keyboard(' ');

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('leaves focus on the paddle and marks the corresponding day in the new month as tabbable', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByTestId('next-month');

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
      const { getByTestId, getAllByTestId } = render(
        <Example value={new Date(2019, 0, 31)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByTestId('next-month');

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
    it('changes year on Enter and Space, matching click behavior', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByTestId('next-year');

      act(() => {
        nextButton.focus();
      });
      await user.keyboard('{Enter}');

      expect(getByTestId('month-display')).toHaveTextContent('February 2020');

      const previousButton = getByTestId('previous-year');

      act(() => {
        previousButton.focus();
      });
      await user.keyboard(' ');

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('leaves focus on the paddle and marks the corresponding day next year as tabbable, matching Shift+PageDown', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const nextButton = getByTestId('next-year');

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
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      const previousButton = getByTestId('previous-year');

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

      const { getByTestId, getAllByTestId } = render(
        <Example value={new Date(2020, 1, 29)} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('calendar-button'));

      fireEvent.click(getByTestId('next-year'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2021');

      const focusedDay = getAllByTestId('day').find(day => day.getAttribute('tabindex') === '0')!;

      expect(focusedDay).toHaveTextContent('28');

      mockDate.set(DEFAULT_DATE);
    });
  });
});
