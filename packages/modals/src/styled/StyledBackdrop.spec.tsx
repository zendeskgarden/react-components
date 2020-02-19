/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledBackdrop } from './StyledBackdrop';

describe('StyledBackdrop', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledBackdrop />);

    expect(container.firstChild).not.toHaveStyleRule('direction');
    expect(container.firstChild).not.toHaveStyleRule('align-items');
    expect(container.firstChild).not.toHaveStyleRule('justify-content');
    expect(container.firstChild).not.toHaveStyleRule('animation-duration', '0.15s');
    expect(container.firstChild).not.toHaveStyleRule('animation-timing-function', 'ease-in');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledBackdrop />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders center styling if provided', () => {
    const { container } = render(<StyledBackdrop isCentered />);

    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });
});
