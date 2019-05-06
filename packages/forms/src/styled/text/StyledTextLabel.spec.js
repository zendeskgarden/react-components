/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledTextLabel from './StyledTextLabel';

describe('StyledTextLabel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextLabel />);

    expect(container.firstChild).toHaveClass('c-txt__label');
  });

  it('renders regular styling correctly', () => {
    const { container } = render(<StyledTextLabel regular />);

    expect(container.firstChild).toHaveClass('c-txt__label--regular');
  });

  it('renders small styling correctly', () => {
    const { container } = render(<StyledTextLabel small />);

    expect(container.firstChild).toHaveClass('c-txt__label--sm');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledTextLabel />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
