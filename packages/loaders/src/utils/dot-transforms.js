/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { easeInCubic, easeInOutCubic, easeOutCubic } from './animations';

export const KEYFRAME_1 = 0.166666667;
export const KEYFRAME_2 = 0.55;
export const KEYFRAME_3 = 1.166666667;
export const KEYFRAME_4 = 1.333333333;
export const KEYFRAME_5 = 1.533333333;
export const KEYFRAME_MAX = 1.766666667;

const WIDTH = 80;
const HEIGHT = WIDTH * 0.9;
const CIRCLE_RADIUS = WIDTH * 0.1125;
const MID_X = WIDTH / 2 - CIRCLE_RADIUS;
const MID_Y = HEIGHT / 2 - CIRCLE_RADIUS;
const BOTTOM = MID_Y + 5;

/**
 * Retrieve the X transform value
 * @param {Number} frame The current frame
 */
export function retrieveXTransform(frame) {
  let retVal;

  const _frame = frame % KEYFRAME_MAX;

  if (_frame < KEYFRAME_1) {
    return MID_X;
  } else if (_frame < KEYFRAME_2) {
    const frameValue = _frame - KEYFRAME_1;
    const frameMaximum = KEYFRAME_2 - KEYFRAME_1;
    const easeValue = easeInOutCubic(frameValue / frameMaximum);

    retVal = MID_X - easeValue * MID_X;
  } else if (_frame < KEYFRAME_4) {
    retVal = 0;
  } else {
    const frameValue = _frame - KEYFRAME_4;
    const frameMaximum = KEYFRAME_MAX - KEYFRAME_4;

    retVal = MID_X * (frameValue / frameMaximum);
  }

  if (frame >= KEYFRAME_MAX) {
    retVal = MID_X * 2 - retVal;
  }

  return retVal;
}

/**
 * Retrieve the Y transform value
 * @param {Number} frame The current frame
 */
export function retrieveYTransform(frame) {
  const _frame = frame % KEYFRAME_MAX;

  if (_frame < KEYFRAME_1) {
    return (_frame / KEYFRAME_1) * -1 * (BOTTOM - MID_Y) + BOTTOM;
  } else if (_frame < KEYFRAME_3) {
    return MID_Y;
  } else if (_frame < KEYFRAME_4) {
    const frameValue = _frame - KEYFRAME_3;
    const frameMaximum = KEYFRAME_4 - KEYFRAME_3;

    return (frameValue / frameMaximum) * (BOTTOM - MID_Y) + MID_Y;
  } else if (_frame < KEYFRAME_5) {
    const frameValue = _frame - KEYFRAME_4;
    const frameMaximum = KEYFRAME_5 - KEYFRAME_4;
    const easeValue = easeOutCubic(frameValue / frameMaximum);

    return BOTTOM - easeValue * BOTTOM;
  }
  const frameValue = _frame - KEYFRAME_5;
  const frameMaximum = KEYFRAME_MAX - KEYFRAME_5;
  const easeValue = easeInCubic(frameValue / frameMaximum);

  return easeValue * BOTTOM;
}
