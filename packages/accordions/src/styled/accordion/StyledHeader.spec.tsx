/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledHeader } from './StyledHeader';

describe('StyledHeader', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledHeader />);

    expect(container.firstChild).not.toHaveStyleRule('box-shadow');
  });

  it('renders isFocused styling correctly', () => {
    const { container } = render(<StyledHeader isFocused />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `${DEFAULT_THEME.shadows.md(
        getColor('primaryHue', 600, DEFAULT_THEME, 0.35) as string
      )} inset`
    );
  });
});
