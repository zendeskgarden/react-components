/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { borders, borderRadii, borderStyles, borderWidths } from './borders';
import { default as colors } from './colors';
import { fonts, fontSizes, fontWeights } from './fonts';
import { default as lineHeights } from './lineHeights';
import { shadows, shadowWidths } from './shadows';
import { default as space } from './space';
import palette from '../palette';

/** @component */
export default {
  borders,
  borderRadii: borderRadii(),
  borderStyles,
  borderWidths,
  colors,
  components: {},
  fonts,
  fontSizes,
  fontWeights,
  lineHeights: lineHeights(),
  palette,
  shadowWidths,
  shadows,
  space: space()
};
