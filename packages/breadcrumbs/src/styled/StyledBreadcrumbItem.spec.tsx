/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { stripUnit } from 'polished';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

describe('StyledBreadcrumbItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledBreadcrumbItem />);
    const lineHeight = (DEFAULT_THEME.space.base * 5) / stripUnit(DEFAULT_THEME.fontSizes.md);

    expect(container.firstChild).toHaveStyleRule('line-height', lineHeight.toString());
    expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
    expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
  });

  it('renders current styling', () => {
    const { container } = render(<StyledBreadcrumbItem isCurrent />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      getColor(DEFAULT_THEME.colors.neutralHue, 600)
    );
  });
});
