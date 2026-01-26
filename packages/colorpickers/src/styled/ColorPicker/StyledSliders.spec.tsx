/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledSliders } from './StyledSliders';

describe('StyledSliders', () => {
  it('renders default style', () => {
    const { container } = render(<StyledSliders />);

    expect(container.firstChild).toHaveStyleRule('margin-left', '8px');
    expect(container.firstChild).not.toHaveStyleRule('margin-right');
  });

  it('renders RTL correctly', () => {
    const { container } = renderRtl(<StyledSliders />);

    expect(container.firstChild).toHaveStyleRule('margin-right', '8px');
    expect(container.firstChild).not.toHaveStyleRule('margin-left');
  });
});
