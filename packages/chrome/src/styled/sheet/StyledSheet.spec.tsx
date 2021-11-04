/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheet } from './StyledSheet';

describe('StyledSheet', () => {
  it('uses placement prop to apply smart border to the correct side', () => {
    const { getByRole } = render(<StyledSheet placement="start" />);

    expect(getByRole('complementary')).toHaveStyleRule(
      'border-right',
      `1px solid ${DEFAULT_THEME.palette.grey[300]}`
    );
  });
});
