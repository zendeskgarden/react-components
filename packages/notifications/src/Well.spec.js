/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import Well from './Well';

describe('Well', () => {
  it('renders default well styling', () => {
    const { container } = render(<Well />);

    expect(container.firstChild).toHaveClass('c-callout');
  });

  it('renders with RTL styling if applied', () => {
    const { container } = renderRtl(<Well />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders recessed styling correctly', () => {
    const { container } = render(<Well recessed />);

    expect(container.firstChild).toHaveClass('c-callout--recessed');
  });

  it('renders floating styling correctly', () => {
    const { container } = render(<Well floating />);

    expect(container.firstChild).toHaveClass('c-callout--dialog');
  });
});
