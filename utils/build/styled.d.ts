/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';

declare module 'styled-components' {
  export type Hue = Record<number | string, string> | string;

  /* eslint-disable-next-line @typescript-eslint/interface-name-prefix */
  export interface DefaultTheme {
    rtl: boolean;
    document?: any;
    borders: {
      sm: string;
      md: string;
    };
    borderRadii: {
      sm: string;
      md: string;
    };
    borderStyles: {
      solid: string;
    };
    borderWidths: {
      sm: string;
      md: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      base: 'light' | 'dark';
      background: string;
      foreground: string;
      primaryHue: string;
      dangerHue: string;
      warningHue: string;
      successHue: string;
      neutralHue: string;
      chromeHue: string;
    };
    components: Record<string, any>;
    fonts: {
      mono: string;
      system: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeights: {
      thin: number;
      extralight: number;
      light: number;
      regular: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    iconSizes: {
      sm: string;
      md: string;
      lg: string;
    };
    lineHeights: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    shadowWidths: {
      sm: string;
      md: string;
    };
    shadows: {
      sm: (color: string) => string;
      md: (color: string) => string;
      lg: (offsetY: string, blurRadius: string, color: string) => string;
    };
    space: {
      base: number;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    palette: Record<string, Hue>;
  }
}
