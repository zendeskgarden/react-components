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

export * from '@testing-library/react';
export { customRender as render };
export { customRtlRender as renderRtl };
export { customDarkRender as renderDark };
