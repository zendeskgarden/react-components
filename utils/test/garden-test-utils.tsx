/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, configure } from '@testing-library/react';
import { ThemeProvider, DEFAULT_THEME } from '../../packages/theming/src';

configure({ testIdAttribute: 'data-test-id' });

const ThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const RtlThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>{children}</ThemeProvider>
);

const DarkThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={{ ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } }}>
    {children}
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: ThemeWrapper, ...options });

const customRtlRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: RtlThemeWrapper, ...options });

const customDarkRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: DarkThemeWrapper, ...options });

const MODE_TO_RENDER_FN_MAP = {
  dark: customDarkRender,
  light: customRender
};
/**
 * A utility fn that returns the correct render function
 * for the mode. Useful when using `it.each()`.
 *
 * @throws Throws an error if mode is not recognized.
 *
 * @param mode {string} The color mode.
 * @returns {Function} Render function associated with the mode.
 */
export function getRenderFn(mode: string) {
  const renderFn = (MODE_TO_RENDER_FN_MAP as any)[mode];

  if (!renderFn) {
    throw new Error(`There is no render function for mode: ${mode}`);
  }

  return renderFn;
}

export * from '@testing-library/react';
export { customRender as render };
export { customRtlRender as renderRtl };
export { customDarkRender as renderDark };
