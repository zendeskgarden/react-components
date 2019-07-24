/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import 'styled-components';

declare module 'styled-components' {
  type Hue = Record<string, string>;

  export interface DefaultTheme {
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
    colors: {
      base: 'light' | 'dark';
      background: string;
      foreground: string;
      primaryHue: string | Hue;
      dangerHue: string | Hue;
      warningHue: string | Hue;
      successHue: string | Hue;
      neutralHue: string | Hue;
      chromeHue: string | Hue;
    };
    components: Record<string, any>;
    document?: any;
    fonts: {
      mono: string;
      system: string;
    };
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      mono: {
        sm: string;
        md: string;
        lg: string;
      };
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
    lineHeights: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    palette: Record<string, Hue | string>;
    rtl: boolean;
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
  }
}
