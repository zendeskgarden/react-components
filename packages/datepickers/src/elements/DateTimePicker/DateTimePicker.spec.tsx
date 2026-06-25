/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent, act } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
import { DateTimePicker } from './DateTimePicker';
import { IDateTimePickerProps } from '../../types';

const DEFAULT_DATE = new Date(2019, 1, 5, 14, 30);

const Example = (props: Omit<IDateTimePickerProps, 'children'>) => (
  <>
    <label data-test-id="label" htmlFor="input">
      Label
    </label>
    <DateTimePicker {...props}>
      <input data-test-id="input" id="input" />
    </DateTimePicker>
  </>
);

jest.useFakeTimers();

describe('DateTimePicker', () => {
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

      expect(queryByTestId('datetimepicker-menu')).toBeEmptyDOMElement();
    });

    it('displays dates with correct previous styling', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));
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

      await user.click(getByTestId('input'));
      const days = getAllByTestId('day');

      expect(days[9]).toHaveAttribute('data-test-selected', 'true');
      expect(days[9]).toHaveAttribute('data-test-today', 'true');
    });

    it('displays "Sun" as default first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Sun');
    });

    it('displays locale based first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} locale="en-GB" />
      );

      await user.click(getByTestId('input'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Mon');
    });

    it('displays disabled styling for minimum and maximum values', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      await user.click(getByTestId('input'));
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

      await user.click(getByTestId('input'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('displays previous month if previous paddle is clicked', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));
      fireEvent.click(getByTestId('previous-month'));

      expect(getByTestId('month-display')).toHaveTextContent('January 2019');
    });

    it('displays next month if next paddle is clicked', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));
      fireEvent.click(getByTestId('next-month'));

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');
    });

    it('displays current month if no value is provided', async () => {
      const { getByTestId } = render(<Example />);

      await user.click(getByTestId('input'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });
  });

  describe('Calendar selection', () => {
    it('calls onChange when date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28, 14, 30, 0, 0));
    });

    it('does not close popup on date selection', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(getByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
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

      await user.click(getByTestId('input'));
      const days = getAllByTestId('day');

      fireEvent.click(days[0]);
      fireEvent.click(days[days.length - 1]);

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  describe('Time panel', () => {
    it('renders time panel when open', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));

      expect(getByTestId('time-panel')).toBeInTheDocument();
    });

    it('renders hour and minute columns', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');

      expect(columns).toHaveLength(2);
    });

    it('renders AM/PM column when isAmPm is true', async () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} isAmPm />);

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');

      expect(columns).toHaveLength(3);
    });

    it('calls onChange when hour is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const options = getAllByTestId('time-option');
      const hour10Option = options.find(el => el.textContent === '10');

      fireEvent.click(hour10Option!);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 1, 5, 10, 30, 0, 0));
    });

    it('calls onChange when minute is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');
      const minuteColumn = columns[1];
      const minuteOptions = minuteColumn.querySelectorAll('[data-test-id="time-option"]');
      const minute15Option = Array.from(minuteOptions).find(el => el.textContent === '15');

      fireEvent.click(minute15Option!);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 1, 5, 14, 15, 0, 0));
    });

    it('calls onChange when AM/PM is toggled', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} isAmPm />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');
      const periodColumn = columns[2];
      const periodOptions = periodColumn.querySelectorAll('[data-test-id="time-option"]');
      const amOption = Array.from(periodOptions).find(el => el.textContent === 'AM');

      fireEvent.click(amOption!);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 1, 5, 2, 30, 0, 0));
    });

    it('respects timeStep for minute intervals', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} timeStep={15} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');
      const minuteColumn = columns[1];
      const minuteOptions = minuteColumn.querySelectorAll('[data-test-id="time-option"]');

      expect(minuteOptions).toHaveLength(4);
      expect(minuteOptions[0]).toHaveTextContent('00');
      expect(minuteOptions[1]).toHaveTextContent('15');
      expect(minuteOptions[2]).toHaveTextContent('30');
      expect(minuteOptions[3]).toHaveTextContent('45');
    });

    it('shows selected hour highlighted', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');
      const hourColumn = columns[0];
      const selected = hourColumn.querySelector('[data-test-selected="true"]');

      expect(selected).toHaveTextContent('14');
    });

    it('shows selected minute highlighted', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} isAmPm={false} />
      );

      await user.click(getByTestId('input'));
      const columns = getAllByTestId('time-column');
      const minuteColumn = columns[1];
      const selected = minuteColumn.querySelector('[data-test-selected="true"]');

      expect(selected).toHaveTextContent('30');
    });
  });

  describe('Input', () => {
    it('displays provided value with time', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('February 5, 2019 at 2:30 PM');
    });

    it('displays empty string if no value provided', () => {
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('');
    });

    it('opens datetimepicker on focus', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('leaves datetimepicker closed on label click', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      act(() => {
        fireEvent.mouseUp(getByTestId('input'));
        jest.runOnlyPendingTimers();
        fireEvent.click(getByTestId('input'));
      });

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes datetimepicker on blur', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.tab();

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes datetimepicker when not animated', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example isAnimated={false} value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.tab();

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('opens datetimepicker when correct keys are used', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.UP });
      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();

      fireEvent.keyDown(input, { key: KEYS.DOWN });
      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();

      await user.type(input, ' ');
      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();
    });

    it('closes datetimepicker when correct keys are used', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      fireEvent.keyDown(input, { key: KEYS.ESCAPE });

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'false');

      await user.click(input);
      fireEvent.keyDown(input, { key: KEYS.ENTER });

      expect(queryByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('leaves datetimepicker open if calendar is moused down', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);
      fireEvent.click(getByTestId('calendar-wrapper'));

      expect(getByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('leaves datetimepicker open if time panel is moused down', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);
      fireEvent.click(getByTestId('time-panel'));

      expect(getByTestId('datetimepicker-menu')).toHaveAttribute('data-test-open', 'true');
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

      expect(getByTestId('input')).toHaveValue('February 5, 2019 at 2:30 PM');

      rerender(<Example value={addDays(DEFAULT_DATE, 1)} onChange={onChangeSpy} />);

      expect(getByTestId('input')).toHaveValue('February 6, 2019 at 2:30 PM');
    });
  });

  describe('customParseDate()', () => {
    it('uses customParseDate to determine date validity if provided', async () => {
      const MOCK_DATE = new Date(2019, 0, 1, 10, 0);
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

  describe('Calendar', () => {
    it('applies LTR classes by default', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));

      expect(getByTestId('datetimepicker-menu')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', async () => {
      const { getByTestId } = renderRtl(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));

      expect(getByTestId('datetimepicker-menu')).toHaveAttribute('data-test-rtl', 'true');
    });

    it('portals as expected', () => {
      const { container, rerender } = render(<Example />);
      const selector = '[data-test-id="datetimepicker-menu"]';

      expect(container.querySelector(selector)).not.toBeNull();

      const node = document.createElement('DIV');

      document.body.appendChild(node);

      rerender(<Example appendToNode={node} />);

      expect(container.querySelector(selector)).toBeNull();
      expect(node.querySelector(selector)).not.toBeNull();
    });
  });
});
