/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, getRenderFn } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';
import { Type } from '../types';

describe('StyledBase', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[100] },
    { mode: 'dark', type: 'success', color: PALETTE.green[1000] },
    { mode: 'light', type: 'error', color: PALETTE.red[100] },
    { mode: 'dark', type: 'error', color: PALETTE.red[1000] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[100] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[1000] },
    { mode: 'light', type: 'info', color: PALETTE.grey[100] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[1000] }
  ])('renders $mode mode $type background colors', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledBase $type={type} />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[300] },
    { mode: 'dark', type: 'success', color: PALETTE.green[800] },
    { mode: 'light', type: 'error', color: PALETTE.red[300] },
    { mode: 'dark', type: 'error', color: PALETTE.red[800] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[300] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[800] },
    { mode: 'light', type: 'info', color: PALETTE.grey[300] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[800] }
  ])('renders $mode mode $type border colors', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledBase $type={type} />);

    expect(container.firstChild).toHaveStyleRule('border-color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[700] },
    { mode: 'dark', type: 'success', color: PALETTE.green[400] },
    { mode: 'light', type: 'error', color: PALETTE.red[700] },
    { mode: 'dark', type: 'error', color: PALETTE.red[400] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'light', type: 'info', color: PALETTE.grey[700] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[500] }
  ])('renders $mode mode $type foreground colors', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledBase $type={type} />);

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it('renders neutral colors given no type', () => {
    const { container } = render(<StyledBase />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.grey[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.white as string);
  });

  it('renders floating styling correctly', () => {
    const { container } = render(<StyledBase $isFloating />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });
});
