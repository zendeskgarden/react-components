/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import CheckboxView from './CheckboxView';

describe('CheckboxView', () => {
  it('renders default styling', () => {
    const { container } = render(<CheckboxView />);

    expect(container.firstChild).toHaveClass('c-chk');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<CheckboxView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
