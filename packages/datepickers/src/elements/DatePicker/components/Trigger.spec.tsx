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

describe('Trigger', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('reflects the dialog open state via aria-expanded, and aria-controls references the menu', () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');
    const menu = getByTestId('datepicker-menu');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', menu.id);
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
