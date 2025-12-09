/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { ColorParameters } from '../types';
/**
 * Get a color value from the theme. Variable lookup takes precedence, followed
 * by `dark` and `light` object values. If none of these are provided, `hue`,
 * `shade`, `offset`, and `transparency` are used as fallbacks to determine the
 * color.
 *
 * @param {Object} options.theme Provides values used to resolve the desired color
 * @param {string} [options.variable] A variable key (i.e. `'background.default'`) used to resolve a color value for the theme color base
 * @param {Object} [options.dark] An object with `hue`, `shade`, `offset`, and `transparency` values to be used in dark mode
 * @param {Object} [options.light] An object with `hue`, `shade`, `offset`, and `transparency` values to be used in light mode
 * @param {string} [options.hue] A `theme.palette` hue or one of the following `theme.colors` keys:
 *  - `'primaryHue'` = `theme.colors.primaryHue`
 *  - `'dangerHue'` = `theme.colors.dangerHue`
 *  - `'warningHue'` = `theme.colors.warningHue`
 *  - `'successHue'` = `theme.colors.successHue`
 *  - `'neutralHue'` = `theme.colors.neutralHue`
 *  - `'chromeHue'` = `theme.colors.chromeHue`
 * @param {number} [options.shade] A hue shade
 * @param {number} [options.offset] A positive or negative value to adjust the shade
 * @param {number} [options.transparency] A `theme.opacity` key or an alpha-channel value between 0 and 1
 */
export declare const getColor: (({ dark, hue, light, offset, shade, theme, transparency, variable }: ColorParameters) => string) & import("lodash").MemoizedFunction;
