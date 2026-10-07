/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProvider as StyledThemeProvider, useTheme } from 'styled-components';

import { render } from '../../test/render';
import { IGardenTheme } from '../types';
import DEFAULT_THEME from './theme';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  it('only renders children', () => {
    const { container } = render(
      <ThemeProvider>
        <button type="button" />
      </ThemeProvider>
    );

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('provides theme color variable parity between modes', () => {
    let dark: IGardenTheme['colors']['variables']['dark'] | undefined;
    let light: IGardenTheme['colors']['variables']['light'] | undefined;

    const Test = () => {
      const theme = useTheme();

      dark = theme.colors.variables.dark;
      light = theme.colors.variables.light;

      return <div />;
    };

    render(<Test />);

    expect(dark).toBeDefined();
    expect(light).toBeDefined();

    const {
      background: darkBackground,
      border: darkBorder,
      foreground: darkForeground,
      shadow: darkShadow
    } = dark!;
    const {
      background: lightBackground,
      border: lightBorder,
      foreground: lightForeground,
      shadow: lightShadow
    } = light!;
    const darkKeys = [
      ...Object.keys(darkBackground),
      ...Object.keys(darkBorder),
      ...Object.keys(darkForeground),
      ...Object.keys(darkShadow)
    ].join();
    const lightKeys = [
      ...Object.keys(lightBackground),
      ...Object.keys(lightBorder),
      ...Object.keys(lightForeground),
      ...Object.keys(lightShadow)
    ].join();

    expect(darkKeys).toStrictEqual(lightKeys);
  });

  it('layers the v10 theme onto an outer theme, keeping the outer color base', () => {
    let theme: IGardenTheme | undefined;

    const Test = () => {
      theme = useTheme();

      return <div />;
    };
    const outerTheme = {
      ...DEFAULT_THEME,
      colors: { ...DEFAULT_THEME.colors, base: 'dark' as const },
      palette: { ...DEFAULT_THEME.palette, custom: '#fd5a1e' }
    };

    render(
      <StyledThemeProvider theme={outerTheme}>
        <ThemeProvider>
          <Test />
        </ThemeProvider>
      </StyledThemeProvider>
    );

    expect(theme!.colors.base).toBe('dark');
    expect(theme!.palette.custom).toBe('#fd5a1e');
    expect(theme!.borderRadii.full).toBe('9999px');
  });

  it('passes the default theme to a theme function', () => {
    let received: IGardenTheme | undefined;

    render(
      <ThemeProvider
        theme={theme => {
          received = theme;

          return theme;
        }}
      >
        <div />
      </ThemeProvider>
    );

    expect(received).toEqual(DEFAULT_THEME);
  });
});
