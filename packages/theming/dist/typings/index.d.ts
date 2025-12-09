/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
export { ColorSchemeProvider } from './elements/ColorSchemeProvider';
export { ThemeProvider } from './elements/ThemeProvider';
export { default as DEFAULT_THEME } from './elements/theme';
export { default as PALETTE } from './elements/palette';
export { default as retrieveComponentStyles } from './utils/retrieveComponentStyles';
export { componentStyles } from './utils/componentStyles';
export { getArrowPosition } from './utils/getArrowPosition';
export { getCheckeredBackground } from './utils/getCheckeredBackground';
export { getColor } from './utils/getColor';
export { getColorV8 } from './utils/getColorV8';
export { getFloatingPlacements } from './utils/getFloatingPlacements';
export { getFocusBoxShadow } from './utils/getFocusBoxShadow';
export { default as getLineHeight } from './utils/getLineHeight';
export { getMenuPosition } from './utils/getMenuPosition';
export { default as mediaQuery } from './utils/mediaQuery';
export { default as arrowStyles } from './utils/arrowStyles';
export { useColorScheme } from './utils/useColorScheme';
export { useDocument } from './utils/useDocument';
export { useWindow } from './utils/useWindow';
export { useText } from './utils/useText';
export { default as menuStyles } from './utils/menuStyles';
export { focusStyles, SELECTOR_FOCUS_VISIBLE } from './utils/focusStyles';
export { StyledBaseIcon } from './utils/StyledBaseIcon';
export { ARROW_POSITION, MENU_POSITION, PLACEMENT, type IColorSchemeContext, type IColorSchemeProviderProps, type IGardenTheme, type IStyledBaseIconProps, type IThemeProviderProps, type ArrowPosition, type CheckeredBackgroundParameters, type ColorParameters, type ColorScheme, type FocusBoxShadowParameters, type FocusStylesParameters, type MenuPosition, type Placement } from './types';
