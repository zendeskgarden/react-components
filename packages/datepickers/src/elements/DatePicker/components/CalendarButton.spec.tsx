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

describe('CalendarButton', () => {
  const user = userEvent.setup({ delay: null });

  it('hides its icon from assistive technology', () => {
    const { getByRole } = render(<CalendarButton />);

    const icon = getByRole('button', { name: 'Choose date' }).querySelector('svg');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('has a default accessible name and aria-haspopup="dialog"', () => {
    const { getByRole } = render(<CalendarButton />);

    const button = getByRole('button', { name: 'Choose date' });

    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('is excluded from the Tab sequence by default, but can still receive programmatic focus', () => {
    const { getByRole } = render(<CalendarButton />);

    const button = getByRole('button', { name: 'Choose date' });

    expect(button).toHaveAttribute('tabindex', '-1');

    button.focus();

    expect(button).toHaveFocus();
  });

  it('calls onClick when Enter or Space is pressed', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(<CalendarButton onClick={onClick} />);

    const button = getByRole('button', { name: 'Choose date' });

    button.focus();
    await user.keyboard('{Enter}');

    expect(onClick).toHaveBeenCalledTimes(1);

    await user.keyboard(' ');

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
