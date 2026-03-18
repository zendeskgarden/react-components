/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import InfoIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { render } from 'garden-test-utils';
import React from 'react';

import { Type } from '../../types';
import { StyledGlobalAlertIcon } from './StyledGlobalAlertIcon';

describe('StyledGlobalAlertIcon', () => {
  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[300] },
    { type: 'error', color: PALETTE.red[300] },
    { type: 'warning', color: PALETTE.yellow[700] },
    { type: 'info', color: PALETTE.blue[700] }
  ])('renders $type color', ({ type, color }) => {
    const { container } = render(
      <StyledGlobalAlertIcon $alertType={type}>
        <InfoIcon />
      </StyledGlobalAlertIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
