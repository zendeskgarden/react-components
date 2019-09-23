/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledRangeHint from './StyledRangeHint';

describe('StyledRangeHint', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledRangeHint />);

    expect(container.firstChild).toHaveClass('c-range__hint');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledRangeHint small />);

    expect(container.firstChild).toHaveClass('c-range__hint--sm');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledRangeHint />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
