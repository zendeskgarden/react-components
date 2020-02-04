/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledClose } from './StyledClose';

describe('StyledClose', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledClose />);

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('right', '20px');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledClose />);

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('left', '20px');
  });
});
