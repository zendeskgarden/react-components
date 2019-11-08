/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { StyledTabs } from './StyledTabs';

describe('TabsView', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledTabs />);

    expect(container.firstChild).toHaveClass('c-tab');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledTabs />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders vertical styling', () => {
    const { container } = render(<StyledTabs isVertical />);

    expect(container.firstChild).toHaveClass('c-tab--block');
  });
});
