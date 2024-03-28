/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProviderProps } from 'styled-components';

export const ARROW_POSITION = [
  'top',
  'top-left',
  'top-right',
  'right',
  'right-top',
  'right-bottom',
  'bottom',
  'bottom-left',
  'bottom-right',
  'left',
  'left-top',
  'left-bottom'
] as const;

export type ArrowPosition = (typeof ARROW_POSITION)[number];

export const MENU_POSITION = ['top', 'right', 'bottom', 'left'] as const;

export type MenuPosition = (typeof MENU_POSITION)[number];

export const PLACEMENT = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'end',
  'end-top',
  'end-bottom',
  'start',
  'start-top',
  'start-bottom'
] as const;

export type Placement = (typeof PLACEMENT)[number];

export type Hue = Record<number | string, string> | string;

export interface IGardenTheme {
  rtl: boolean;
  document?: any;
  window?: any;
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
    primaryHue: string;
    dangerHue: string;
    warningHue: string;
    successHue: string;
    neutralHue: string;
    chromeHue: string;
    variables: {
      dark: {
        background: Record<string, string>;
        border: Record<string, string>;
        foreground: Record<string, string>;
      };
      light: {
        background: Record<string, string>;
        border: Record<string, string>;
        foreground: Record<string, string>;
      };
    };
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
    medium: number;
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
  palette: Record<string, Hue>;
  shadowWidths: {
    xs: string;
    sm: string;
    md: string;
  };
  shadows: {
    xs: (color: string) => string;
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

export interface IThemeProviderProps extends Partial<ThemeProviderProps<IGardenTheme>> {
  /**
   * Provides values for component styling. See styled-components
   * [`ThemeProvider`](https://styled-components.com/docs/api#themeprovider)
   * for details.
   */
  theme?: IGardenTheme | ((theme: IGardenTheme) => IGardenTheme);
  /**
   * Provides a reference to the DOM node used to scope a `:focus-visible`
   * polyfill. If left `undefined`, a scoping `<div>` will be rendered.
   * Assigning `null` (on a nested `ThemeProvider`, for example) prevents the
   * added polyfill and scoping `<div>`.
   */
  focusVisibleRef?: React.RefObject<HTMLElement> | null;
}
