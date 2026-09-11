/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Toolbar } from './Toolbar';

describe('Toolbar', () => {
  const renderToolbar = () =>
    render(
      <Toolbar
        onPreviousYear={jest.fn()}
        onPreviousMonth={jest.fn()}
        onNextMonth={jest.fn()}
        onNextYear={jest.fn()}
      />
    );

  it.each(['Previous year', 'Previous month', 'Next month', 'Next year'])(
    'hides the "%s" paddle icon from assistive technology',
    name => {
      const { getByRole } = renderToolbar();

      const icon = getByRole('button', { name }).querySelector('svg');

      expect(icon).toHaveAttribute('aria-hidden', 'true');
    }
  );
});
