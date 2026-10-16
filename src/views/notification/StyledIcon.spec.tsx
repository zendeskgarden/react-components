/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { getRenderFn } from 'garden-test-utils';
import React from 'react';

import { Type } from '../types';
import { StyledIcon } from './StyledIcon';

describe('StyledIcon', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[700] },
    { mode: 'dark', type: 'success', color: PALETTE.green[400] },
    { mode: 'light', type: 'error', color: PALETTE.red[700] },
    { mode: 'dark', type: 'error', color: PALETTE.red[400] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'light', type: 'info', color: PALETTE.grey[700] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[500] }
  ])('renders $mode mode $type color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledIcon $type={type}>
        <XStrokeIcon />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
