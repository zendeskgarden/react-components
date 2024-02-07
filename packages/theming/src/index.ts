/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { ThemeProvider } from './elements/ThemeProvider';
export { default as DEFAULT_THEME } from './elements/theme';
export { default as PALETTE } from './elements/palette';
export { default as isRtl } from './utils/isRtl';
export {
  default as retrieveComponentStyles,
  /** `retrieveTheme` is a deprecated usage for v7 compatability */
  default as retrieveTheme
} from './utils/retrieveComponentStyles';
export { default as withTheme } from './utils/withTheme';
export { default as getDocument } from './utils/getDocument';
export { getArrowPosition } from './utils/getArrowPosition';
export { getColor } from './utils/getColor';
export { getFloatingPlacements } from './utils/getFloatingPlacements';
export { getFocusBoxShadow } from './utils/getFocusBoxShadow';
export { default as getLineHeight } from './utils/getLineHeight';
export { getMenuPosition } from './utils/getMenuPosition';
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
  PLACEMENT,
  type IGardenTheme,
  type IThemeProviderProps,
  type ArrowPosition as ARROW_POSITION,
  type MenuPosition as MENU_POSITION,
  type Placement
} from './types';
