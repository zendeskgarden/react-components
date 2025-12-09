/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
export { ColorSchemeProvider } from './elements/ColorSchemeProvider.js';
export { ThemeProvider } from './elements/ThemeProvider.js';
export { default as DEFAULT_THEME } from './elements/theme/index.js';
export { default as PALETTE } from './elements/palette/index.js';
export { default as retrieveComponentStyles } from './utils/retrieveComponentStyles.js';
export { componentStyles } from './utils/componentStyles.js';
export { getArrowPosition } from './utils/getArrowPosition.js';
export { getCheckeredBackground } from './utils/getCheckeredBackground.js';
export { getColor } from './utils/getColor.js';
export { getColorV8 } from './utils/getColorV8.js';
export { getFloatingPlacements } from './utils/getFloatingPlacements.js';
export { getFocusBoxShadow } from './utils/getFocusBoxShadow.js';
export { default as getLineHeight } from './utils/getLineHeight.js';
export { getMenuPosition } from './utils/getMenuPosition.js';
export { default as mediaQuery } from './utils/mediaQuery.js';
export { default as arrowStyles } from './utils/arrowStyles.js';
export { useColorScheme } from './utils/useColorScheme.js';
export { useDocument } from './utils/useDocument.js';
export { useWindow } from './utils/useWindow.js';
export { useText } from './utils/useText.js';
export { default as menuStyles } from './utils/menuStyles.js';
export { SELECTOR_FOCUS_VISIBLE, focusStyles } from './utils/focusStyles.js';
export { StyledBaseIcon } from './utils/StyledBaseIcon.js';
export { ARROW_POSITION, MENU_POSITION, PLACEMENT } from './types/index.js';
