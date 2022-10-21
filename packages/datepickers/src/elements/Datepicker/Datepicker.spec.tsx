/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent, act } from 'garden-test-utils';
import { addDays, subDays } from 'date-fns';
import mockDate from 'mockdate';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Datepicker } from './Datepicker';
import { IDatepickerProps } from '../../types';

const DEFAULT_DATE = new Date(2019, 1, 5);

const Example = (props: IDatepickerProps) => (
  <>
    <label data-test-id="label" htmlFor="input">
      Label
    </label>
    <Datepicker {...props}>
      <input data-test-id="input" id="input" />
    </Datepicker>
  </>
);

jest.useFakeTimers();

describe('Datepicker', () => {
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

    it('display locale based first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} locale="en-GB" />
      );

      await user.click(getByTestId('input'));
      const dayLabels = getAllByTestId('day-label');

      expect(dayLabels[0]).toHaveTextContent('Mon');
    });

    it('display custom first day of week', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} locale="en-GB" weekStartsOn={3} />
      );

      await user.click(getByTestId('input'));
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

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28));
    });

    it('updates input value when date is selected', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      await user.click(input);
      fireEvent.click(getAllByTestId('day')[1]);

      expect(input).toHaveValue('January 28, 2019');
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

      await user.click(getByTestId('input'));
      const days = getAllByTestId('day');

      fireEvent.click(days[0]);
      fireEvent.click(days[days.length - 1]);

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

    it('opens datepicker on focus', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('opens datepicker on click', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('leaves datepicker closed on label click', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      act(() => {
        fireEvent.mouseUp(getByTestId('input'));
        jest.runOnlyPendingTimers();
        fireEvent.click(getByTestId('input'));
      });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes datepicker on blur', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.tab();

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes datepicker when not animated', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example isAnimated={false} value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      await user.tab();

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('opens datepicker when correct keys are used', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { keyCode: KEY_CODES.UP });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();

      fireEvent.keyDown(input, { keyCode: KEY_CODES.DOWN });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();

      await user.type(input, ' ');
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      await user.tab();
    });

    it('closes datepicker when correct keys are used', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.click(input);
      fireEvent.keyDown(input, { keyCode: KEY_CODES.ESCAPE });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');

      await user.click(input);
      fireEvent.keyDown(input, { keyCode: KEY_CODES.ENTER });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('leaves datepicker open if calendar is moused down', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      await user.click(input);
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

  describe('Popper', () => {
    it('applies LTR classes by default', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', async () => {
      const { getByTestId } = renderRtl(<Example value={DEFAULT_DATE} />);

      await user.click(getByTestId('input'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'true');
    });
  });
});
