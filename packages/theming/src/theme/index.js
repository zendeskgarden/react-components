/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math, rgba } from 'polished';
import PALETTE from '../palette';
import getColor from '../utils/getColor';

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

const colors = {
  base: 'light',
  background: PALETTE.white,
  foreground: PALETTE.grey[800],
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
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};

fontSizes.mono = {
  sm: math(`${fontSizes.sm} - 1px`),
  md: math(`${fontSizes.md} - 1px`),
  lg: math(`${fontSizes.lg} - 1px`)
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  semibold: 500,
  bold: 600,
  extrabold: 700,
  black: 800
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
delete palette.product;

const shadowWidths = {
  sm: '2px',
  md: '3px'
};

const shadows = {
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius, theme) =>
    `0 ${offsetY} ${blurRadius} 0 ${rgba(getColor('chromeHue', 600, theme), 0.15)}`
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

const DEFAULT_THEME = {
  borders,
  borderRadii,
  borderStyles,
  borderWidths,
  colors,
  components: {},
  document,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space
};

/** @component */
export default DEFAULT_THEME;
