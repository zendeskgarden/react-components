/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Type } from '../../types';
import { StyledGlobalAlertTitle } from './StyledGlobalAlertTitle';

describe('StyledGlobalAlertTitle', () => {
  it('renders default styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle $alertType="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-right', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByText } = renderRtl(
      <StyledGlobalAlertTitle $alertType="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
  });

  it('renders "isRegular" styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle $isRegular $alertType="info">
        title
      </StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '400');
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.white },
    { type: 'error', color: PALETTE.white },
    { type: 'warning', color: PALETTE.yellow[900] },
    { type: 'info', color: PALETTE.blue[900] }
  ])('renders $type color', ({ type, color }) => {
    const { getByText } = render(
      <StyledGlobalAlertTitle $alertType={type}>title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('color', color);
  });
});
