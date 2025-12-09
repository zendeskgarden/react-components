/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import { CheckeredBackgroundParameters } from '../types';
/**
 * Get a checkered background image.
 *
 * @param {Object} options.theme Provides information for pattern color and LTR/RTL layout
 * @param {number} options.size The pixel size of the checkered pattern
 * @param {string} [options.overlay] Optional
 * [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) with transparency or
 * [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
 * overlay to apply on top of the checkered pattern
 * @param {number} [options.positionY=0] Optional vertical position for starting the pattern (default `0`)
 * @param {string} [options.repeat='repeat'] Optional repeat value for the pattern; either `'repeat'` or `'repeat-x'` (default `'repeat'`)
 */
export declare const getCheckeredBackground: ({ theme, size, overlay, positionY, repeat }: CheckeredBackgroundParameters) => string;
