/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { getRenderFn, render } from 'garden-test-utils';
import React from 'react';

import { StyledDay } from './StyledDay';

describe('StyledDay', () => {
  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.blue[700] },
    { mode: 'dark', color: PALETTE.blue[600] }
  ])('uses correct $mode mode default foreground color', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(<StyledDay $isCompact={false}>3</StyledDay>);

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[700] },
    { mode: 'dark', color: PALETTE.grey[500] }
  ])('uses correct $mode mode foreground color given $isPreviousMonth', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDay $isCompact={false} $isPreviousMonth>
        3
      </StyledDay>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[600] },
    { mode: 'dark', color: PALETTE.grey[700] }
  ])('uses correct $mode mode foreground color when disabled', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDay $isCompact={false} aria-disabled>
        3
      </StyledDay>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.white },
    { mode: 'dark', color: PALETTE.grey[1100] }
  ])('uses correct $mode mode foreground color when selected', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDay $isCompact={false} aria-selected>
        3
      </StyledDay>
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  /* background */

  it('uses correct $mode mode default background', () => {
    const { container } = render(<StyledDay $isCompact={false}>3</StyledDay>);

    expect(container.firstChild).toHaveStyleRule('background-color', 'inherit');
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.blue[700] },
    { mode: 'dark', color: PALETTE.blue[600] }
  ])('uses correct $mode mode background when selected', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDay $isCompact={false} aria-selected>
        3
      </StyledDay>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });
});
