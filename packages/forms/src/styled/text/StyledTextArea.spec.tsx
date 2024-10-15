/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledTextarea } from './StyledTextarea';

describe('StyledTextarea', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTextarea />);

    expect(container.firstChild!.nodeName).toBe('TEXTAREA');
  });

  it('renders resizable styling if provided', () => {
    const { container } = render(<StyledTextarea $isResizable />);

    expect(container.firstChild).toHaveStyleRule('resize', 'vertical');
  });

  it('renderes expected RTL styling', () => {
    const { container } = renderRtl(<StyledTextarea />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
