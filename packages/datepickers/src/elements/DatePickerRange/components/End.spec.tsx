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

  describe('End Input', () => {
    it('displays provided value', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );

      expect(getByTestId('end')).toHaveValue('March 5, 2019');
    });

    it('displays empty string if no value provided', () => {
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);

      expect(getByTestId('end')).toHaveValue('');
    });

    it('calls onChange with provided date if manually added in short format', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '3/4/2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: new Date(2019, 2, 4)
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'March 4, 2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: new Date(2019, 2, 4)
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'March 4th, 2019');
      await user.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: new Date(2019, 2, 4)
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'January 4th, 2019');
      fireEvent.keyDown(endInput, { key: KEYS.ENTER });

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: DEFAULT_START_VALUE,
        endValue: new Date(2019, 0, 4)
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('calls onChange prop if provided', async () => {
      const onInputChangeSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" onChange={onInputChangeSpy} />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.type(getByTestId('end'), 'hello');

      expect(onInputChangeSpy).toHaveBeenCalled();
    });

    it('calls onBlur prop if provided', async () => {
      const onBlurSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" onBlur={onBlurSpy} />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('end'));
      await user.tab();

      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('calls onFocus prop if provided', async () => {
      const onFocusSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" onFocus={onFocusSpy} />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('end'));

      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('calls onKeyDown prop if provided', async () => {
      const onKeyDownSpy = jest.fn();

      const { getByTestId } = render(
        <DatePickerRange>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" onKeyDown={onKeyDownSpy} />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.type(getByTestId('end'), 'hello');

      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });

  describe('Combobox semantics', () => {
    it('defaults to aria-expanded="true" when the consumer does not override it', () => {
      const { getByTestId } = render(<Example onChange={onChangeSpy} />);

      expect(getByTestId('end')).toHaveAttribute('aria-expanded', 'true');
    });

    it('lets a consumer-supplied aria-expanded override the default', () => {
      const { getByTestId } = render(
        <DatePickerRange onChange={onChangeSpy}>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props -- DatePickerRange.End clones this element with role="combobox" (and aria-controls) at runtime, which does support aria-expanded */}
            <input data-test-id="end" aria-expanded="false" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      expect(getByTestId('end')).toHaveAttribute('aria-expanded', 'false');
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '3/4/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: new Date(2019, 2, 4),
        inputValue: '3/4/2019',
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
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

      await user.click(getByTestId('end'));
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: undefined,
        inputValue: '',
        valid: true
      });
    });

    it('reports invalid when blurring an empty, required field', async () => {
      const { getByTestId } = render(
        <DatePickerRange onChange={onChangeSpy} onValueSettled={onValueSettledSpy}>
          <DatePickerRange.Start>
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <input data-test-id="end" required />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByTestId('end'));
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
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
          minValue={new Date(2019, 2, 1)}
          maxValue={new Date(2019, 2, 10)}
        />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '3/20/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: undefined,
        inputValue: '3/20/2019',
        valid: false,
        reason: 'out-of-range'
      });
    });

    it('reports invalid when the typed end date is before the current start date', async () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
          onValueSettled={onValueSettledSpy}
        />
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '1/1/2019');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: undefined,
        inputValue: '1/1/2019',
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
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, '3/4/2019');
      fireEvent.keyDown(endInput, { key: KEYS.ENTER });

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: new Date(2019, 2, 4),
        inputValue: '3/4/2019',
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
      const endInput = getByTestId('end');

      await user.clear(endInput);

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
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
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <ClearableInput data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );

      await user.click(getByRole('button', { name: 'Clear' }));

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: undefined,
        inputValue: '',
        valid: true
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
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <ClearableInput data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const endInput = getByTestId('end');

      fireEvent.change(endInput, { target: { value: 'invalid date' } });
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
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <ClearableInput data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(endInput).toHaveValue('invalid date');
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
            <input data-test-id="start" />
          </DatePickerRange.Start>
          <DatePickerRange.End>
            <ClearableInput data-test-id="end" />
          </DatePickerRange.End>
          <DatePickerRange.Calendar />
        </DatePickerRange>
      );
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'invalid date');
      await user.tab();
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalledWith({
        field: 'end',
        date: undefined,
        inputValue: 'invalid date',
        valid: false,
        reason: 'malformed'
      });
      expect(endInput).toHaveValue('invalid date');
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
              <input data-test-id="start" />
            </DatePickerRange.Start>
            <DatePickerRange.End>
              <input data-test-id="end" aria-invalid={!!reason} />
            </DatePickerRange.End>
            <DatePickerRange.Calendar />
          </DatePickerRange>
        );
      };

      const { getByTestId } = render(<ReasonTrackingExample />);
      const endInput = getByTestId('end');

      await user.clear(endInput);
      await user.type(endInput, 'invalid date');
      await user.tab();

      expect(onValueSettledSpy).toHaveBeenCalled();
      expect(endInput).toHaveValue('invalid date');
    });
  });
});
