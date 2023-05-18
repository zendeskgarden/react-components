/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, getFocusBoxShadow } from '@zendeskgarden/react-theming';
import { StyledHeader } from './StyledHeader';

describe('StyledHeader', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledHeader />);

    expect(container.firstChild).not.toHaveStyleRule('box-shadow');
  });

  it('renders focus styling correctly', () => {
    const { container } = render(<StyledHeader isFocused />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      getFocusBoxShadow({ theme: DEFAULT_THEME, inset: true })
        // normalize string output to match
        .split(',')
        .map(str => str.trim())
        .join(', '),
      {
        modifier: '&:focus-within'
      }
    );
  });
});
