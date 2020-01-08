/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { StyledPage } from './StyledPage';

describe('StyledPage', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledPage />);

    expect(container.firstChild).toHaveClass('c-pagination__page');
  });

  it('renders current styling if provided', () => {
    const { container } = render(<StyledPage isCurrent />);

    expect(container.firstChild).toHaveClass('is-current');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<StyledPage isFocused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<StyledPage isHovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders hidden styling if provided', () => {
    const { container } = render(<StyledPage isHidden />);

    expect(container.firstChild).toHaveClass('is-hidden');
  });
});
