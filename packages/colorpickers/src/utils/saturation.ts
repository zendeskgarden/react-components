/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IHSVColor } from '../utils/types';

export function limit(value: number, max: number, min = 0) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }

  return value;
}

export function calculateNextHsv(
  e: MouseEvent,
  hue: number,
  container: HTMLDivElement,
  rtl: boolean
): IHSVColor {
  const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
  const x = typeof e.pageX === 'number' ? e.pageX : ((e as unknown) as TouchEvent).touches[0].pageX;
  const y = typeof e.pageY === 'number' ? e.pageY : ((e as unknown) as TouchEvent).touches[0].pageY;

  let left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  let top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  if (rtl) {
    left = containerWidth - left;
  }

  const saturation = left / containerWidth;
  const bright = 1 - top / containerHeight;

  return {
    h: hue,
    s: saturation,
    v: bright
  };
}
