/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColorV8 } from './getColorV8';
import PALETTE from '../elements/palette';
import DEFAULT_THEME from '../elements/theme';
import { darken, lighten, rgba } from 'polished';

const DEFAULT_SHADE = 600;

describe('getColorV8', () => {
  describe('by hue', () => {
    it('gets the hue specified by string', () => {
      const color = getColorV8('red');
      const expected = PALETTE.red[DEFAULT_SHADE];

      expect(color).toBe(expected);
    });

    it('gets the hue specified by object', () => {
      const color = getColorV8(PALETTE.green);
      const expected = PALETTE.green[DEFAULT_SHADE];

      expect(color).toBe(expected);
    });

    it('falls back when the hue is off palette', () => {
      const expected = 'orchid';
      const color = getColorV8(expected);

      expect(color).toBe(expected);
    });

    describe('by `color` key', () => {
      it('gets the default background color', () => {
        const color = getColorV8('background');
        const expected = DEFAULT_THEME.colors.background;

        expect(color).toBe(expected);
      });

      it('gets the default foreground color', () => {
        const color = getColorV8('foreground');
        const expected = DEFAULT_THEME.colors.foreground;

        expect(color).toBe(expected);
      });

      it('gets the default primary color', () => {
        const color = getColorV8('primaryHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.primaryHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });

      it('gets the default danger color', () => {
        const color = getColorV8('dangerHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.dangerHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });

      it('gets the default warning color', () => {
        const color = getColorV8('warningHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.warningHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });

      it('gets the default success color', () => {
        const color = getColorV8('successHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.successHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });

      it('gets the default neutral color', () => {
        const color = getColorV8('neutralHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.neutralHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });

      it('gets the default chrome color', () => {
        const color = getColorV8('chromeHue');
        const expected = (PALETTE as any)[DEFAULT_THEME.colors.chromeHue][DEFAULT_SHADE];

        expect(color).toBe(expected);
      });
    });
  });

  describe('by shade', () => {
    it('gets the specified shade of hue', () => {
      const color = getColorV8('red', 100);
      const expected = PALETTE.red[100];

      expect(color).toBe(expected);
    });

    it('darkens the color if shade is greater than what exists within the hue', () => {
      const color = getColorV8('blue', 900);
      const expected = darken(0.05, PALETTE.blue[800]);

      expect(color).toBe(expected);
    });

    it('darkens a non-hue color if shade is greater than the default', () => {
      const hex = '#fd5a1e';
      const color = getColorV8(hex, DEFAULT_SHADE + 100);
      const expected = darken(0.05, hex);

      expect(color).toBe(expected);
    });

    it('lightens the color if shade is lesser than what what exists within the hue', () => {
      const color = getColorV8('blue', 0);
      const expected = lighten(0.05, PALETTE.blue[100]);

      expect(color).toBe(expected);
    });

    it('lightens a non-hue color if shade is greater than the default', () => {
      const hex = '#fd5a1e';
      const color = getColorV8(hex, DEFAULT_SHADE - 100);
      const expected = lighten(0.05, hex);

      expect(color).toBe(expected);
    });

    it('is undefined if shade is invalid', () => {
      const color = getColorV8('red', NaN);

      expect(color).toBeUndefined();
    });
  });

  describe('by theme', () => {
    let theme: any;

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

    it('falls back when hue is off palette', () => {
      const expected = 'blue';
      const color = getColorV8(expected, undefined, theme);

      expect(color).toBe(expected);
    });

    it('gets the specified color from the theme', () => {
      const color = getColorV8('test', 400, theme);
      const expected = theme.palette.test[400];

      expect(color).toBe(expected);
    });
  });

  describe('by transparency', () => {
    it('resolves when only hue and transparency is specified', () => {
      const transparency = 0.5;
      const expected = rgba(
        (PALETTE as any)[DEFAULT_THEME.colors.primaryHue][DEFAULT_SHADE],
        transparency
      );
      const color = getColorV8('primaryHue', undefined, undefined, transparency);

      expect(color).toBe(expected);
    });
  });
});
