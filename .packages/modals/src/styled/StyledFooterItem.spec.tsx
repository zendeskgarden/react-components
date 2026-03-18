/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledFooterItem } from './StyledFooterItem';

describe('StyledFooterItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledFooterItem />);

    expect(container.firstChild).toHaveStyleRule('margin-left', '20px');
    expect(container.firstChild).not.toHaveStyleRule('margin-right');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledFooterItem />);

    expect(container.firstChild).toHaveStyleRule('margin-right', '20px');
    expect(container.firstChild).not.toHaveStyleRule('margin-left');
  });
});
