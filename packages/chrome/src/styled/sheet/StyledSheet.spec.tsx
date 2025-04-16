/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';

import { StyledSheet } from './StyledSheet';

describe('StyledSheet', () => {
  it('renders correctly in rtl mode', () => {
    renderRtl(<StyledSheet $placement="end" />);

    expect(screen.getByRole('complementary')).toHaveStyleRule('border-right', 'none');
  });

  it('renders default styling correctly', () => {
    render(<StyledSheet $placement="end" />);

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyleRule('width', '0');
    expect(aside).toHaveStyleRule('border-left', 'none');
    expect(aside).not.toHaveStyleRule('transition', 'width 250ms ease-in-out');
  });

  it('renders correctly when placement is set to "start"', () => {
    render(<StyledSheet $placement="start" />);

    expect(screen.getByRole('complementary')).toHaveStyleRule('border-right', 'none');
  });

  it('renders styling correctly when open', () => {
    const sheetSize = '200px';

    render(<StyledSheet $size={sheetSize} $isOpen />);

    expect(screen.getByRole('complementary')).toHaveStyleRule('width', sheetSize);
  });

  it('renders styling correctly when animated', () => {
    render(<StyledSheet $isAnimated />);

    expect(screen.getByRole('complementary')).toHaveStyleRule(
      'transition',
      'width 250ms ease-in-out'
    );
  });
});
