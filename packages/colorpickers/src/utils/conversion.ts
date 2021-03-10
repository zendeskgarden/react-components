/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export function hslToHsv(h: number, s: number, l: number) {
  let saturation = s;

  saturation *= (l < 50 ? l : 100 - l) / 100;
  const v = l + saturation;

  return {
    h,
    s: v === 0 ? 0 : ((2 * saturation) / v) * 100,
    v
  };
}

export function hsvToHsl(h: number, s: number, v: number) {
  let saturation = s;
  let value = v;

  saturation /= 100;
  value /= 100;

  let l = (2 - saturation) * value;
  let sl = saturation * value;

  sl /= l <= 1 ? l : 2 - l;
  sl = sl || 0;
  l /= 2;

  return { h, s: sl * 100, l: l * 100 };
}
