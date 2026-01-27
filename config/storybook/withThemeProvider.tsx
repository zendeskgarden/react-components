/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/csf';

import { DEFAULT_THEME, getColor, ThemeProvider } from '@zendeskgarden/react-theming';
import { createGlobalStyle } from 'styled-components';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' as const } };

export const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
export const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

const GlobalPreviewStyling = createGlobalStyle<any>`
  html {
    background-color: ${({ theme }) => getColor({ theme, variable: 'background.default' })};
    color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  }

  body {
    direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
    font-family: ${({ theme }) => theme.fonts.system};

    /* 'padded' layout is applied by default */
    &.sb-show-main.sb-main-padded {
      padding: ${({ theme }) => theme.space.xl};
    }
  }
`;

export const withThemeProvider: DecoratorFunction<ReactRenderer> = (Story, { globals }) => {
  if (globals.bedrock === 'enabled') {
    document.querySelector('link[href$="bedrock/dist/index.css"]')?.removeAttribute('disabled');
  } else {
    document
      .querySelector('link[href$="bedrock/dist/index.css"]')
      ?.setAttribute('disabled', 'true');
  }

  const rtl = globals.locale === 'rtl';
  const colors = {
    ...DEFAULT_THEME.colors,
    primaryHue: globals.primaryHue || DEFAULT_THEME.colors.primaryHue
  };

  if (globals.backgrounds?.value === 'dark') {
    colors.base = 'dark';
  }

  const theme = { ...DEFAULT_THEME, colors, rtl };

  return (
    <ThemeProvider theme={theme}>
      <GlobalPreviewStyling />
      <Story />
    </ThemeProvider>
  );
};
