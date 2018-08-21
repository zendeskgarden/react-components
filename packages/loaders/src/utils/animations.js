/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * accelerating from zero velocity
 * @param {*} t
 */
export function easeInCubic(t) {
  return t * t * t;
}

/**
 * decelerating to zero velocity
 * @param {*} t
 */
export function easeOutCubic(t) {
  const value = t - 1;

  return value * value * value + 1;
}

/**
 * acceleration until halfway, then deceleration
 * @param {*} t
 */
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
