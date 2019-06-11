/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import PaginationView from './PaginationView';

describe('PaginationView', () => {
  it('renders default styling', () => {
    const { container } = render(<PaginationView />);

    expect(container.firstChild).toHaveClass('c-pagination');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<PaginationView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
