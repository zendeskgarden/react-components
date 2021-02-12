/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledColorWellGradient } from './StyledColorWell';

describe('StyledColorWellGradient', () => {
  it('renders default style', () => {
    const { container } = render(<StyledColorWellGradient />);

    expect(container.firstChild).toHaveStyleRule(
      'background',
      'linear-gradient( 0deg, #000, rgba(0,0,0,0.9) 1%, transparent 99% ), linear-gradient( 90deg, #fff 1%, rgba(0,0,0,0) )'
    );
  });

  it('renders RTL correctly', () => {
    const { container } = renderRtl(<StyledColorWellGradient />);

    expect(container.firstChild).toHaveStyleRule(
      'background',
      'linear-gradient( 0deg, #000, rgba(0,0,0,0.9) 1%, transparent 99% ), linear-gradient( -90deg, #fff 1%, rgba(0,0,0,0) )'
    );
  });
});
