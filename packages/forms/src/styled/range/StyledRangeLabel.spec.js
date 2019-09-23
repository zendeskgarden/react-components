/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledRangeLabel from './StyledRangeLabel';

describe('StyledRangeLabel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledRangeLabel />);

    expect(container.firstChild).toHaveClass('c-range__label');
  });

  it('renders regular styling correctly', () => {
    const { container } = render(<StyledRangeLabel regular />);

    expect(container.firstChild).toHaveClass('c-range__label--regular');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledRangeLabel small />);

    expect(container.firstChild).toHaveClass('c-range__label--sm');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledRangeLabel />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
