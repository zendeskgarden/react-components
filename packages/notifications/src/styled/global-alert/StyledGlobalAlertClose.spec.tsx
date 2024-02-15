/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { TYPE } from '../../types';
import { StyledGlobalAlertClose } from './StyledGlobalAlertClose';

describe('StyledGlobalAlertClose', () => {
  it.each(TYPE)('renders "%s" type', type => {
    const { getByRole } = render(
      <StyledGlobalAlertClose alertType={type}>
        <XStrokeIcon />
      </StyledGlobalAlertClose>
    );

    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      {
        success: getColor(DEFAULT_THEME.colors.successHue, 100, DEFAULT_THEME, 0.08),
        warning: getColor(DEFAULT_THEME.colors.warningHue, 800, DEFAULT_THEME, 0.08),
        error: getColor(DEFAULT_THEME.colors.dangerHue, 100, DEFAULT_THEME, 0.08),
        info: getColor(DEFAULT_THEME.colors.primaryHue, 700, DEFAULT_THEME, 0.08)
      }[type] as string,
      { modifier: '&:hover' }
    );
  });
});
