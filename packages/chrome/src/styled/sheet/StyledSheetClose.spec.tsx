/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import Icon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { renderRtl, render, screen } from 'garden-test-utils';
import React from 'react';

import { StyledSheetClose } from './StyledSheetClose';

describe('StyledSheetClose', () => {
  it('renders default styling', () => {
    render(
      <StyledSheetClose>
        <Icon />
      </StyledSheetClose>
    );

    expect(screen.getByRole('button')).toHaveStyleRule(
      'right',
      `${DEFAULT_THEME.space.base * 2}px`
    );
  });

  it('renders correctly in rtl mode', () => {
    renderRtl(
      <StyledSheetClose>
        <Icon />
      </StyledSheetClose>
    );

    expect(screen.getByRole('button')).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 2}px`);
  });
});
