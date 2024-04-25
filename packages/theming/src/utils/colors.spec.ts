/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getCustomColorScale, isValidColor } from './colors';
import { getContrast } from 'polished';

describe('getCustomColorScale', () => {
  it('generates a custom color palette from valid hue', () => {
    expect(getCustomColorScale('#2770c3')).toStrictEqual({
      '100': '#f3f7fc',
      '200': '#e4edf7',
      '300': '#d1e0f2',
      '400': '#97bae2',
      '500': '#6e9fd7',
      '600': '#5790d0',
      '700': '#2870c3',
      '800': '#174375',
      '900': '#12345b',
      '1000': '#0d243f',
      '1100': '#091b2e',
      '1200': '#050d17'
    });
  });

  it('generates a custom color palette with contrast ratio closely aligned with Garden target ratios', () => {
    const targetRatios = {
      100: 1.08,
      200: 1.2,
      300: 1.35,
      400: 2,
      500: 2.8,
      600: 3.3,
      700: 5,
      800: 10,
      900: 13,
      1000: 16,
      1100: 17.5,
      1200: 19.5
    };

    Object.entries(getCustomColorScale('#2770c3')).forEach(([key, value]) => {
      expect(Math.abs((targetRatios as any)[key] - getContrast('#ffffff', value)) <= 0.5).toBe(
        true
      );
    });
  });

  it('throws if hue is not a valid color', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => getCustomColorScale('badColor')).toThrow();

    console.error = originalError;
  });
});

describe('isValidColor', () => {
  it('detects valid and invalid color arguments', () => {
    expect(isValidColor('#2770c3')).toBe(true);
    expect(isValidColor('badColor')).toBe(false);
  });
});
