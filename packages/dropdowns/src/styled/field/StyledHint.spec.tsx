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
  it('renders default styling', () => {
    const { container } = render(<StyledHint />);

    expect(container.firstChild).toHaveClass('c-txt__hint');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledHint />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders small styling', () => {
    const { container } = render(<StyledHint isCompact />);

    expect(container.firstChild).toHaveClass('c-txt__hint--sm');
  });
});
