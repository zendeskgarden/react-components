/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

import { StyledDrawerModalHeader } from './StyledDrawerModalHeader';

describe('StyledDrawerModalHeader', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledDrawerModalHeader />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.foreground);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledDrawerModalHeader isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[600]);
  });

  it('renders correctly when button is present', () => {
    render(<StyledDrawerModalHeader isCloseButtonPresent>Header</StyledDrawerModalHeader>);

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-right',
      `${DEFAULT_THEME.space.base * 14.5}px`
    );
  });

  it('renders correctly in rtl mode when button is present', () => {
    renderRtl(<StyledDrawerModalHeader isCloseButtonPresent>Header</StyledDrawerModalHeader>);

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-left',
      `${DEFAULT_THEME.space.base * 14.5}px`
    );
  });
});
