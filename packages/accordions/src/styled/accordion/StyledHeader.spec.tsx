/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
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
      'inset 0 0 0 1px #fff, inset 0 0 0 3px #1f73b7',
      {
        modifier: '&:focus-within'
      }
    );
  });
});
