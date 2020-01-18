/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledModal } from './StyledModal';

describe('StyledModal', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledModal />);

    expect(container.firstChild).toHaveClass('c-dialog');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledModal />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders large styling if provided', () => {
    const { container } = render(<StyledModal isLarge />);

    expect(container.firstChild).toHaveClass('c-dialog--large');
  });

  it('renders animate styling if provided', () => {
    const { container } = render(<StyledModal isAnimated />);

    expect(container.firstChild).toHaveClass('is-open');
  });
});
