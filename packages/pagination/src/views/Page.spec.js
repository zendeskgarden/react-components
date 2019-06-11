/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import Page from './Page';

describe('Page', () => {
  it('renders default styling', () => {
    const { container } = render(<Page />);

    expect(container.firstChild).toHaveClass('c-pagination__page');
  });

  it('renders current styling if provided', () => {
    const { container } = render(<Page current />);

    expect(container.firstChild).toHaveClass('is-current');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<Page focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<Page hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders hidden styling if provided', () => {
    const { container } = render(<Page hidden />);

    expect(container.firstChild).toHaveClass('is-hidden');
  });
});
