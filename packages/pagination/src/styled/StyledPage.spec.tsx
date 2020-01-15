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

  it('renders hidden styling if provided', () => {
    const { container } = render(<StyledPage hidden />);

    expect(container.firstChild).toHaveClass('is-hidden');
  });
});
