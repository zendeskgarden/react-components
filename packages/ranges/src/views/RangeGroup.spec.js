/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import RangeGroup from './RangeGroup';

describe('RangeGroup', () => {
  it('renders default styling', () => {
    const { container } = render(<RangeGroup />);

    expect(container.firstChild).toHaveClass('c-range');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<RangeGroup />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders inline styling if provided', () => {
    const { container } = render(<RangeGroup inline />);

    expect(container.firstChild).toHaveClass('c-range--inline');
  });
});
