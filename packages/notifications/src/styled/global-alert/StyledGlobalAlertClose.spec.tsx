/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { Type } from '../../types';
import { StyledGlobalAlertClose } from './StyledGlobalAlertClose';

describe('StyledGlobalAlertClose', () => {
  it.each<{ type: Type; color: string }>([
    { type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[100]) },
    { type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[100]) },
    { type: 'warning', color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[100]) },
    { type: 'info', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]) }
  ])('renders $type hover background color', ({ type, color }) => {
    const { container } = render(
      <StyledGlobalAlertClose $alertType={type}>
        <XStrokeIcon />
      </StyledGlobalAlertClose>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&:hover'
    });
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: rgba(PALETTE.green[100], DEFAULT_THEME.opacity[200]) },
    { type: 'error', color: rgba(PALETTE.red[100], DEFAULT_THEME.opacity[200]) },
    { type: 'warning', color: rgba(PALETTE.yellow[700], DEFAULT_THEME.opacity[200]) },
    { type: 'info', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]) }
  ])('renders $type active background color', ({ type, color }) => {
    const { container } = render(
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
