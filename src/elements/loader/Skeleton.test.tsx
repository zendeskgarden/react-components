/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { rgba } from 'polished';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  type Args = ['light' | 'dark', string];

  it.each<Args>([
    ['light', rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[200])],
    ['dark', rgba(PALETTE.white, DEFAULT_THEME.opacity[200])]
  ])('renders a Skeleton in "%s" mode', (mode, color) => {
    const { container } = render(<Skeleton />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

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
    const { container } = render(<Skeleton isLight />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

    expect(container.firstChild).toHaveStyleRule('background-color', color);
    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(       45deg,       transparent,       ${color},       transparent     )`,
      {
        modifier: '&::before'
      }
    );
  });

  it('renders a non-breaking space so the line height sizes the Skeleton', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild?.textContent).toBe('\u00a0');
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
    const { container } = render(<Skeleton />, {
      theme: RTL_THEME
    });

    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(       -45deg,       transparent,       ${rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[200])},       transparent     )`,
      {
        modifier: '&::before'
      }
    );
  });
});
