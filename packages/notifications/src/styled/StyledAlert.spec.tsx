/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { PALETTE } from '@zendeskgarden/react-theming';
import { getRenderFn } from 'garden-test-utils';
import { StyledAlert, StyledTitle } from '../styled';
import { Type } from '../types';

describe('StyledAlert', () => {
  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[900] },
    { mode: 'dark', type: 'success', color: PALETTE.green[300] },
    { mode: 'light', type: 'error', color: PALETTE.red[900] },
    { mode: 'dark', type: 'error', color: PALETTE.red[300] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[900] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[300] },
    { mode: 'light', type: 'info', color: PALETTE.grey[900] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[300] }
  ])('renders correct $mode type $type title color', ({ mode, type, color }) => {
    const { container } = getRenderFn(mode)(<StyledAlert $type={type} />);

    expect(container.firstChild).toHaveStyleRule('color', color, {
      modifier: css`
        ${StyledTitle}
      ` as any
    });
  });
});
