/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledPagination } from './StyledPagination';

describe('StyledPagination', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledPagination />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledPagination />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledPagination />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
