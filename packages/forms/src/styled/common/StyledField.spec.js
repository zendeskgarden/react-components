/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledField from './StyledField';

describe('StyledField', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledField />);

    expect(container.firstChild).toHaveClass('c-txt');
    expect(container.firstChild).toHaveClass('c-range');
  });

  it('renders inline styling correctly', () => {
    const { container } = render(<StyledField inline />);

    expect(container.firstChild).toHaveClass('c-txt--inline');
    expect(container.firstChild).toHaveClass('c-range--inline');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledField />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
