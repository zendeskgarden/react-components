/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PropsWithChildren, SVGAttributes } from 'react';
import { CSSObject, DefaultTheme, ThemeProviderProps } from 'styled-components';

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

export type CheckeredBackgroundParameters = {
  overlay?: string;
  positionY?: number;
  repeat?: 'repeat' | 'repeat-x';
  size: number;
  theme: IGardenTheme;
};

export type ColorParameters = {
  dark?: {
    hue?: string;
    offset?: number;
    shade?: number;
    transparency?: number;
  };
  hue?: string;
  light?: {
    hue?: string;
    offset?: number;
    shade?: number;
    transparency?: number;
  };
  offset?: number;
  shade?: number;
  theme: IGardenTheme;
  transparency?: number;
  variable?: string;
};

export type FocusStylesParameters = FocusBoxShadowParameters & {
  condition?: boolean;
  selector?: string;
  styles?: CSSObject;
};

export type FocusBoxShadowParameters = {
  boxShadow?: string;
  inset?: boolean;
  color?: Omit<ColorParameters, 'theme'>;
  shadowWidth?: 'sm' | 'md';
  spacerColor?: Omit<ColorParameters, 'theme'>;
  spacerWidth?: null | 'xs' | 'sm';
  theme: IGardenTheme;
};

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
    lg: string;
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
        shadow: Record<string, string>;
      };
      light: {
        background: Record<string, string>;
        border: Record<string, string>;
        foreground: Record<string, string>;
        shadow: Record<string, string>;
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
  opacity: Record<number, number>;
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

export type ColorScheme = IGardenTheme['colors']['base'] | 'system';

export interface IColorSchemeContext {
  /** Returns the current color scheme */
  colorScheme: IGardenTheme['colors']['base'];
  /** Indicates whether the `colorScheme` is determined by the system */
  isSystem: boolean;
  /** Provides the mechanism for updating the current color scheme */
  setColorScheme: (colorScheme: ColorScheme) => void;
}

export interface IColorSchemeProviderProps {
  /**
   * Sets the initial color scheme and provides `localStorage` persistence (see
   * the `useColorScheme` hook). A user's stored preference overrides this
   * value.
   */
  initialColorScheme?: ColorScheme;
  /**
   * Specifies the key used to store the user's preferred color scheme in
   * `localStorage` or `null` to bypass local storage persistence
   */
  colorSchemeKey?: string | null;
}

export interface IThemeProviderProps extends Partial<ThemeProviderProps<IGardenTheme>> {
  /**
   * Provides values for component styling. See styled-components
   * [`ThemeProvider`](https://styled-components.com/docs/api#themeprovider)
   * for details.
   */
  theme?: IGardenTheme | ((theme: IGardenTheme) => IGardenTheme);
}

export interface IStyledBaseIconProps extends PropsWithChildren<SVGAttributes<SVGElement>> {
  theme?: DefaultTheme;
}
