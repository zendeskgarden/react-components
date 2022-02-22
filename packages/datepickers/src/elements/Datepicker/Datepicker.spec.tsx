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
import { Datepicker, IDatepickerProps } from './Datepicker';

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

    it('displays dates with correct previous styling', () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));
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

    it('displays dates with selected and today styling', () => {
      const { getByTestId, getAllByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));
      const days = getAllByTestId('day');

      expect(days[9]).toHaveAttribute('data-test-selected', 'true');
      expect(days[9]).toHaveAttribute('data-test-today', 'true');
    });

    it('displays disabled styling for minimum and maximum values', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      userEvent.click(getByTestId('input'));
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

    it('displays selected month in correct format', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });

    it('displays previous month if previous paddle is clicked', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));
      fireEvent.click(getByTestId('previous-month'));

      expect(getByTestId('month-display')).toHaveTextContent('January 2019');
    });

    it('displays next month if next paddle is clicked', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));
      fireEvent.click(getByTestId('next-month'));

      expect(getByTestId('month-display')).toHaveTextContent('March 2019');
    });

    it('displays current month if no value is provided', () => {
      const { getByTestId } = render(<Example />);

      userEvent.click(getByTestId('input'));

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
    });
  });

  describe('Calendar selection', () => {
    it('calls onChange when date is selected', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      userEvent.click(getByTestId('input'));
      fireEvent.click(getAllByTestId('day')[1]);

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 28));
    });

    it('updates input value when date is selected', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      const input = getByTestId('input');

      userEvent.click(input);
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

    it('does not select date if before minDate', () => {
      const { getByTestId, getAllByTestId } = render(
        <Example
          value={DEFAULT_DATE}
          onChange={onChangeSpy}
          minValue={subDays(DEFAULT_DATE, 2)}
          maxValue={addDays(DEFAULT_DATE, 2)}
        />
      );

      userEvent.click(getByTestId('input'));
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

    it('opens datepicker on focus', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      userEvent.click(getByTestId('input'));

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('opens datepicker on click', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      userEvent.click(getByTestId('input'));

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

    it('closes datepicker on blur', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      userEvent.click(input);
      userEvent.tab();

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('closes datepicker when not animated', () => {
      const { getByTestId, queryByTestId } = render(
        <Example isAnimated={false} value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      userEvent.click(input);
      userEvent.tab();

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('opens datepicker when correct keys are used', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { keyCode: KEY_CODES.UP });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      userEvent.tab();

      fireEvent.keyDown(input, { keyCode: KEY_CODES.DOWN });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      userEvent.tab();

      userEvent.type(input, ' ');
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
      userEvent.tab();
    });

    it('closes datepicker when correct keys are used', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      userEvent.click(input);
      fireEvent.keyDown(input, { keyCode: KEY_CODES.ESCAPE });

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');

      userEvent.click(input);
      userEvent.type(input, '{enter}');
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('leaves datepicker open if calendar is moused down', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      userEvent.click(input);
      fireEvent.click(getByTestId('calendar-wrapper'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    });

    it('calls onChange with provided date if manually added in short format', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, '1/4/2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('calls onChange with provided date if manually added in medium format', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, 'Jan 4, 2019');

      expect(onChangeSpy).toHaveBeenCalledWith(new Date(2019, 0, 4));
    });

    it('calls onChange with provided date if manually added in long format', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, 'January 4th, 2019');

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
    it('uses customParseDate to determine date validitiy if provided', () => {
      const MOCK_DATE = new Date(2019, 0, 1);
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(MOCK_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, 'invalid date');

      expect(customParseDateSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledWith(MOCK_DATE);
    });

    it('does not call onChange if parsed date is the current value', () => {
      const customParseDateSpy: (input: string) => Date = jest.fn().mockReturnValue(DEFAULT_DATE);
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} customParseDate={customParseDateSpy} />
      );
      const input = getByTestId('input');

      userEvent.clear(input);
      userEvent.type(input, 'invalid date');

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
    it('applies LTR classes by default', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'false');
    });

    it('applies RTL classes if provided', () => {
      const { getByTestId } = renderRtl(<Example value={DEFAULT_DATE} />);

      userEvent.click(getByTestId('input'));

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-rtl', 'true');
    });
  });
});
