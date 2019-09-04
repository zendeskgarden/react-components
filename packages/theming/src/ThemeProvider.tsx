/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProvider, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from './theme';

const GardenThemeProvider: React.FunctionComponent<ThemeProps<DefaultTheme>> & {
  defaultProps: Partial<ThemeProps<DefaultTheme>>;
} = ({ theme, children, ...other }) => {
  return (
    <ThemeProvider theme={theme} {...other}>
      {children as any}
    </ThemeProvider>
  );
};

GardenThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};

/** @component */
export default GardenThemeProvider;
