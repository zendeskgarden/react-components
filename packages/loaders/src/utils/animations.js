/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const X_DISTANCE = 31;
const Y_DISTANCE = 27;
const isArray = arr => Array.isArray(arr);

/**
 * Linear interpolation between sample frames provided
 * @param {Object} frames - The frame samples to compute from
 * @param {Object} opts - Options to change computed values
 * @param {Number} opts.duration - Duration of animation in ms
 * @param {Number} opts.totalFrames - Frames to generate from sample
 * @param {Number} opts.factor - Factor to increase amout of x coordinate
 */
export function computeFrames(frames, opts = {}) {
  const { duration = 1250, totalFrames = 100, factor = 0 } = opts;
  const movex = factor * X_DISTANCE;
  const movey = Y_DISTANCE;

  return Object.entries(frames).reduce((acc, item, index, arr) => {
    const [frame, value] = item;
    const [x, y] = isArray(value) ? value : [];
    const [nextFrame, nextValue] = arr[index + 1] || [totalFrames, arr[0][1]];
    const [xNext, yNext] = isArray(nextValue) ? nextValue : [];
    const diff = nextFrame - frame;
    const frameHz = 1000 / 60;

    let subDuration = (duration / totalFrames) * diff;
    let lastValue = value;
    const [xLast, yLast] = isArray(lastValue) ? lastValue : [];

    acc[frame] = isArray(value) ? [x + movex, y + movey] : value + movex;
    // Compute the linear interpolation between current and next frame
    for (let idx = 0; idx < diff; idx++) {
      if (isArray(lastValue)) {
        lastValue = [
          xLast + (xNext - xLast) * (frameHz / subDuration),
          yLast + (yNext - yLast) * (frameHz / subDuration)
        ];
      } else {
        lastValue =
          lastValue +
          (isArray(nextValue) ? xNext - lastValue : nextValue - lastValue) *
            (frameHz / subDuration);
      }

      subDuration = (duration / totalFrames) * (diff - idx);

      acc[parseInt(frame, 10) + idx + 1] = isArray(lastValue)
        ? [xLast + movex, yLast + movey]
        : lastValue + movex;
    }

    acc[nextFrame] = isArray(nextValue) ? [xNext + movex, yNext + movey] : nextValue + movex;

    return acc;
  }, {});
}
