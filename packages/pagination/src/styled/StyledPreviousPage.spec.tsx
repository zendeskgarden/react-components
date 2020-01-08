/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledPreviousPage } from './StyledPreviousPage';

describe('StyledPreviousPage', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledPreviousPage />);

    expect(container.firstChild).toHaveClass('c-pagination__page--previous');
  });
});
