/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { StyledSheet } from './StyledSheet';

describe('StyledSheet', () => {
  it('renders correctly in rtl mode', () => {
    const { getByRole } = renderRtl(<StyledSheet placement="end" />);

    expect(getByRole('complementary')).toHaveStyleRule('border-right', '1px solid transparent');
  });

  it('renders default styling correctly', () => {
    const { getByRole } = render(<StyledSheet placement="end" />);

    const aside = getByRole('complementary');

    expect(aside).toHaveStyleRule('width', '0px');
    expect(aside).toHaveStyleRule('border-left', '1px solid transparent');
  });

  it('renders correctly when placement is set to "start"', () => {
    const { getByRole } = render(<StyledSheet placement="start" />);

    expect(getByRole('complementary')).toHaveStyleRule('border-right', '1px solid transparent');
  });

  it('renders styling correctly when open', () => {
    const sheetSize = '200px';
    const { getByRole } = render(<StyledSheet size={sheetSize} isOpen />);

    const aside = getByRole('complementary');

    expect(aside).toHaveStyleRule('width', sheetSize);
  });

  it('renders styling correctly when animated', () => {
    const { getByRole } = render(<StyledSheet isAnimated />);

    const aside = getByRole('complementary');

    expect(aside).toHaveStyleRule('transition', 'width 250ms ease-in-out');
  });
});
