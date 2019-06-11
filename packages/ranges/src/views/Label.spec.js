/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Label from './Label';

describe('Label', () => {
  it('renders default styling', () => {
    const { container } = render(<Label />);

    expect(container.firstChild).toHaveClass('c-range__label');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Label />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders small styling if provided', () => {
    const { container } = render(<Label small />);

    expect(container.firstChild).toHaveClass('c-range__label--sm');
  });

  it('renders regular styling if provided', () => {
    const { container } = render(<Label regular />);

    expect(container.firstChild).toHaveClass('c-range__label--regular');
  });
});
