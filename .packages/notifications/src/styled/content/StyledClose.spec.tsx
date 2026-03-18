/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import { getRenderFn, render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { Type } from '../../types';
import { StyledClose } from './StyledClose';

describe('StyledClose', () => {
  it('should render with the correct styling for RTL writing systems', () => {
    const { container } = renderRtl(
      <StyledClose>
        <XStrokeIcon />
      </StyledClose>
    );

    expect(container.firstChild).toHaveStyleRule('left', '4px');
    expect(container.firstChild).not.toHaveStyleRule('right');
  });

  it('should render with the correct styling for LTR writing systems', () => {
    const { container } = render(
      <StyledClose>
        <XStrokeIcon />
      </StyledClose>
    );

    expect(container.firstChild).toHaveStyleRule('right', '4px');
    expect(container.firstChild).not.toHaveStyleRule('left');
  });

  it.each([
    ['light', PALETTE.grey[700]],
    ['dark', PALETTE.grey[500]]
  ])('should render %s mode neutral color given no type', (mode, color) => {
    const { container } = getRenderFn(mode)(
      <StyledClose>
        <XStrokeIcon />
      </StyledClose>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ type: Type; mode: 'light' | 'dark'; color: string }>([
    { type: 'success', mode: 'light', color: PALETTE.green[700] },
    { type: 'success', mode: 'dark', color: PALETTE.green[400] },
    { type: 'error', mode: 'light', color: PALETTE.red[700] },
    { type: 'error', mode: 'dark', color: PALETTE.red[400] },
    { type: 'warning', mode: 'light', color: PALETTE.yellow[700] },
    { type: 'warning', mode: 'dark', color: PALETTE.yellow[400] }
  ])('should render the correct $mode mode color given type "$type"', ({ type, mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledClose $type={type}>
        <XStrokeIcon />
      </StyledClose>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });
});
