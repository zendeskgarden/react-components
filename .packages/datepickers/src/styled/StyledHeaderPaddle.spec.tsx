/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import { getRenderFn } from 'garden-test-utils';
import { rgba } from 'polished';
import React from 'react';

import { StyledHeaderPaddle } from './StyledHeaderPaddle';

describe('StyledHeaderPaddle', () => {
  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[700] },
    { mode: 'dark', color: PALETTE.grey[500] }
  ])('uses correct $mode mode default foreground color', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledHeaderPaddle $isCompact={false}>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[800] },
    { mode: 'dark', color: PALETTE.grey[400] }
  ])('uses correct $mode mode foreground color on hover', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledHeaderPaddle $isCompact={false}>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('color', color, { modifier: ':hover' });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[900] },
    { mode: 'dark', color: PALETTE.grey[300] }
  ])('uses correct $mode mode foreground color on active', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledHeaderPaddle $isCompact={false}>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('color', color, { modifier: ':active' });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]) },
    { mode: 'dark', color: rgba(PALETTE.blue[600], DEFAULT_THEME.opacity[100]) }
  ])('uses correct $mode mode background color on hover', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledHeaderPaddle $isCompact={false}>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, { modifier: ':hover' });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', color: rgba(PALETTE.blue[600], DEFAULT_THEME.opacity[200]) }
  ])('uses correct $mode mode background color on active', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledHeaderPaddle $isCompact={false}>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: ':active'
    });
  });
});
