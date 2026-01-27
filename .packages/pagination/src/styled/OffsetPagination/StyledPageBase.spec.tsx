/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { getRenderFn, render } from 'garden-test-utils';
import { rgba } from 'polished';
import React from 'react';

import { StyledPageBase } from './StyledPageBase';

describe('StyledPageBase', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledPageBase />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders hidden styling if provided', () => {
    const { container } = render(<StyledPageBase hidden />);

    expect(container.firstChild).toHaveStyleRule('visibility', 'hidden');
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[100]) },
    { mode: 'dark', color: rgba(PALETTE.blue[500], DEFAULT_THEME.opacity[100]) }
  ])('renders $mode mode background when hovered', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(<StyledPageBase>{1}</StyledPageBase>);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&:hover'
    });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', color: rgba(PALETTE.blue[500], DEFAULT_THEME.opacity[200]) }
  ])('renders $mode mode background when hovered', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(<StyledPageBase>{1}</StyledPageBase>);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&:active'
    });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[200]) },
    { mode: 'dark', color: rgba(PALETTE.blue[500], DEFAULT_THEME.opacity[200]) }
  ])('renders $mode mode background when hovered', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledPageBase aria-current="page">{1}</StyledPageBase>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&[aria-current="page"]:hover'
    });
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: rgba(PALETTE.blue[700], DEFAULT_THEME.opacity[300]) },
    { mode: 'dark', color: rgba(PALETTE.blue[500], DEFAULT_THEME.opacity[300]) }
  ])('renders $mode mode background when hovered', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledPageBase aria-current="page">{1}</StyledPageBase>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&[aria-current="page"]:active'
    });
  });
});
