/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

type AnimationPoints = Record<number, number>;

export const STROKE_WIDTH_FRAMES: AnimationPoints = {
  0: 6,
  14: 5,
  26: 4,
  36: 3,
  46: 2,
  58: 3,
  70: 4,
  80: 5,
  91: 6
};

export const ROTATION_FRAMES: AnimationPoints = {
  0: -90,
  8: -81,
  36: -30,
  41: -18,
  44: -8,
  48: 0,
  55: 22,
  63: 53,
  64: 62,
  66: 67,
  68: 78,
  69: 90,
  71: 99,
  73: 112,
  74: 129,
  76: 138,
  78: 159,
  79: 180,
  81: 190,
  83: 207,
  84: 221,
  86: 226,
  88: 235,
  90: 243,
  99: 270
};

export const DASHARRAY_FRAMES: AnimationPoints = {
  0: 0,
  13: 2,
  26: 13,
  53: 86,
  58: 90,
  63: 89,
  64: 88,
  66: 86,
  68: 83,
  69: 81,
  71: 76,
  73: 70,
  74: 62,
  76: 58,
  78: 47,
  79: 37,
  81: 31,
  83: 23,
  84: 16,
  88: 10,
  89: 7,
  98: 1,
  99: 0
};
