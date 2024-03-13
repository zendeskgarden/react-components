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
  background: PALETTE.white,
  foreground: PALETTE.grey[900],
  primaryHue: 'blue',
  dangerHue: 'red',
  warningHue: 'yellow',
  successHue: 'green',
  neutralHue: 'grey',
  chromeHue: 'kale'
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
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space
};

/** @component */
export default DEFAULT_THEME;
