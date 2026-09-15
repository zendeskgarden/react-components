/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { addDays } from 'date-fns/addDays';
import { subDays } from 'date-fns/subDays';
import mockDate from 'mockdate';
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

  describe('Calendar selection', () => {
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

    it('does not move the calendar view when blurring after typing a date outside minValue/maxValue', async () => {
      const ControlledExample = () => {
        const [value, setValue] = useState<Date | undefined>(DEFAULT_DATE);

        return (
          <Example
            value={value}
            onChange={setValue}
            minValue={subDays(DEFAULT_DATE, 2)}
            maxValue={addDays(DEFAULT_DATE, 2)}
          />
        );
      };
      const { getByTestId } = render(<ControlledExample />);
      const input = getByTestId('input');

      await user.click(getByTestId('calendar-button'));

      fireEvent.change(input, { target: { value: '1/1/2020' } });
      fireEvent.blur(input);

      expect(getByTestId('month-display')).toHaveTextContent('February 2019');
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
});
