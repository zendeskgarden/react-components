/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledBlockquote } from './StyledBlockquote';

describe('StyledBlockquote', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledBlockquote />);

    expect(container.firstChild!.nodeName).toBe('BLOCKQUOTE');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledBlockquote />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
