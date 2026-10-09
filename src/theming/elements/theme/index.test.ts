/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME, { getTheme } from '.';

describe('DEFAULT_THEME', () => {
  it('matches snapshot', () => {
    expect({
      ...DEFAULT_THEME,
      shadows: {
        xs: DEFAULT_THEME.shadows.xs('black'),
        sm: DEFAULT_THEME.shadows.sm('black'),
        md: DEFAULT_THEME.shadows.md('black'),
        lg: DEFAULT_THEME.shadows.lg('0', '0', 'black')
      }
    }).toMatchSnapshot();
  });

  it('does not include `PALETTE.product`', () => {
    expect(DEFAULT_THEME.palette.product).toBeUndefined();
  });

  it('applies the v10 border radii', () => {
    expect(DEFAULT_THEME.borderRadii).toEqual({
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      xxl: '24px',
      full: '9999px'
    });
  });

  it('applies the v10 palette', () => {
    const blue = DEFAULT_THEME.palette.blue as Record<number, string>;
    const grey = DEFAULT_THEME.palette.grey as Record<number, string>;

    expect(DEFAULT_THEME.palette.white).toBe('#ffffff');
    expect(blue[700]).toBe('#406cc4');
    expect(grey[900]).toBe('#2f3130');
  });

  it('has no component overrides', () => {
    expect(DEFAULT_THEME.components).toEqual({});
  });
});

describe('getTheme', () => {
  it('layers the v10 design updates onto the v9 base theme by default', () => {
    expect(getTheme()).toEqual(DEFAULT_THEME);
  });

  it('keeps the parent color base', () => {
    const parent = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' as const } };

    expect(getTheme(parent).colors.base).toBe('dark');
  });

  it('keeps parent components and custom palette entries', () => {
    const parent = {
      ...DEFAULT_THEME,
      components: { 'test.marker': { color: 'red' } },
      palette: { ...DEFAULT_THEME.palette, custom: '#fd5a1e' }
    };
    const theme = getTheme(parent);
    const blue = theme.palette.blue as Record<number, string>;

    expect(theme.components).toEqual(parent.components);
    expect(theme.palette.custom).toBe('#fd5a1e');
    expect(blue[700]).toBe('#406cc4');
  });

  it('applies the v10 hues over the parent hues', () => {
    const parent = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, primaryHue: 'purple' } };

    expect(getTheme(parent).colors.primaryHue).toBe('blue');
  });
});
