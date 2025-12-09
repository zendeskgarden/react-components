/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { Hue } from '../types';
import { DefaultTheme } from 'styled-components';
export declare const DEFAULT_SHADE = 600;
/**
 * @deprecated Use `getColor` instead.
 *
 * Get the palette color for the given hue, shade, and theme.
 *
 * @param {string|Object} hue A `theme.palette` hue or one of the following `theme.colors` keys:
 *  - `'primaryHue'` = `theme.colors.primaryHue`
 *  - `'dangerHue'` = `theme.colors.dangerHue`
 *  - `'warningHue'` = `theme.colors.warningHue`
 *  - `'successHue'` = `theme.colors.successHue`
 *  - `'neutralHue'` = `theme.colors.neutralHue`
 *  - `'chromeHue'` = `theme.colors.chromeHue`
 * @param {number} [shade=DEFAULT_SHADE] A hue shade.
 * @param {Object} theme Context `theme` object.
 * @param {Number} [transparency] An alpha-channel value between 0 and 1.
 */
export declare const getColorV8: ((hue: Hue, shade?: number, theme?: DefaultTheme, transparency?: number) => string | undefined) & import("lodash").MemoizedFunction;
