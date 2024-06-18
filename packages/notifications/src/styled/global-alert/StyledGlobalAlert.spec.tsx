/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

import { Type } from '../../types';
import { StyledGlobalAlert } from './StyledGlobalAlert';

describe('StyledGlobalAlert', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[700] },
    { mode: 'dark', type: 'success', color: PALETTE.green[700] },
    { mode: 'light', type: 'error', color: PALETTE.red[700] },
    { mode: 'dark', type: 'error', color: PALETTE.red[700] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[300] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[300] },
    { mode: 'light', type: 'info', color: PALETTE.blue[300] },
    { mode: 'dark', type: 'info', color: PALETTE.blue[300] }
  ])('renders $mode mode $type background color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[100] },
    { mode: 'dark', type: 'success', color: PALETTE.green[100] },
    { mode: 'light', type: 'error', color: PALETTE.red[100] },
    { mode: 'dark', type: 'error', color: PALETTE.red[100] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[800] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[800] },
    { mode: 'light', type: 'info', color: PALETTE.blue[800] },
    { mode: 'dark', type: 'info', color: PALETTE.blue[800] }
  ])('renders $mode mode $type foreground color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[800] },
    { mode: 'dark', type: 'success', color: PALETTE.green[800] },
    { mode: 'light', type: 'error', color: PALETTE.red[800] },
    { mode: 'dark', type: 'error', color: PALETTE.red[800] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'light', type: 'info', color: PALETTE.blue[400] },
    { mode: 'dark', type: 'info', color: PALETTE.blue[400] }
  ])('renders $mode mode $type border color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `0 ${DEFAULT_THEME.borderWidths.sm} ${DEFAULT_THEME.borderWidths.sm} ${color}`
    );
  });
});
