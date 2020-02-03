/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledFooter } from './StyledFooter';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

describe('StyledFooter', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledFooter />);

    expect(container.firstChild).not.toHaveStyleRule('border-top');
    expect(container.firstChild).not.toHaveStyleRule('padding');
  });

  it('renders large styling if provided', () => {
    const { container } = render(<StyledFooter isLarge />);

    expect(container.firstChild).toHaveStyleRule(
      'border-top',
      `${DEFAULT_THEME.borders.sm} ${PALETTE.grey[200]}`
    );
    expect(container.firstChild).toHaveStyleRule('padding', '32px 40px');
  });
});
