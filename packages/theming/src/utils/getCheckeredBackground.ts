/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { CheckeredBackgroundParameters } from '../types';
import { getColor } from './getColor';

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
export const getCheckeredBackground = ({
  theme,
  size,
  overlay,
  positionY = 0,
  repeat = 'repeat'
}: CheckeredBackgroundParameters) => {
  const color = getColor({ theme, variable: 'border.default' });
  const dimensions = `${size}px ${size}px`;
  const positionX1 = theme.rtl ? '100%' : '0';
  const positionX2 = theme.rtl ? `calc(100% - ${size / 2}px)` : `${size / 2}px`;
  const position1 = `${positionX1} ${positionY}px`;
  const position2 = `${positionX2} ${size / 2 + positionY}px`;
  const position3 = `${positionX2} ${positionY}px`;
  const position4 = `${positionX1} ${size / -2 + positionY}px`;
  let retVal = `
    linear-gradient(45deg, ${color} 25%, transparent 25%) ${position1} / ${dimensions} ${repeat},
    linear-gradient(45deg, transparent 75%, ${color} 75%) ${position2} / ${dimensions} ${repeat},
    linear-gradient(135deg, ${color} 25%, transparent 25%) ${position3} / ${dimensions} ${repeat},
    linear-gradient(135deg, transparent 75%, ${color} 75%) ${position4} / ${dimensions} ${repeat}
  `;

  if (overlay) {
    retVal = overlay.startsWith('linear-gradient')
      ? `${overlay}, ${retVal}`
      : `linear-gradient(${overlay}, ${overlay}), ${retVal}`;
  }

  return retVal;
};
