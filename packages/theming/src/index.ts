/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { ThemeProvider } from './elements/ThemeProvider';
export { default as DEFAULT_THEME } from './elements/theme';
export { default as PALETTE } from './elements/palette';
export {
  default as retrieveComponentStyles,
  /** `retrieveTheme` is a deprecated usage for v7 compatability */
  default as retrieveTheme
} from './utils/retrieveComponentStyles';
export { getColor } from './utils/getColor';
export { getFocusBoxShadow } from './utils/getFocusBoxShadow';
export { default as getLineHeight } from './utils/getLineHeight';
export { default as mediaQuery } from './utils/mediaQuery';
export { default as arrowStyles } from './utils/arrowStyles';
export { useDocument } from './utils/useDocument';
export { useWindow } from './utils/useWindow';
export { useText } from './utils/useText';
export { default as menuStyles } from './utils/menuStyles';
export { focusStyles, SELECTOR_FOCUS_VISIBLE } from './utils/focusStyles';

export {
  ARROW_POSITION as ARRAY_ARROW_POSITION,
  MENU_POSITION as ARRAY_MENU_POSITION,
  type IGardenTheme,
  type IThemeProviderProps,
  type ArrowPosition as ARROW_POSITION,
  type MenuPosition as MENU_POSITION
} from './types';
