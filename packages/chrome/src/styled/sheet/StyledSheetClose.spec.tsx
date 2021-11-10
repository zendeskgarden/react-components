/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSheetClose } from './StyledSheetClose';

describe('StyledSheetClose', () => {
  it('renders correctly in rtl mode', () => {
    const { getByText } = renderRtl(<StyledSheetClose>btn</StyledSheetClose>);

    expect(getByText('btn')).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 2}px`);
  });
});
