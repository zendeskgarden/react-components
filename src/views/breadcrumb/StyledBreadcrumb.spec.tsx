/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledBreadcrumb } from './StyledBreadcrumb';

describe('StyledBreadcrumb', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledBreadcrumb />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin', '0');
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('list-style', 'none');
    expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledBreadcrumb />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
