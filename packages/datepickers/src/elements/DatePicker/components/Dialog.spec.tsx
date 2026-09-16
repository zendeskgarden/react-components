/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, renderRtl } from 'garden-test-utils';
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

describe('Dialog', () => {
  const user = userEvent.setup({ delay: null });

  let onChangeSpy: (date: Date) => void;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  it('doesnt render calendar elements when hidden', () => {
    const { queryByTestId } = render(<Example value={DEFAULT_DATE} />);

    expect(queryByTestId('datepicker-menu')).toBeEmptyDOMElement();
  });

  it('has dialog role, aria-modal="false", and an accessible name matching the calendar button', async () => {
    const { getByTestId, getByRole } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );

    await user.click(getByTestId('calendar-button'));

    const dialog = getByRole('dialog', { name: 'Choose date' });

    expect(dialog).toHaveAttribute('aria-modal', 'false');
  });

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

  it('closes the calendar and returns focus to the input on Escape, without selecting a date', async () => {
    const { getByTestId, getAllByTestId } = render(
      <Example value={DEFAULT_DATE} onChange={onChangeSpy} />
    );
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getAllByTestId('day')[9]).toHaveFocus();

    fireEvent.keyDown(getAllByTestId('day')[9], { key: KEYS.ESCAPE });

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(getByTestId('input')).toHaveFocus();
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar on Escape when focus never left the input', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const input = getByTestId('input');

    await user.click(input);

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');
    expect(input).toHaveFocus();

    await user.keyboard('{Escape}');

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('closes the calendar when clicking outside of the widget', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when clicking a non-interactive element outside the widget', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('outside-background'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });

  it('closes the calendar when the input receives focus', async () => {
    const { getByTestId } = render(<Example value={DEFAULT_DATE} onChange={onChangeSpy} />);
    const button = getByTestId('calendar-button');

    await user.click(button);
    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'true');

    await user.click(getByTestId('input'));

    expect(getByTestId('datepicker-menu')).toHaveAttribute('data-test-open', 'false');
  });
});
