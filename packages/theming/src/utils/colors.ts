/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ChromaStatic } from 'chroma-js';

// @ts-expect-error Ignoring missing type definition
import chroma from 'chroma-js/src/chroma';
// @ts-expect-error Ignoring missing type definition
import interpolate from 'chroma-js/src/generator/mix';
// @ts-expect-error Ignoring missing type definition
import valid from 'chroma-js/src/utils/valid';
// @ts-expect-error Ignoring missing type definition
import scale from 'chroma-js/src/generator/scale';

import 'chroma-js/src/io/rgb';
import 'chroma-js/src/io/hex';
import 'chroma-js/src/io/lab';
import 'chroma-js/src/interpolator/rgb';
import 'chroma-js/src/ops/alpha';
import PALETTE from '../elements/palette';

chroma.interpolate = interpolate;
chroma.valid = valid;
chroma.scale = scale;

interface ChromaLight {
  scale: ChromaStatic['scale'];
  valid: ChromaStatic['valid'];
  interpolate: ChromaStatic['interpolate'];
}

const chromaLight = chroma as ChromaLight;

export const isValidColor = chromaLight.valid;

/**
 * Generates a color scale with contrast ratios closely aligned to Garden's color palettes.
 *
 * @param {string} hue The color string to generate the scale from.
 *
 * @returns An offset-based color palette.
 */
export function getCustomColorScale(hue: string) {
  if (!isValidColor(hue)) {
    throw new Error('Error: `hue` must be a valid color string');
  }

  const colors = chromaLight
    .scale([PALETTE.white, hue, PALETTE.black])
    .padding([0.027, 0.06]) // only include contrast ratios from 1.08 to 19.5
    .mode('rgb')
    .correctLightness()
    .colors(100); // generate 100 color steps for greater accuracy

  /**
     * Considering the following target contrast ratios:
     * 
     * const targetRatios = {
        100: 1.08,
        200: 1.2,
        300: 1.35,
        400: 2,
        500: 2.8,
        600: 3.3,
        700: 5,
        800: 10,
        900: 13,
        1000: 16,
        1100: 17.5,
        1200: 19.5,
      }
     * We cherry-pick the color whose ratio is most closely aligned with the desired ratio for the offset.
  */
  return {
    100: colors[0],
    200: colors[4],
    300: colors[9],
    400: colors[24],
    500: colors[35],
    600: colors[41],
    700: colors[53],
    800: colors[73],
    900: colors[80],
    1000: colors[88],
    1100: colors[93],
    1200: colors[99]
  };
}
