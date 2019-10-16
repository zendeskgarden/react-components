/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Accelerating from zero velocity
 * @param {Number} time Time
 */
export function easeInCubic(time) {
  return time * time * time;
}

/**
 * Decelerating to zero velocity
 * @param {Number} time Time
 */
export function easeOutCubic(time) {
  const value = time - 1;

  return value * value * value + 1;
}

/**
 * Acceleration until halfway, then deceleration
 * @param {Number} time Time
 */
export function easeInOutCubic(time) {
  return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
}
