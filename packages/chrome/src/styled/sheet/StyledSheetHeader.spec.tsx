/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl } from 'garden-test-utils';

import { StyledSheetHeader } from './StyledSheetHeader';

describe('StyledSheetHeader', () => {
  it('renders correctly in rtl mode', () => {
    const { getByText } = renderRtl(<StyledSheetHeader>header</StyledSheetHeader>);

    const header = getByText('header');

    expect(header).toHaveStyleRule('text-align', 'right');
    expect(header).toHaveStyleRule('flex-flow', 'row-reverse wrap');
  });
});
