/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent, act } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';
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
      await user.click(input);
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

    it('does not open the datepicker on click', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );

      await user.click(getByTestId('input'));

      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('does not open the datepicker on arrow keys', () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      fireEvent.keyDown(input, { key: KEYS.UP });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');

      fireEvent.keyDown(input, { key: KEYS.DOWN });
      expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    });

    it('does not open the datepicker while typing', async () => {
      const { getByTestId, queryByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const input = getByTestId('input');

      await user.clear(input);
      await user.type(input, '1/4/2019');

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

      fireEvent.mouseDown(document.body);

      expect(input).toHaveValue('1/4/2019');
    });

    it('does not discard unparseable typed text when closing the calendar by clicking outside', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.click(getByTestId('calendar-button'));

      fireEvent.mouseDown(document.body);

      expect(input).toHaveValue('invalid date');
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
        valid: false
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
        valid: false
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
        valid: false
      });
    });

    it('reports invalid when closing the calendar by clicking outside after typing unparseable text', async () => {
      const { getByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );
      const input = getByTestId('input');

      fireEvent.change(input, { target: { value: 'invalid date' } });
      await user.click(getByTestId('calendar-button'));

      fireEvent.mouseDown(document.body);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        date: undefined,
        inputValue: 'invalid date',
        valid: false
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

      fireEvent.mouseDown(document.body);

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
  });

  describe('Calendar trigger button', () => {
    it('has an accessible name, aria-haspopup, aria-expanded, and aria-controls', () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');
      const menu = getByTestId('datepicker-menu');

      expect(button).toHaveAttribute('aria-haspopup', 'dialog');
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('aria-controls', menu.id);
      expect(button).toHaveAccessibleName();
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

    it('closes the calendar and returns focus to the button on Escape', async () => {
      const { getByTestId, getAllByTestId } = render(
        <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
      );
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getAllByTestId('day')[9]).toHaveFocus();

      fireEvent.keyDown(getAllByTestId('day')[9], { key: KEYS.ESCAPE });

      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
      expect(button).toHaveFocus();
    });

    it('closes the calendar when clicking outside of the widget', async () => {
      const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
      const button = getByTestId('calendar-button');

      await user.click(button);
      expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

      fireEvent.mouseDown(document.body);

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
