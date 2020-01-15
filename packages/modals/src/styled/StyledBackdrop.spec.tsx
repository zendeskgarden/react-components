/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledBackdrop } from './StyledBackdrop';

describe('StyledBackdrop', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledBackdrop />);

    expect(container.firstChild).toHaveClass('l-backdrop');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledBackdrop />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders center styling if provided', () => {
    const { container } = render(<StyledBackdrop isCentered />);

    expect(container.firstChild).toHaveClass('l-backdrop--center');
  });

  it('renders animation styling if provided', () => {
    const { container } = render(<StyledBackdrop isAnimated />);

    expect(container.firstChild).toHaveClass('is-visible');
  });
});
