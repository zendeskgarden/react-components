/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledSeparatorContainer } from './StyledSeparatorContainer';

describe('StyledSeparatorContainer', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledSeparatorContainer />);

    expect(container.firstChild).toHaveStyleRule('height', '100%');
  });
  it('renders rtl styling correctly', () => {
    const { container } = renderRtl(<StyledSeparatorContainer />);

    expect(container.firstChild).toHaveStyleRule('margin-right', '-4px');
  });
  it('renders horizontal styling correctly', () => {
    const { container } = render(<StyledSeparatorContainer isHorizontal />);

    expect(container.firstChild).toHaveStyleRule('margin-top', '-4px');
  });
});
