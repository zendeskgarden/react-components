/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IGardenTheme, IThemeProviderProps } from '../types';
import DEFAULT_THEME, { getTheme } from './theme';

export const ThemeProvider = ({
  theme = getTheme,
  ...other
}: PropsWithChildren<IThemeProviderProps>) => {
  const styledTheme =
    typeof theme === 'function'
      ? (outerTheme?: IGardenTheme) => theme(outerTheme ?? DEFAULT_THEME)
      : theme;

  return <StyledThemeProvider theme={styledTheme} {...other} />;
};
