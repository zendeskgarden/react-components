/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledTextarea from './StyledTextarea';

describe('StyledTextarea', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextarea />);

    expect(container.firstChild).toHaveClass('c-txt__input--area');
  });

  it('renders resizable styling correctly', () => {
    const { container } = render(<StyledTextarea resizable />);

    expect(container.firstChild).toHaveClass('is-resizable');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledTextarea />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
