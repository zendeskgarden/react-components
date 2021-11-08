/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheetFooter } from './StyledSheetFooter';

describe('StyledSheetFooter', () => {
  it('renders correctly in rtl mode', () => {
    const { getByText } = renderRtl(<StyledSheetFooter>footer</StyledSheetFooter>);

    const footer = getByText('footer');

    expect(footer).toHaveStyleRule('flex-flow', 'row wrap');
  });

  it('renders correctly when isCompact is true', () => {
    const { getByText } = renderRtl(<StyledSheetFooter isCompact>footer</StyledSheetFooter>);

    const footer = getByText('footer');

    expect(footer).toHaveStyleRule('justify-content', 'center');
    expect(footer).toHaveStyleRule('padding', `${DEFAULT_THEME.space.base * 2.5}px`);
  });
});
