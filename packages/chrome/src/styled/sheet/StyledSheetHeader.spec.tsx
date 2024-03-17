/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl, render, screen } from 'garden-test-utils';
import { DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

import { StyledSheetHeader } from './StyledSheetHeader';

describe('StyledSheetHeader', () => {
  it('renders default styling', () => {
    render(<StyledSheetHeader>Header</StyledSheetHeader>);

    expect(screen.getByText('Header')).toHaveStyleRule(
      'border-bottom',
      `${DEFAULT_THEME.borders.sm} ${getColorV8('neutralHue', 300, DEFAULT_THEME)}`
    );
  });

  it('renders correctly when button is present', () => {
    render(<StyledSheetHeader isCloseButtonPresent>Header</StyledSheetHeader>);

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-right',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });

  it('renders correctly in rtl mode when button is present', () => {
    renderRtl(<StyledSheetHeader isCloseButtonPresent>Header</StyledSheetHeader>);

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-left',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });
});
