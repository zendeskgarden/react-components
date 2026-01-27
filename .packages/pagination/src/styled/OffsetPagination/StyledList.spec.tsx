/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledList } from './StyledList';

describe('StyledList', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledList />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledList />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledList />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
