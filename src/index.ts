/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* accordion */
export { Accordion } from './elements/accordion/Accordion';
export type { IAccordionProps } from './types/elements';

/* theming */
export { ColorSchemeProvider } from './theming/elements/ColorSchemeProvider';
export { default as PALETTE } from './theming/elements/palette';
export { default as DEFAULT_THEME } from './theming/elements/theme';
export { ThemeProvider } from './theming/elements/ThemeProvider';
export {
  ARROW_POSITION,
  MENU_POSITION,
  PLACEMENT,
  type ArrowPosition,
  type CheckeredBackgroundParameters,
  type ColorParameters,
  type ColorScheme,
  type FocusBoxShadowParameters,
  type FocusStylesParameters,
  type HueColorParameters,
  type IColorSchemeContext,
  type IColorSchemeProviderProps,
  type IGardenTheme,
  type IStyledBaseIconProps,
  type IThemeProviderProps,
  type MenuPosition
} from './theming/types';
export { default as arrowStyles } from './theming/utils/arrowStyles';
export { componentStyles } from './theming/utils/componentStyles';
export { SELECTOR_FOCUS_VISIBLE, focusStyles } from './theming/utils/focusStyles';
export { getArrowPosition } from './theming/utils/getArrowPosition';
export { getCheckeredBackground } from './theming/utils/getCheckeredBackground';
export { getColor } from './theming/utils/getColor';
export { getFloatingPlacements } from './theming/utils/getFloatingPlacements';
export { getFocusBoxShadow } from './theming/utils/getFocusBoxShadow';
export { getHueColor } from './theming/utils/getHueColor';
export { default as getLineHeight } from './theming/utils/getLineHeight';
export { getMenuPosition } from './theming/utils/getMenuPosition';
export { default as mediaQuery } from './theming/utils/mediaQuery';
export { default as menuStyles } from './theming/utils/menuStyles';
export { default as retrieveComponentStyles } from './theming/utils/retrieveComponentStyles';
export { StyledBaseIcon } from './theming/utils/StyledBaseIcon';
export { useColorScheme } from './theming/utils/useColorScheme';
export { useDocument } from './theming/utils/useDocument';
export { useText } from './theming/utils/useText';
export { useWindow } from './theming/utils/useWindow';
