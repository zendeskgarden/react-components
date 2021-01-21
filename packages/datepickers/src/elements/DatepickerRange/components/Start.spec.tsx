/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import mockDate from 'mockdate';
import { DatepickerRange, IDatepickerRangeProps } from '../DatepickerRange';

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

    it('calls onChange with provided date if manually added in short format', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      userEvent.clear(startInput);
      userEvent.type(startInput, '1/4/2019');
      userEvent.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if manually added in medium format', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      userEvent.clear(startInput);
      userEvent.type(startInput, 'Jan 4, 2019');
      userEvent.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if manually added in long format', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      userEvent.clear(startInput);
      userEvent.type(startInput, 'January 4th, 2019');
      userEvent.tab();

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('calls onChange with provided date if ENTER key is used', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      userEvent.clear(startInput);
      userEvent.type(startInput, 'January 4th, 2019');
      userEvent.type(startInput, '{enter}');

      expect(onChangeSpy).toHaveBeenCalledWith({
        startValue: new Date(2019, 0, 4),
        endValue: DEFAULT_END_VALUE
      });
    });

    it('does not call onChange with provided date if invalid', () => {
      const { getByTestId } = render(
        <Example
          startValue={DEFAULT_START_VALUE}
          endValue={DEFAULT_END_VALUE}
          onChange={onChangeSpy}
        />
      );
      const startInput = getByTestId('start');

      userEvent.clear(startInput);
      userEvent.type(startInput, 'invalid date');
      userEvent.tab();

      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('calls onChange prop if provided', () => {
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

      userEvent.clear(startInput);
      userEvent.type(startInput, 'hello');

      expect(onInputChangeSpy).toHaveBeenCalled();
    });

    it('calls onBlur prop if provided', () => {
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

      userEvent.click(getByTestId('start'));
      userEvent.tab();

      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('calls onFocus prop if provided', () => {
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

      userEvent.click(getByTestId('start'));

      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('calls onKeyDown prop if provided', () => {
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

      userEvent.type(getByTestId('start'), 'hello');

      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});
