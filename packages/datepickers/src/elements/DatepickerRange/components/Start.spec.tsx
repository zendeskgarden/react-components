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
import { KEY_CODES, KEYS } from '@zendeskgarden/container-utilities';

import { DatepickerRange } from '../DatepickerRange';
import { IDatepickerRangeProps } from '../../../types';

const DEFAULT_START_VALUE = new Date(2019, 1, 5);
const DEFAULT_END_VALUE = new Date(2019, 2, 5);

const Example = (props: IDatepickerRangeProps) => (
  <DatepickerRange {...props}>
    <DatepickerRange.Start>
      <input data-test-id="start" />
    </DatepickerRange.Start>
    <DatepickerRange.End>
      <input data-test-id="end" />
    </DatepickerRange.End>
    <DatepickerRange.Calendar />
  </DatepickerRange>
);

describe('DatepickerRange', () => {
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
      fireEvent.keyDown(startInput, { key: KEYS.ENTER, keyCode: KEY_CODES.ENTER });

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
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" onChange={onInputChangeSpy} />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );
      const startInput = getByTestId('start');

      await user.clear(startInput);
      await user.type(startInput, 'hello');

      expect(onInputChangeSpy).toHaveBeenCalled();
    });

    it('calls onBlur prop if provided', async () => {
      const onBlurSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" onBlur={onBlurSpy} />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.click(getByTestId('start'));
      await user.tab();

      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('calls onFocus prop if provided', async () => {
      const onFocusSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" onFocus={onFocusSpy} />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.click(getByTestId('start'));

      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('calls onKeyDown prop if provided', async () => {
      const onKeyDownSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" onKeyDown={onKeyDownSpy} />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.type(getByTestId('start'), 'hello');

      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});
