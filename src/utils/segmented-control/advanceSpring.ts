/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/*
 * Spring constants for a subtle selection bounce (unit mass), so that
 * acceleration = -STIFFNESS * displacement - DAMPING * velocity.
 */
const STIFFNESS = 400;
const DAMPING = 34;

/*
 * Closed-form solution for an underdamped spring:
 *
 *   displacement(t) = e^(-DECAY * t) * (A * cos(OMEGA * t) + B * sin(OMEGA * t))
 *
 * 1. DECAY is the exponential decay rate, half of DAMPING.
 * 2. OMEGA is the damped oscillation frequency in radians per second.
 * 3. The damping ratio is DAMPING / (2 * sqrt(STIFFNESS)) = 0.85. Anything
 *    below 1 overshoots the target; at 0.85 the overshoot is about 0.6% of the
 *    distance traveled and the spring is at rest in under a second.
 */
const DECAY = DAMPING / 2;
const OMEGA = Math.sqrt(STIFFNESS - DECAY * DECAY);

/*
 * The spring is at rest when it is this close (px) and this slow (px/s). The
 * final snap to the target is at most half a pixel, which is not visible, and
 * it ends the animation loop sooner than a tighter threshold would.
 */
const REST_DISTANCE = 0.5;
const REST_VELOCITY = 5;

/*
 * Longest time step (seconds) the solver evaluates. At 10s the decay factor is
 * about 4e-74, so any longer step has already come to rest. Clamping keeps
 * `elapsed` finite for `cos`/`sin` and protects against an `Infinity` result.
 */
const MAX_ELAPSED = 10;

export interface ISpringState {
  position: number;
  velocity: number;
  /** `true` once the spring is at rest on its target */
  settled: boolean;
}

/**
 * Advance a spring by `elapsed` seconds without numerical stepping, so the
 * result does not depend on frame rate.
 *
 * Invalid time steps are treated as no time passing (`NaN`, zero or negative)
 * or as enough time to come to rest (`Infinity`).
 *
 * @param position Current position
 * @param velocity Current velocity (position units per second)
 * @param target Position the spring settles on
 * @param elapsed Time step in seconds
 */
export const advanceSpring = (
  position: number,
  velocity: number,
  target: number,
  elapsed: number
): ISpringState => {
  /* `NaN > 0` is false, so invalid input collapses to a zero-length step */
  const time = elapsed > 0 ? Math.min(elapsed, MAX_ELAPSED) : 0;
  const displacement = position - target;
  const coefficient = (velocity + DECAY * displacement) / OMEGA;
  const cosine = Math.cos(OMEGA * time);
  const sine = Math.sin(OMEGA * time);
  const decay = Math.exp(-DECAY * time);
  const oscillation = displacement * cosine + coefficient * sine;
  const nextPosition = target + decay * oscillation;
  const nextVelocity =
    decay * (-DECAY * oscillation + OMEGA * (-displacement * sine + coefficient * cosine));
  const settled =
    Math.abs(nextPosition - target) < REST_DISTANCE && Math.abs(nextVelocity) < REST_VELOCITY;

  return {
    position: settled ? target : nextPosition,
    velocity: settled ? 0 : nextVelocity,
    settled
  };
};
