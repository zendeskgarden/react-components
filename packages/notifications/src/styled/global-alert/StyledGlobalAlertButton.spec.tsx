/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledGlobalAlertButton } from './StyledGlobalAlertButton';
import { colorStyles } from './StyledGlobalAlertClose';
import { Type } from '../../types';

jest.mock('./StyledGlobalAlertClose');

describe('StyledGlobalAlertButton', () => {
  it('uses basic styles', () => {
    render(<StyledGlobalAlertButton isBasic $alertType="info" />);

    expect(colorStyles).toHaveBeenCalledTimes(1);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[900] },
    { mode: 'dark', type: 'success', color: PALETTE.green[900] },
    { mode: 'light', type: 'error', color: PALETTE.red[900] },
    { mode: 'dark', type: 'error', color: PALETTE.red[900] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'light', type: 'info', color: PALETTE.blue[700] },
    { mode: 'dark', type: 'info', color: PALETTE.blue[700] }
  ])('renders $mode mode $type background color', ({ mode, type, color }) => {
    const { getByRole } = getRenderFn(mode)(
      <StyledGlobalAlertButton isPrimary $alertType={type} />
    );

    expect(getByRole('button')).toHaveStyleRule('background-color', color);
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledGlobalAlertButton $alertType="info" />);

      expect(container.firstChild).toHaveAttribute(
        'data-garden-id',
        'notifications.global_alert.button'
      );
    });
  });
});
