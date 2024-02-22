/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledNavigation } from './StyledNavigation';

describe('StyledNavigation', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledNavigation />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledNavigation />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});
