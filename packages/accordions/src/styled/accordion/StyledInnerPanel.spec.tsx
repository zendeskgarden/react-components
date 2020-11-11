/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledInnerPanel } from './StyledInnerPanel';

describe('StyledInnerPanel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledInnerPanel />);

    expect(container.firstChild).toHaveStyleRule('max-height', '0 !important');
    expect(container.firstChild).toHaveStyleRule('transition', 'max-height 0.25s ease-in-out');
  });

  it('renders isExpanded styling correctly', () => {
    const { container } = render(<StyledInnerPanel isExpanded />);

    expect(container.firstChild).not.toHaveStyleRule('max-height');
  });

  it('renders isAnimated styling correctly', () => {
    const { container } = render(<StyledInnerPanel isAnimated={false} />);

    expect(container.firstChild).not.toHaveStyleRule('transition');
  });
});
