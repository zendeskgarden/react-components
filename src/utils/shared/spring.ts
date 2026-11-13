/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const DAMPING = 17;
const OMEGA = Math.sqrt(400 - DAMPING * DAMPING);
const THRESHOLD = 0.01;

/**
 * Advances a damped spring (stiffness 400, damping 34, unit mass) by `elapsed`
 * seconds, with a closed-form solution. The spring is slightly underdamped: a
 * small overshoot that settles quickly, for selection indicators.
 *
 * @param {number} position The current position
 * @param {number} velocity The current velocity, in units per second
 * @param {number} target The position the spring settles on
 * @param {number} elapsed The time step, in seconds
 *
 * @returns The next `position` and `velocity`. `settled` is true once both are
 * within a negligible distance of rest; the returned `position` is then exactly `target`.
 */
export const advanceSpring = (
  position: number,
  velocity: number,
  target: number,
  elapsed: number
) => {
  const displacement = position - target;
  const coefficient = (velocity + DAMPING * displacement) / OMEGA;
  const cosine = Math.cos(OMEGA * elapsed);
  const sine = Math.sin(OMEGA * elapsed);
  const decay = Math.exp(-DAMPING * elapsed);
  const nextPosition = target + decay * (displacement * cosine + coefficient * sine);
  const nextVelocity =
    decay *
    (-DAMPING * (displacement * cosine + coefficient * sine) +
      OMEGA * (-displacement * sine + coefficient * cosine));
  const settled = Math.abs(nextPosition - target) < THRESHOLD && Math.abs(nextVelocity) < THRESHOLD;

  return {
    position: settled ? target : nextPosition,
    velocity: settled ? 0 : nextVelocity,
    settled
  };
};
