/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { default as ThemeProvider } from './elements/ThemeProvider';
export type { IThemeProviderProps } from './elements/ThemeProvider';
export { default as DEFAULT_THEME } from './elements/theme';
export type { IGardenTheme } from './elements/theme';
export { default as PALETTE } from './elements/palette';
export { default as isRtl } from './utils/isRtl';
export {
  default as retrieveComponentStyles,
  /** `retrieveTheme` is a deprecated usage for v7 compatability */
  default as retrieveTheme
} from './utils/retrieveComponentStyles';
export { default as withTheme } from './utils/withTheme';
export { default as getDocument } from './utils/getDocument';
export { default as getColor } from './utils/getColor';
export { default as getLineHeight } from './utils/getLineHeight';
export { default as mediaQuery } from './utils/mediaQuery';
export { default as arrowStyles } from './utils/arrowStyles';
export type { ARROW_POSITION } from './utils/arrowStyles';
export { useDocument } from './utils/useDocument';
export { default as menuStyles } from './utils/menuStyles';
export type { MENU_POSITION } from './utils/menuStyles';
