/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheetFooter } from './StyledSheetFooter';

describe('StyledSheetFooter', () => {
  it('renders default styling', () => {
    render(<StyledSheetFooter />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toHaveStyleRule('justify-content', 'flex-end');
    expect(footer).toHaveStyleRule('padding', `${DEFAULT_THEME.space.base * 5}px`);
  });

  it('renders compact styling when provided', () => {
    render(<StyledSheetFooter isCompact />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toHaveStyleRule('justify-content', 'center');
    expect(footer).toHaveStyleRule('padding', `${DEFAULT_THEME.space.base * 2.5}px`);
  });
});
