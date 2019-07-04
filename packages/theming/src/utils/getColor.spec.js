/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import getColor from './getColor';
import palette from '../palette';
import defaultTheme from '../theme';
import { darken, lighten } from 'polished';

const defaultShade = 600;

describe('getColor', () => {
  describe('by hue', () => {
    it('gets the primary hue when none is specified', () => {
      const color = getColor();
      const expected = palette[defaultTheme.colors.primaryHue][defaultShade];

      expect(color).toBe(expected);
    });

    it('gets the hue specified by string', () => {
      const color = getColor({ hue: 'red' });
      const expected = palette.red[defaultShade];

      expect(color).toBe(expected);
    });

    it('gets the hue specified by object', () => {
      const color = getColor({ hue: palette.green });
      const expected = palette.green[defaultShade];

      expect(color).toBe(expected);
    });

    it('falls back when the hue is off palette', () => {
      const expected = 'orchid';
      const color = getColor({ hue: expected });

      expect(color).toBe(expected);
    });
  });

  describe('by shade', () => {
    it('gets the specified shade of hue', () => {
      const color = getColor({ hue: 'red', shade: 100 });
      const expected = palette.red[100];

      expect(color).toBe(expected);
    });

    it('darkens the color if shade is greater than what exists within the hue', () => {
      const color = getColor({ hue: 'blue', shade: 900 });
      const expected = darken(0.05, palette.blue[800]);

      expect(color).toBe(expected);
    });

    it('lightens the color if shade is lesser than what what exists within the hue', () => {
      const color = getColor({ hue: 'blue', shade: 0 });
      const expected = lighten(0.05, palette.blue[100]);

      expect(color).toBe(expected);
    });

    it('is undefined if shade is invalid', () => {
      const color = getColor({ shade: 'foo' });

      expect(color).toBeUndefined();
    });
  });

  describe('by theme', () => {
    let theme;

    beforeEach(() => {
      theme = {
        colors: {
          primaryHue: 'test'
        },
        palette: {
          test: {
            400: '#400',
            600: '#600'
          }
        }
      };
    });

    it('resolves when only theme is specified', () => {
      const color = getColor({ theme });
      const expected = theme.palette[theme.colors.primaryHue][defaultShade];

      expect(color).toBe(expected);
    });

    it('falls back when hue is off palette', () => {
      const expected = 'blue';
      const color = getColor({ hue: expected, theme });

      expect(color).toBe(expected);
    });

    it('gets the specified color from the theme', () => {
      const color = getColor({ hue: 'test', shade: 400, theme });
      const expected = theme.palette.test[400];

      expect(color).toBe(expected);
    });
  });
});
