/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IGardenTheme } from '../../types';
import PALETTE from '../palette';

const BASE = 4;

const borderRadii = {
  sm: `${BASE / 2}px`,
  md: `${BASE}px`
};

const borderStyles = {
  solid: 'solid'
};

const borderWidths = {
  sm: '1px',
  md: '3px'
};

const borders = {
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`
};

const breakpoints = {
  xs: '0px',
  sm: `${BASE * 144}px`,
  md: `${BASE * 192}px`,
  lg: `${BASE * 248}px`,
  xl: `${BASE * 300}px`
};

const colors = {
  primaryHue: 'blue',
  dangerHue: 'red',
  warningHue: 'yellow',
  successHue: 'green',
  neutralHue: 'grey',
  chromeHue: 'kale',
  variables: {
    dark: {
      background: {
        default: 'neutralHue.1100',
        raised: 'neutralHue.1000',
        recessed: 'neutralHue.1200',
        subtle: 'neutralHue.1000',
        emphasis: 'neutralHue.600',
        primary: 'primaryHue.900',
        success: 'successHue.1000',
        warning: 'warningHue.1000',
        danger: 'dangerHue.1000',
        primaryEmphasis: 'primaryHue.600',
        successEmphasis: 'successHue.600',
        warningEmphasis: 'warningHue.600',
        dangerEmphasis: 'dangerHue.600'
      },
      border: {
        default: 'neutralHue.800',
        emphasis: 'neutralHue.600',
        subtle: 'neutralHue.900',
        success: 'successHue.800',
        warning: 'warningHue.800',
        danger: 'dangerHue.800',
        primaryEmphasis: 'primaryHue.600',
        successEmphasis: 'successHue.600',
        warningEmphasis: 'warningHue.600',
        dangerEmphasis: 'dangerHue.600'
      },
      foreground: {
        default: 'neutralHue.300',
        subtle: 'neutralHue.500',
        onEmphasis: 'neutralHue.1100',
        primary: 'primaryHue.600',
        success: 'successHue.400',
        warning: 'warningHue.400',
        danger: 'dangerHue.400',
        successEmphasis: 'successHue.300',
        warningEmphasis: 'warningHue.300',
        dangerEmphasis: 'dangerHue.300'
      }
    },
    light: {
      background: {
        default: 'palette.white',
        raised: 'palette.white',
        recessed: 'neutralHue.100',
        subtle: 'neutralHue.100',
        emphasis: 'neutralHue.700',
        primary: 'primaryHue.100',
        success: 'successHue.100',
        warning: 'warningHue.100',
        danger: 'dangerHue.100',
        primaryEmphasis: 'primaryHue.700',
        successEmphasis: 'successHue.700',
        warningEmphasis: 'warningHue.700',
        dangerEmphasis: 'dangerHue.700'
      },
      border: {
        default: 'neutralHue.300',
        emphasis: 'neutralHue.600',
        subtle: 'neutralHue.200',
        success: 'successHue.300',
        warning: 'warningHue.300',
        danger: 'dangerHue.300',
        primaryEmphasis: 'primaryHue.700',
        successEmphasis: 'successHue.700',
        warningEmphasis: 'warningHue.700',
        dangerEmphasis: 'dangerHue.700'
      },
      foreground: {
        default: 'neutralHue.900',
        subtle: 'neutralHue.700',
        onEmphasis: 'palette.white',
        primary: 'primaryHue.700',
        success: 'successHue.700',
        warning: 'warningHue.700',
        danger: 'dangerHue.700',
        successEmphasis: 'successHue.900',
        warningEmphasis: 'warningHue.900',
        dangerEmphasis: 'dangerHue.900'
      }
    }
  }
};

const fonts = {
  mono: [
    'SFMono-Regular' /* macOS */,
    'Consolas' /* Windows */,
    '"Liberation Mono"' /* Ubuntu */,
    'Menlo',
    'Courier',
    'monospace'
  ].join(','),
  system: [
    'system-ui' /* drafts.csswg.org/css-fonts-4/#system-ui */,
    '-apple-system' /* macOS Safari & FF (San Francisco) */,
    'BlinkMacSystemFont' /* macOS Chrome (San Francisco) */,
    '"Segoe UI"' /* Windows */,
    'Roboto' /* Android & ChromeOS */,
    'Oxygen-Sans' /* KDE */,
    'Ubuntu' /* Ubuntu */,
    'Cantarell' /* GNOME */,
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ].join(',')
};

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

const iconSizes = {
  sm: '12px',
  md: '16px',
  lg: '26px'
};

const lineHeights = {
  sm: `${BASE * 4}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 6}px`,
  xl: `${BASE * 7}px`,
  xxl: `${BASE * 8}px`,
  xxxl: `${BASE * 11}px`
};

const opacity = {
  100: 0.08,
  200: 0.16,
  300: 0.24,
  400: 0.32,
  500: 0.4,
  600: 0.48,
  700: 0.56,
  800: 0.64,
  900: 0.72,
  1000: 0.8,
  1100: 0.88,
  1200: 0.96
};

const palette = { ...PALETTE };

/* Exclude product palette from the theme */
delete (palette as any).product;

const shadowWidths = {
  xs: '1px',
  sm: '2px',
  md: '3px'
};

const shadows = {
  xs: (color: string) => `0 0 0 ${shadowWidths.xs} ${color}`,
  sm: (color: string) => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: (color: string) => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY: string, blurRadius: string, color: string) =>
    `0 ${offsetY} ${blurRadius} 0 ${color}`
};

const space = {
  base: BASE,
  xxs: `${BASE}px`,
  xs: `${BASE * 2}px`,
  sm: `${BASE * 3}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 8}px`,
  xl: `${BASE * 10}px`,
  xxl: `${BASE * 12}px`
};

const DEFAULT_THEME: IGardenTheme = {
  borders,
  borderRadii,
  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    base: 'light',
    ...colors
  },
  components: {},
  fonts,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  opacity,
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space
};

export default DEFAULT_THEME;
