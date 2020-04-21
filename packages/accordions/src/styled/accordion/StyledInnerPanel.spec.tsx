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
  });

  it('renders isExpanded styling correctly', () => {
    const { container } = render(<StyledInnerPanel isExpanded />);

    expect(container.firstChild).not.toHaveStyleRule('max-height');
  });
});
