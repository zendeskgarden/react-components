/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledHint } from './StyledHint';

describe('StyledHint', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledHint />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledHint />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
