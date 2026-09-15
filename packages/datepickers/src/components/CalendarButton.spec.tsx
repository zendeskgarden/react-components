/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { CalendarButton } from './CalendarButton';

/**
 * Exercises the shared `CalendarButton` directly, with `getTriggerProps`
 * supplied as a mock mirroring both real implementations' shape (they both
 * always set `aria-haspopup`/`aria-expanded`/`aria-controls`) - the real
 * wiring is already covered end-to-end via `DatePicker`'s "Calendar trigger
 * button" tests and `DatePickerRange/components/Dialog.spec.tsx`'s
 * "Multiple triggers" tests.
 */
describe('CalendarButton', () => {
  const user = userEvent.setup({ delay: null });

  const getTriggerProps = jest.fn(props => ({
    'aria-haspopup': 'dialog',
    'aria-expanded': false,
    'aria-controls': 'menu',
    ...props
  }));

  beforeEach(() => {
    getTriggerProps.mockClear();
  });

  it('hides its icon from assistive technology', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const icon = getByRole('button', { name: 'Choose date' }).querySelector('svg');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('has a default accessible name', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    expect(getByRole('button', { name: 'Choose date' })).toBeInTheDocument();
  });

  it('reflects a consumer-provided toggleCalendarLabel', () => {
    const { getByRole } = render(
      <CalendarButton getTriggerProps={getTriggerProps} toggleCalendarLabel="Choose start date" />
    );

    expect(getByRole('button', { name: 'Choose start date' })).toBeInTheDocument();
  });

  it("reflects getTriggerProps' aria-haspopup/aria-expanded/aria-controls", () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const button = getByRole('button', { name: 'Choose date' });

    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'menu');
  });

  it('is excluded from the Tab sequence by default, but can still receive programmatic focus', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const button = getByRole('button', { name: 'Choose date' });

    expect(button).toHaveAttribute('tabindex', '-1');

    button.focus();

    expect(button).toHaveFocus();
  });

  it('calls onClick when Enter or Space is pressed', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <CalendarButton getTriggerProps={getTriggerProps} onClick={onClick} />
    );

    const button = getByRole('button', { name: 'Choose date' });

    button.focus();
    await user.keyboard('{Enter}');

    expect(onClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('passes a ref for getTriggerProps to track, mirroring how a consumer may compose more than one calendar button at once', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const { ref } = getTriggerProps.mock.calls[0][0];

    expect(ref.current).toBe(getByRole('button', { name: 'Choose date' }));
  });

  it('lets an extra prop (e.g. data-test-id) override the default, so more than one can be told apart', () => {
    const { getByTestId } = render(
      <CalendarButton getTriggerProps={getTriggerProps} data-test-id="start-calendar-button" />
    );

    expect(getByTestId('start-calendar-button')).toBeInTheDocument();
  });
});
