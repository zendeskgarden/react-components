/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useLayoutEffect, useRef } from 'react';

import { advanceSpring } from '../shared/spring';
import type { ITabIndicatorGeometry } from './useTabIndicatorGeometry';

interface IMotion {
  offset: number;
  velocity: number;
  size: number;
  sizeVelocity: number;
}

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * Paints the selection indicator. A selection change springs to the new tab;
 * the first placement, a resize and reduced motion snap into position.
 *
 * @param {ITabIndicatorGeometry} [geometry] The geometry of the selected tab
 * @param {boolean} isVertical Whether the tabs are stacked
 *
 * @returns A ref for the indicator element
 */
export const useTabIndicatorMotion = (
  geometry: ITabIndicatorGeometry | undefined,
  isVertical: boolean
) => {
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const motion = useRef<IMotion | undefined>(undefined);

  useBrowserLayoutEffect(() => {
    const element = indicatorRef.current;

    if (!element || !geometry) {
      motion.current = undefined;

      return undefined;
    }

    const paint = (offset: number, size: number) => {
      element.style.transform = `${isVertical ? 'translateY' : 'translateX'}(${offset}px)`;
      element.style.setProperty(isVertical ? 'height' : 'width', `${size}px`);
      element.style.removeProperty(isVertical ? 'width' : 'height');
    };

    const state = motion.current;
    const isReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!state || !geometry.isAnimated || isReduced) {
      motion.current = {
        offset: geometry.offset,
        velocity: 0,
        size: geometry.size,
        sizeVelocity: 0
      };
      paint(geometry.offset, geometry.size);

      return undefined;
    }

    let frame: number | undefined;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const elapsed = Math.max(0, time - previousTime) / 1000;

      previousTime = time;

      /* Retargeting keeps the current velocity, so quick changes stay smooth. */
      const offset = advanceSpring(state.offset, state.velocity, geometry.offset, elapsed);
      const size = advanceSpring(state.size, state.sizeVelocity, geometry.size, elapsed);

      Object.assign(state, {
        offset: offset.position,
        velocity: offset.velocity,
        size: size.position,
        sizeVelocity: size.velocity
      });
      paint(state.offset, state.size);
      frame = offset.settled && size.settled ? undefined : requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }
    };
  }, [geometry, isVertical]);

  return indicatorRef;
};
