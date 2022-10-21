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
      fireEvent.keyDown(endInput, { key: KEYS.ENTER, keyCode: KEY_CODES.ENTER });

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
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" onChange={onInputChangeSpy} />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.type(getByTestId('end'), 'hello');

      expect(onInputChangeSpy).toHaveBeenCalled();
    });

    it('calls onBlur prop if provided', async () => {
      const onBlurSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" onBlur={onBlurSpy} />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.click(getByTestId('end'));
      await user.tab();

      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('calls onFocus prop if provided', async () => {
      const onFocusSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" onFocus={onFocusSpy} />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.click(getByTestId('end'));

      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('calls onKeyDown prop if provided', async () => {
      const onKeyDownSpy = jest.fn();

      const { getByTestId } = render(
        <DatepickerRange>
          <DatepickerRange.Start>
            <input data-test-id="start" />
          </DatepickerRange.Start>
          <DatepickerRange.End>
            <input data-test-id="end" onKeyDown={onKeyDownSpy} />
          </DatepickerRange.End>
          <DatepickerRange.Calendar />
        </DatepickerRange>
      );

      await user.type(getByTestId('end'), 'hello');

      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});
