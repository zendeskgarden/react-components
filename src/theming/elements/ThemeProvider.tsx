/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IGardenTheme, IThemeProviderProps } from '../types';
import DEFAULT_THEME from './theme';

export const ThemeProvider = ({
  theme = DEFAULT_THEME,
  ...other
}: PropsWithChildren<IThemeProviderProps>) => (
  <StyledThemeProvider theme={theme as IGardenTheme} {...other} />
);
