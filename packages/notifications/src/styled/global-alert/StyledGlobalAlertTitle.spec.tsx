/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

import { TYPE } from '../../types';

import { StyledGlobalAlertTitle } from './StyledGlobalAlertTitle';

describe('StyledGlobalAlertTitle', () => {
  it('renders default styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle alertType="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-right', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByText } = renderRtl(
      <StyledGlobalAlertTitle alertType="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
  });

  it('renders "isRegular" styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle isRegular alertType="info">
        title
      </StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '400');
  });

  it.each(TYPE)('renders "%s" type', type => {
    const { getByText } = render(
      <StyledGlobalAlertTitle alertType={type}>title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule(
      'color',
      {
        success: DEFAULT_THEME.palette.white as string,
        warning: getColor('warningHue', 900, DEFAULT_THEME),
        error: DEFAULT_THEME.palette.white as string,
        info: getColor('primaryHue', 800, DEFAULT_THEME)
      }[type]
    );
  });
});
