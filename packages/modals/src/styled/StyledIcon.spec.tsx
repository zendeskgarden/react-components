/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';

describe('StyledIcon', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledIcon />);

    expect(container.firstChild).toHaveStyleRule('left', '16px');
    expect(container.firstChild).toHaveStyleRule('right');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledIcon />);

    expect(container.firstChild).toHaveStyleRule('right', '16px');
    expect(container.firstChild).toHaveStyleRule('left');
  });
});
