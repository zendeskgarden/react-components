/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { DefaultTheme } from 'styled-components';
import { MenuPosition } from '../types';
type MenuOptions = {
    theme?: DefaultTheme;
    hidden?: boolean;
    margin?: string;
    zIndex?: number;
    animationModifier?: string;
    childSelector?: string;
};
/**
 * CSS for a `wrapper > menu` at the given position. The wrapper provides
 * absolute positioning (e.g. via Floating-UI). The menu provides basic styling
 * and optional animation.
 *
 * @param {string} position One of:
 *  - `'top'`
 *  - `'right'`
 *  - `'bottom'`
 *  - `'left'`
 * @param {Object} [options.theme=`DEFAULT_THEME`] Context theme object.
 * @param {boolean} [options.hidden] Determine whether the menu is hidden.
 * @param {string} [options.margin] Amount of margin between menu and trigger.
 * @param {number} [options.zIndex] The menu wrapper's z-index.
 * @param {string} [options.childSelector=`> *`] A CSS selector that identifies the
 *  child menu component.
 * @param {string} [options.animationModifier] A CSS class or attribute selector
 *  which, when applied, animates the menu's appearance.
 */
export default function menuStyles(position: MenuPosition, options?: MenuOptions): import("styled-components").RuleSet<object>;
export {};
