/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PALETTE from '../elements/palette';
import DEFAULT_THEME from '../elements/theme';
import { IGardenTheme } from '../types';
import { getHueColor } from './getHueColor';

const DARK_THEME: IGardenTheme = {
  ...DEFAULT_THEME,
  colors: { ...DEFAULT_THEME.colors, base: 'dark' }
};

describe('getHueColor', () => {
  it.each([['light'], ['dark']])('gets the %s mode color specified by variable', mode => {
    const color = getHueColor({
      theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME,
      value: 'background.primaryEmphasis'
    });
    const expected = mode === 'dark' ? PALETTE.blue[600] : PALETTE.blue[700];

    expect(color).toBe(expected);
  });

  it.each([['light'], ['dark']])('gets the %s mode color specified by hue', mode => {
    const color = getHueColor({
      theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME,
      value: 'red'
    });
    const expected = mode === 'dark' ? PALETTE.red[600] : PALETTE.red[700];

    expect(color).toBe(expected);
  });

  it.each([['light'], ['dark']])('gets the %s mode color specified by key hue', mode => {
    const color = getHueColor({
      theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME,
      value: 'successHue'
    });
    const expected = mode === 'dark' ? PALETTE.green[600] : PALETTE.green[700];

    expect(color).toBe(expected);
  });

  describe('CSS colors', () => {
    it('returns hex as expected', () => {
      const value = '#ff0000';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns short hex as expected', () => {
      const value = '#f00';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns 8-digit hex as expected', () => {
      const value = '#ff000080';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns rgb as expected', () => {
      const value = 'rgb(255, 0, 0)';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns rgba as expected', () => {
      const value = 'rgba(255, 0, 0, 0.5)';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns hsl as expected', () => {
      const value = 'hsl(120, 100%, 50%)';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns hsla as expected', () => {
      const value = 'hsla(120, 100%, 50%, 0.5)';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });

    it('returns keyword color as expected', () => {
      const value = 'aliceblue';
      const color = getHueColor({ theme: DEFAULT_THEME, value });

      expect(color).toBe(value);
    });
  });
});
