/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledEllipsis } from './StyledEllipsis';

describe('StyledEllipsis', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledEllipsis />);

    expect(container.firstChild).toHaveStyleRule('text-overflow', 'ellipsis');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledEllipsis />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
