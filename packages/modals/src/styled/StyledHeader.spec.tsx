/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledHeader } from './StyledHeader';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

describe('StyledHeader', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledHeader />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.foreground);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledHeader isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[600]);
  });
});
