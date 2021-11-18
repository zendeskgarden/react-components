/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl, render, screen } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheetClose } from './StyledSheetClose';

describe('StyledSheetClose', () => {
  it('renders default styling', () => {
    render(<StyledSheetClose />);

    expect(screen.getByRole('button')).toHaveStyleRule(
      'right',
      `${DEFAULT_THEME.space.base * 2}px`
    );
  });

  it('renders correctly in rtl mode', () => {
    renderRtl(<StyledSheetClose />);

    expect(screen.getByRole('button')).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 2}px`);
  });
});
