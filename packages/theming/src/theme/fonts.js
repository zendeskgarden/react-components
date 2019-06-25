/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const fonts = {
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

export const fontSizes = {
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  semibold: 500,
  bold: 600,
  extrabold: 700,
  black: 800
};
