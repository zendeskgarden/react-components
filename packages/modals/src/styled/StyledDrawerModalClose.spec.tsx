/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledDrawerModalClose } from './StyledDrawerModalClose';

describe('StyledDrawerModalClose', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledDrawerModalClose />);

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('right', '8px');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledDrawerModalClose />);

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('left', '8px');
  });
});
