/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import StyledRangeSingleThumb from './StyledRangeSingleThumb';

describe('SingleThumbView', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledRangeSingleThumb />);

    expect(container.firstChild).toHaveClass('c-range__input');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledRangeSingleThumb />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<StyledRangeSingleThumb disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<StyledRangeSingleThumb focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<StyledRangeSingleThumb hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders background-size correctly', () => {
    const { container } = render(<StyledRangeSingleThumb backgroundSize="95%" />);

    expect(container.firstChild).toHaveStyleRule('background-size', '95%', {
      modifier: '&&'
    });
  });
});
