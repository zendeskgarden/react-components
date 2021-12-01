/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl, render, screen } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheetFooterItem } from './StyledSheetFooterItem';

describe('StyledSheetFooterItem', () => {
  const footerItemText = 'StyledSheetFooterItem';

  it('renders default styling', () => {
    render(<StyledSheetFooterItem>{footerItemText}</StyledSheetFooterItem>);

    expect(screen.getByText(footerItemText)).toHaveStyleRule(
      'margin-left',
      `${DEFAULT_THEME.space.base * 5}px`
    );
  });

  it('renders correctly in rtl mode', () => {
    renderRtl(<StyledSheetFooterItem>{footerItemText}</StyledSheetFooterItem>);

    expect(screen.getByText(footerItemText)).toHaveStyleRule(
      'margin-right',
      `${DEFAULT_THEME.space.base * 5}px`
    );
  });
});
