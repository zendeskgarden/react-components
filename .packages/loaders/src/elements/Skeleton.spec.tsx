/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { getRenderFn, render, renderRtl } from 'garden-test-utils';
import { rgba } from 'polished';
import React from 'react';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  type Args = ['light' | 'dark', string];

  it.each<Args>([
    ['light', rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[200])],
    ['dark', rgba(PALETTE.white, DEFAULT_THEME.opacity[200])]
  ])('renders a Skeleton in "%s" mode', (mode, color) => {
    const { container } = getRenderFn(mode)(<Skeleton />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(       45deg,       transparent,       ${color},       transparent     )`,
      {
        modifier: '&::before'
      }
    );
  });

  it.each<Args>([
    ['light', rgba(PALETTE.white, DEFAULT_THEME.opacity[200])],
    ['dark', rgba(PALETTE.white, DEFAULT_THEME.opacity[200])]
  ])('renders a `isLight` Skeleton in "%s" mode', (mode, color) => {
    const { container } = getRenderFn(mode)(<Skeleton isLight />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(       45deg,       transparent,       ${color},       transparent     )`,
      {
        modifier: '&::before'
      }
    );
  });

  it('applies custom width correctly', () => {
    const { container } = render(<Skeleton width="50px" />);

    expect(container.firstChild).toHaveStyleRule('width', '50px');
  });

  it('applies custom height correctly', () => {
    const { container } = render(<Skeleton height="50px" />);

    expect(container.firstChild).toHaveStyleRule('height', '50px');
  });

  it('applies RTL styling correctly', () => {
    const { container } = renderRtl(<Skeleton />);

    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(       -45deg,       transparent,       ${rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[200])},       transparent     )`,
      {
        modifier: '&::before'
      }
    );
  });
});
