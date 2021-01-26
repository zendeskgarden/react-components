/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledSaturationWhite } from './StyledSaturationWhite';

describe('StyledSaturationWhite', () => {
  it('renders default style', () => {
    const { container } = render(<StyledSaturationWhite />);

    expect(container.firstChild).toHaveStyleRule(
      'background',
      'linear-gradient( to right, #fff, rgba(255,255,255,0) )'
    );
  });

  it('renders RTL correctly', () => {
    const { container } = renderRtl(<StyledSaturationWhite />);

    expect(container.firstChild).toHaveStyleRule(
      'background',
      'linear-gradient( to left, #fff, rgba(255,255,255,0) )'
    );
  });
});
