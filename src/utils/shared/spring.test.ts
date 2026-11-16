/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { describe, expect, it } from 'vitest';

import { advanceSpring } from './spring';

describe('advanceSpring', () => {
  it('stays put when it starts at rest on the target', () => {
    expect(advanceSpring(50, 0, 50, 0.016)).toEqual({ position: 50, velocity: 0, settled: true });
  });

  it('moves toward the target without settling on the first step', () => {
    const { position, settled } = advanceSpring(0, 0, 100, 0.016);

    expect(position).toBeGreaterThan(0);
    expect(position).toBeLessThan(100);
    expect(settled).toBe(false);
  });

  it('overshoots the target by a small amount', () => {
    let state = { position: 0, velocity: 0, settled: false };
    let peak = 0;

    for (let i = 0; i < 300 && !state.settled; i++) {
      state = advanceSpring(state.position, state.velocity, 100, 0.016);
      peak = Math.max(peak, state.position);
    }

    expect(peak).toBeGreaterThan(100);
    expect(peak).toBeLessThan(105);
  });

  it('settles exactly on the target', () => {
    let state = { position: 0, velocity: 0, settled: false };

    for (let i = 0; i < 300 && !state.settled; i++) {
      state = advanceSpring(state.position, state.velocity, 100, 0.016);
    }

    expect(state).toEqual({ position: 100, velocity: 0, settled: true });
  });

  it('settles after a long step', () => {
    expect(advanceSpring(0, 0, 100, 10)).toEqual({ position: 100, velocity: 0, settled: true });
  });

  it('keeps its velocity when the target changes', () => {
    const moving = advanceSpring(0, 0, 100, 0.05);
    const retargeted = advanceSpring(moving.position, moving.velocity, 200, 0.016);

    expect(retargeted.position).toBeGreaterThan(moving.position);
  });
});
