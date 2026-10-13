/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, getLineHeight, PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import React from 'react';

import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

describe('StyledBreadcrumbItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledBreadcrumbItem />);
    const lineHeight = getLineHeight(DEFAULT_THEME.space.md, DEFAULT_THEME.fontSizes.md);

    expect(container.firstChild).toHaveStyleRule('line-height', lineHeight.toString());
    expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
    expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
  });

  it('renders current styling', () => {
    const { container } = render(<StyledBreadcrumbItem $isCurrent />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[700]);
  });
});
