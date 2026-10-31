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

const CHOOSE_DATE = 'Choose date';

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

    const icon = getByRole('button', { name: CHOOSE_DATE }).querySelector('svg');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('has a default accessible name', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    expect(getByRole('button', { name: CHOOSE_DATE })).toBeInTheDocument();
  });

  it('reflects a consumer-provided toggleCalendarLabel', () => {
    const { getByRole } = render(
      <CalendarButton getTriggerProps={getTriggerProps} toggleCalendarLabel="Choose start date" />
    );

    expect(getByRole('button', { name: 'Choose start date' })).toBeInTheDocument();
  });

  it("reflects getTriggerProps' aria-haspopup/aria-expanded/aria-controls", () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const button = getByRole('button', { name: CHOOSE_DATE });

    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'menu');
  });

  it('is excluded from the Tab sequence by default, but can still receive programmatic focus', () => {
    const { getByRole } = render(<CalendarButton getTriggerProps={getTriggerProps} />);

    const button = getByRole('button', { name: CHOOSE_DATE });

    expect(button).toHaveAttribute('tabindex', '-1');

    button.focus();

    expect(button).toHaveFocus();
  });

  it('calls onClick when Enter or Space is pressed', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <CalendarButton getTriggerProps={getTriggerProps} onClick={onClick} />
    );

    const button = getByRole('button', { name: CHOOSE_DATE });

    button.focus();
    await user.keyboard('{Enter}');

    expect(onClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('passes extra props through to the button', () => {
    const { getByRole } = render(
      <CalendarButton getTriggerProps={getTriggerProps} aria-describedby="hint" />
    );

    expect(getByRole('button', { name: CHOOSE_DATE })).toHaveAttribute('aria-describedby', 'hint');
  });
});
