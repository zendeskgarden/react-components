/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { advanceSpring } from './advanceSpring';

const FRAME = 0.016; /* 60fps in seconds */

/* Step a spring frame by frame, as the selection pill does */
const simulate = (start: number, target: number) => {
  const positions: number[] = [];
  let state = { position: start, velocity: 0, settled: false };
  let frames = 0;

  while (!state.settled && frames < 1000) {
    state = advanceSpring(state.position, state.velocity, target, FRAME);
    positions.push(state.position);
    frames++;
  }

  return { positions, frames, state };
};

describe('advanceSpring', () => {
  it('stays put when no time has passed', () => {
    expect(advanceSpring(0, 0, 300, 0)).toEqual({ position: 0, velocity: 0, settled: false });
  });

  it('is settled when starting at rest on the target', () => {
    expect(advanceSpring(300, 0, 300, FRAME)).toEqual({
      position: 300,
      velocity: 0,
      settled: true
    });
  });

  it('accelerates toward the target', () => {
    const { position, velocity, settled } = advanceSpring(0, 0, 300, FRAME);

    expect(position).toBeGreaterThan(0);
    expect(position).toBeLessThan(300);
    expect(velocity).toBeGreaterThan(0);
    expect(settled).toBe(false);
  });

  it('honors initial velocity', () => {
    const { position, settled } = advanceSpring(300, 100, 300, FRAME);

    expect(position).toBeGreaterThan(300);
    expect(settled).toBe(false);
  });

  it('overshoots a forward move subtly, then settles on the target in under a second', () => {
    const { positions, frames, state } = simulate(0, 300);
    const overshoot = Math.max(...positions) - 300;

    expect(overshoot).toBeGreaterThan(0);
    expect(overshoot).toBeLessThan(300 * 0.01);
    expect(frames * FRAME).toBeLessThan(1);
    expect(state).toEqual({ position: 300, velocity: 0, settled: true });
  });

  it('overshoots a backward move by the same amount', () => {
    const forward = Math.max(...simulate(0, 300).positions) - 300;
    const backward = -Math.min(...simulate(300, 0).positions);

    expect(backward).toBeCloseTo(forward, 6);
    expect(simulate(300, 0).state).toEqual({ position: 0, velocity: 0, settled: true });
  });

  it('gives the same result for one long step as for many short steps', () => {
    const single = advanceSpring(0, 0, 300, 0.5);
    let stepped = { position: 0, velocity: 0 };

    for (let i = 0; i < 500; i++) {
      stepped = advanceSpring(stepped.position, stepped.velocity, 300, 0.001);
    }

    expect(stepped.position).toBeCloseTo(single.position, 6);
    expect(stepped.velocity).toBeCloseTo(single.velocity, 6);
  });

  it('settles immediately on the target for a huge time step', () => {
    [1, 60, 1e6, 1e12, Infinity].forEach(elapsed => {
      expect(advanceSpring(0, 0, 300, elapsed)).toEqual({
        position: 300,
        velocity: 0,
        settled: true
      });
    });
  });

  it('treats an invalid time step as no time passing', () => {
    [-1, -Infinity, NaN].forEach(elapsed => {
      expect(advanceSpring(0, 50, 300, elapsed)).toEqual(advanceSpring(0, 50, 300, 0));
    });
  });

  it('snaps to rest only when both close and slow', () => {
    expect(advanceSpring(300.005, 0.005, 300, 0)).toEqual({
      position: 300,
      velocity: 0,
      settled: true
    });
    expect(advanceSpring(300.005, 5, 300, 0)).toEqual({
      position: 300.005,
      velocity: 5,
      settled: false
    });
  });
});
