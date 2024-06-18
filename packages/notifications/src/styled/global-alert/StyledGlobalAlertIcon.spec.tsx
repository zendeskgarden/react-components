/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Type } from '../../types';
import { StyledGlobalAlertIcon } from './StyledGlobalAlertIcon';
import InfoIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';

describe('StyledGlobalAlertIcon', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[300] },
    { mode: 'dark', type: 'success', color: PALETTE.green[300] },
    { mode: 'light', type: 'error', color: PALETTE.red[300] },
    { mode: 'dark', type: 'error', color: PALETTE.red[300] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'light', type: 'info', color: PALETTE.blue[700] },
    { mode: 'dark', type: 'info', color: PALETTE.blue[700] }
  ])('renders $mode mode $type color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledGlobalAlertIcon $alertType={type}>
        <InfoIcon />
      </StyledGlobalAlertIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
