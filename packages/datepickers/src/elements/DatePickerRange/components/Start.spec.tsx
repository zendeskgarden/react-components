/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from 'garden-test-utils';
import mockDate from 'mockdate';
import { KEYS } from '@zendeskgarden/container-utilities';

import { ClearableInput } from '@zendeskgarden/react-forms';
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

/**
 * A composite child with no click-to-focus behavior of its own, so tests
 * against it exercise only what `DatePickerRange.Start`/`.End` themselves
 * forward through `wrapperRef`/`wrapperProps` - not a composed component's
 * (e.g. `ClearableInput`'s) own internal wrapper-click handling.
 */
const BareWrapperInput = React.forwardRef<HTMLInputElement, Record<string, unknown>>(
  ({ wrapperRef, wrapperProps, ...inputProps }: any, ref) => (
    <div data-test-id="start-wrapper" {...wrapperProps} ref={wrapperRef}>
      <input ref={ref} {...inputProps} />
    </div>
  )
);

BareWrapperInput.displayName = 'BareWrapperInput';

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

  describe('Start Input', () => {
    it('displays provided value', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('start')).toHaveValue('February 5, 2019');
    });

    it('displays empty string if no value provided', () => {
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);

      expect(getByTestId('start')).toHaveValue('');
    });

    it('calls onChange with provided date if manually added in short format', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/4/2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if manually added in medium format', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'Jan 4, 2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if manually added in long format', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'January 4th, 2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if ENTER key is used', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'January 4th, 2019');
      fireEvent.keyDown(startInput, { key: KEYS.ENTER });

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('does not call onChange with provided date if invalid', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('calls onChange prop if provided', async () => {
      const onInputChangeSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" onChange={onInputChangeSpy} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'hello');

      expect(onInputChangeSpy).toHaveBeenCalled();
    });

    it('calls onBlur prop if provided', async () => {
      const onBlurSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" onBlur={onBlurSpy} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('start'));
      await user.tab();

      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('calls onFocus prop if provided', async () => {
      const onFocusSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" onFocus={onFocusSpy} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('start'));

      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('calls onKeyDown prop if provided', async () => {
      const onKeyDownSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" onKeyDown={onKeyDownSpy} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.type(getByTestId('start'), 'hello');

      expect(onKeyDownSpy).toHaveBeenCalled();
    });

    it('forwards a consumer-provided ref to the underlying input element', () => {
      const ref = { current: null as HTMLInputElement | null };

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" ref={ref} />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      expect(ref.current).toBe(getByTestId('start'));
    });
  });

  describe('Combobox semantics', () => {
    it('exposes no combobox semantics when no Dialog is composed', () => {
      const { getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );
      const startInput = getByTestId('start');

      expect(startInput).not.toHaveAttribute('role');
      expect(startInput).not.toHaveAttribute('aria-autocomplete');
      expect(startInput).not.toHaveAttribute('aria-controls');
      expect(startInput).not.toHaveAttribute('aria-haspopup');
      expect(startInput).not.toHaveAttribute('aria-expanded');
    });

    it('sets a native `autocomplete="off"` attribute by default', () => {
      const { getByTestId } = render(
        <Example startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE} />
      );

      expect(getByTestId('start')).toHaveAttribute('autocomplete', 'off');
    });

    it('allows the native `autocomplete` attribute to be overridden', () => {
      const { getByTestId } = render(
        <DatePickerRange startValue={DEFAULT_START_VALUE} endValue={DEFAULT_END_VALUE}>
          <DatePickerRange.Start>
            <input data-test-id="start" autoComplete="username" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      expect(getByTestId('start')).toHaveAttribute('autocomplete', 'username');
    });

    it('lets a consumer set aria-expanded even when no Dialog is composed', () => {
      const { getByTestId } = render(
        <DatePickerRange onChange={onChangeSpy}>
          <DatePickerRange.Start>
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props -- static analysis can't see that DatePickerRange.Start may clone this with combobox semantics at runtime, when composed with a Dialog */}
            <input data-test-id="start" aria-expanded="false" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      expect(getByTestId('start')).toHaveAttribute('aria-expanded', 'false');
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

    it('reports a valid date when blurring after typing a parseable date', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/4/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('reports invalid when blurring after typing unparseable text', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
    });

    it('reports valid when blurring an empty, non-required field', async () => {
      const { getByTestId } = render(
        <Example onChange={onChangeSpy} onValueSettled={onValueSettledSpy} />
      );

      await user.click(getByTestId('start'));
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('reports invalid when blurring an empty, required field', async () => {
      const { getByTestId } = render(
        <DatePickerRange onChange={onChangeSpy} onValueSettled={onValueSettledSpy}>
          <DatePickerRange.Start>
            <input data-test-id="start" required />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('start'));
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '',
        valid: false,
        reason: 'required'
      });
    });

    it('reports invalid when blurring after typing a date outside minValue/maxValue', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
          minValue={new Date(2019, 1, 1)}
          maxValue={new Date(2019, 1, 10)}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/4/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '1/4/2019',
        valid: false,
        reason: 'out-of-range'
      });
    });

    it('reports invalid when the typed start date is after the current end date', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '3/10/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '3/10/2019',
        valid: false,
        reason: 'out-of-order'
      });
    });

    it('reports a valid date when ENTER key is used', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, '1/4/2019');
      fireEvent.keyDown(startInput, { key: KEYS.ENTER });

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: new Date(2019, 0, 4),
        inputValue: '1/4/2019',
        valid: true
      });
    });

    it('settles immediately when the input is manually cleared, without waiting for blur', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('settles immediately when a ClearableInput clear button is clicked, without waiting for blur', async () => {
      const { getByRole } = render(
        <DatePickerRange
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        >
          <DatePickerRange.Start>
            <ClearableInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByRole('button', { name: 'Clear' }));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('calls onChange with startValue undefined when a ClearableInput clear button is clicked, even without onValueSettled wired', async () => {
      const { getByRole } = render(
        <DatePickerRange
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        >
          <DatePickerRange.Start>
            <ClearableInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByRole('button', { name: 'Clear' }));

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: undefined,
        endValue: DEFAULT_END_VALUE
      });
    });

    it('does not settle when focus moves to its own ClearableInput clear button', async () => {
      const { getByTestId } = render(
        <DatePickerRange
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        >
          <DatePickerRange.Start>
            <ClearableInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const startInput = getByTestId('start');

      fireEvent.change(startInput, { target: { value: 'invalid date' } });
      await user.tab();

      expect(onValueSettledSpy).not.toHaveBeenCalled();
    });

    it('does not revert the typed value while focus moves to its own ClearableInput clear button', async () => {
      const { getByTestId } = render(
        <DatePickerRange
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        >
          <DatePickerRange.Start>
            <ClearableInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(startInput).toHaveValue('invalid date');
    });

    it('does not revert the typed value once settled, leaving it for the user to fix or clear themselves', async () => {
      const { getByTestId } = render(
        <DatePickerRange
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        >
          <DatePickerRange.Start>
            <ClearableInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'invalid date');
      await user.tab();
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'start',
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
      expect(startInput).toHaveValue('invalid date');
    });

    it('does not clobber the typed value when settling causes the parent to re-render', async () => {
      const ReasonTrackingExample = () => {
        const [reason, setReason] = React.useState<string | undefined>(undefined);

        return (
          <DatePickerRange
            startValue={DEFAULT_START_VALUE}
            endValue={DEFAULT_END_VALUE}
            onChange={onChangeSpy}
            onValueSettled={result => {
              onValueSettledSpy(result);
              setReason(result.reason);
            }}
          >
            <DatePickerRange.Start>
              <input data-test-id="start" aria-invalid={!!reason} />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <input data-test-id="end" />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
        );
      };

      const { getByTestId } = render(<ReasonTrackingExample />);
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'invalid date');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalled();
      expect(startInput).toHaveValue('invalid date');
    });
  });

  describe('wrapper click', () => {
    it("focuses the input when a composite child's own wrapper is clicked, not just the input itself", () => {
      const { getByTestId } = render(
        <DatePickerRange onChange={onChangeSpy}>
          <DatePickerRange.Start>
            <BareWrapperInput data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" />
          </DatePickerRange.End>
        </DatePickerRange>
      );

      fireEvent.click(getByTestId('start-wrapper'));

      expect(getByTestId('start')).toHaveFocus();
    });
  });
});
