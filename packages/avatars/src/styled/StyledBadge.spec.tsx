/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledBadge } from './StyledBadge';

describe('StyledBadge', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledBadge />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledBadge />);

    expect(container.firstChild).toHaveStyleRule('left', '-7px');
  });
});
