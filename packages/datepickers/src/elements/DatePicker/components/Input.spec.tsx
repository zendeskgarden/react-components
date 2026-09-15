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
import { DatePicker } from '../DatePicker';
import { IDatePickerProps } from '../../../types';

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

jest.useFakeTimers();

describe('Input', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('displays provided value', () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

    expect(getByTestId('input')).toHaveValue('February 5, 2019');
  });

  it('displays empty string if no value provided', () => {
    const { getByTestId } = render(<Example onChange={onChangeSpy} />);

    expect(getByTestId('input')).toHaveValue('');
  });

  it('opens the calendar when the input is clicked, without moving focus into the grid', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(input).toHaveFocus();
  });

  it('does not open the calendar when the input receives keyboard focus', async () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    await user.tab();

    expect(getByTestId('input')).toHaveFocus();
    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('does not open the datepicker on Up Arrow', () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    fireEvent.keyDown(input, { key: KEYS.UP });

    expect(queryByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('typing into the input does not open the calendar if it is not already open', () => {
    const { getByTestId, queryByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const input = getByTestId('input');

    input.focus();
    fireEvent.change(input, { target: { value: '1/4/2019' } });

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

  it('opens the calendar when the associated label is clicked, without moving focus into the grid', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);

    await user.click(getByTestId('label'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(getByTestId('input')).toHaveFocus();
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

    rerender(<Example value={new Date(2019, 1, 6)} onChange={onChangeSpy} />);

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
            onClick={() => setValue(new Date(2019, 1, 6))}
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

    await user.click(getByTestId('outside'));

    expect(input).toHaveValue('1/4/2019');
  });

  it('does not discard unparseable typed text when closing the calendar by clicking outside', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: 'invalid date' } });
    await user.click(getByTestId('calendar-button'));

    await user.click(getByTestId('outside'));

    expect(input).toHaveValue('invalid date');
  });
});
