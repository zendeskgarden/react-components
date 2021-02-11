/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export interface IColor {
  hex: string;
  hue: number;
  saturation: number;
  lightness: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface IHSVColor {
  h: number;
  s: number;
  v: number;
}

export interface IHSLColor {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export interface IRGBColor {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}
