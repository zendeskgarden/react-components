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

  it('renders correctly when placement is set', () => {
    const { getByRole } = render(<StyledSheet placement="start" />);

    expect(getByRole('complementary')).toHaveStyleRule('border-right', '1px solid transparent');
  });
});
