/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

import { Type } from '../../types';
import { StyledGlobalAlert } from './StyledGlobalAlert';

describe('StyledGlobalAlert', () => {
  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[700] },
    { type: 'error', color: PALETTE.red[700] },
    { type: 'warning', color: PALETTE.yellow[300] },
    { type: 'info', color: PALETTE.blue[300] }
  ])('renders $mode mode $type background color', ({ type, color }) => {
    const { container } = render(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[100] },
    { type: 'error', color: PALETTE.red[100] },
    { type: 'warning', color: PALETTE.yellow[800] },
    { type: 'info', color: PALETTE.blue[800] }
  ])('renders $mode mode $type foreground color', ({ type, color }) => {
    const { container } = render(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[800] },
    { type: 'error', color: PALETTE.red[800] },
    { type: 'warning', color: PALETTE.yellow[400] },
    { type: 'info', color: PALETTE.blue[400] }
  ])('renders $mode mode $type border color', ({ type, color }) => {
    const { container } = render(<StyledGlobalAlert $alertType={type} />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `inset 0 -${DEFAULT_THEME.borderWidths.sm} 0 ${color}`
    );
  });
});
