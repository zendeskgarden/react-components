/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { CalendarButton } from './CalendarButton';

describe('CalendarButton', () => {
  it('hides its icon from assistive technology', () => {
    const { getByRole } = render(<CalendarButton />);

    const icon = getByRole('button', { name: 'Choose date' }).querySelector('svg');

    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
