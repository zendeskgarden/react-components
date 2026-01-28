/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ReactElement } from 'react';

import { render as _render, type RenderOptions } from '@testing-library/react';
import { DEFAULT_THEME, ThemeProvider, type IGardenTheme } from '@zendeskgarden/react-theming';

interface IOptions extends RenderOptions {
  theme?: IGardenTheme;
}

/**
 * Custom React testing library `render` that accepts an optional Garden theme
 * and returns a `rerender` function that does the same
 */
export const render = (element: ReactElement, { theme, ...options }: IOptions = {}) => {
  const result = _render(element, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    ...options
  });

  return {
    ...result,
    rerender: (_element: ReactElement, _options: IOptions) =>
      render(_element, { container: result.container, ..._options })
  };
};

export const RTL_THEME = { ...DEFAULT_THEME, rtl: true } as IGardenTheme;
export const DARK_THEME = {
  ...DEFAULT_THEME,
  colors: { ...DEFAULT_THEME.colors, base: 'dark' }
} as IGardenTheme;
export const RTL_DARK_THEME = { ...DARK_THEME, rtl: true } as IGardenTheme;
