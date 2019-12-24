/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledWell } from './StyledWell';

describe('StyledWell', () => {
  it('renders default well styling', () => {
    const { container } = render(<StyledWell />);

    expect(container.firstChild).toHaveClass('c-callout');
  });

  it('renders with RTL styling if applied', () => {
    const { container } = renderRtl(<StyledWell />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders recessed styling correctly', () => {
    const { container } = render(<StyledWell isRecessed />);

    expect(container.firstChild).toHaveClass('c-callout--recessed');
  });

  it('renders floating styling correctly', () => {
    const { container } = render(<StyledWell isFloating />);

    expect(container.firstChild).toHaveClass('c-callout--dialog');
  });
});
