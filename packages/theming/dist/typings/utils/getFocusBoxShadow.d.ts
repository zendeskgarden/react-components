/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { FocusBoxShadowParameters } from '../types';
/**
 * Get a CSS `box-shadow` property value for focus state styling.
 *
 * @param {string} [options.boxShadow] Provides an existing `box-shadow` (a drop shadow, for example) to be retained along with the focus ring
 * @param {boolean} [options.inset=false] Determines whether the `box-shadow` is inset
 * @param {Object} [options.color={ variable: 'border.primaryEmphasis' }] Provides an object with `getColor` parameters used to determine the focus ring color
 * @param {string} [options.shadowWidth='md'] Provides a theme object `shadowWidth` key for the cumulative width of the `box-shadow`
 * @param {Object} [options.spacerColor={ variable: 'background.default' }] Provides an object with `getColor` parameters used to determine the spacer color
 * @param {string} [options.spacerWidth='xs'] Provides a theme object `shadowWidth` for the white spacer, or `null` to remove
 * @param {Object} options.theme Provides values used to resolve the desired color
 *
 * @returns A `box-shadow` property value for the given options. Default is a
 * 3px blue ring with a 1px spacer overlay that matches the background.
 */
export declare const getFocusBoxShadow: ({ boxShadow, inset, color, shadowWidth, spacerColor, spacerWidth, theme, ...args }: FocusBoxShadowParameters) => string;
