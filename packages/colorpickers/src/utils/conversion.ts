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

export function rgbToHsv(r: number, g: number, b: number) {
  let h = NaN;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // hue
  if (delta === 0) {
    h = 0;
  } else if (r === max) {
    h = ((g - b) / delta) % 6;
  } else if (g === max) {
    h = (b - r) / delta + 2;
  } else if (b === max) {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  // saturation
  const s = Math.round((max === 0 ? 0 : delta / max) * 100);

  // value
  const v = Math.round((max / 255) * 100);

  return { h, s, v };
}

export function hsvToRgb(h: number, s: number, v: number) {
  let saturation = s;
  let value = v;

  saturation = saturation / 100;
  value = value / 100;

  let rgb: number[] = [];

  const c = value * saturation;
  const hh = h / 60;
  const x = c * (1 - Math.abs((hh % 2) - 1));
  const m = value - c;

  switch (Math.floor(hh)) {
    case 0:
      rgb = [c, x, 0];
      break;

    case 1:
      rgb = [x, c, 0];
      break;

    case 2:
      rgb = [0, c, x];
      break;

    case 3:
      rgb = [0, x, c];
      break;

    case 4:
      rgb = [x, 0, c];
      break;

    case 5:
      rgb = [c, 0, x];
      break;

    default:
  }

  return {
    r: Math.round(255 * (rgb[0] + m)),
    g: Math.round(255 * (rgb[1] + m)),
    b: Math.round(255 * (rgb[2] + m))
  };
}

export function rgbToHsl(r: number, g: number, b: number) {
  const hsv = rgbToHsv(r, g, b);

  return hsvToHsl(hsv.h, hsv.s, hsv.v);
}

export function rgbToHex(r: number, g: number, b: number) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
