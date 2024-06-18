/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { getRenderFn, render } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { Type } from '../../types';
import { StyledGlobalAlertClose } from './StyledGlobalAlertClose';

describe('StyledGlobalAlertClose', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[100]) },
    { mode: 'dark', type: 'success', color: rgba(PALETTE.green[1000], DEFAULT_THEME.opacity[100]) },
    { mode: 'light', type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[100]) },
    { mode: 'dark', type: 'error', color: rgba(PALETTE.red[1000], DEFAULT_THEME.opacity[100]) },
    {
      mode: 'light',
      type: 'warning',
      color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[100])
    },
    { mode: 'dark', type: 'warning', color: rgba(PALETTE.yellow[600], DEFAULT_THEME.opacity[100]) },
    { mode: 'light', type: 'info', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]) },
    { mode: 'dark', type: 'info', color: rgba(PALETTE.blue[600], DEFAULT_THEME.opacity[100]) }
  ])('renders $mode mode $type hover background color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledGlobalAlertClose $alertType={type}>
        <XStrokeIcon />
      </StyledGlobalAlertClose>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&:hover'
    });
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', type: 'success', color: rgba(PALETTE.green[1000], DEFAULT_THEME.opacity[200]) },
    { mode: 'light', type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', type: 'error', color: rgba(PALETTE.red[1000], DEFAULT_THEME.opacity[200]) },
    {
      mode: 'light',
      type: 'warning',
      color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[200])
    },
    { mode: 'dark', type: 'warning', color: rgba(PALETTE.yellow[600], DEFAULT_THEME.opacity[200]) },
    { mode: 'light', type: 'info', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', type: 'info', color: rgba(PALETTE.blue[600], DEFAULT_THEME.opacity[200]) }
  ])('renders $mode mode $type active background color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledGlobalAlertClose $alertType={type}>
        <XStrokeIcon />
      </StyledGlobalAlertClose>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&:active'
    });
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(
        <StyledGlobalAlertClose $alertType="success">
          <XStrokeIcon />
        </StyledGlobalAlertClose>
      );

      expect(container.firstChild).toHaveAttribute(
        'data-garden-id',
        'notifications.global_alert.close'
      );
    });
  });
});
