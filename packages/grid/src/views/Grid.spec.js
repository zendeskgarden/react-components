/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Grid from './Grid';

describe('Grid', () => {
  it('renders default styling', () => {
    const { container } = render(<Grid />);

    expect(container.firstChild).toHaveClass('container-fluid');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<Grid />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('disables fluid styling if provided', () => {
    const { container } = render(<Grid fluid={false} />);

    expect(container.firstChild).toHaveClass('container');
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<Grid debug />);

    expect(container.firstChild).toHaveClass('is-debug');
  });
});
