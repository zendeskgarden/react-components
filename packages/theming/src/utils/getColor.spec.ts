/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from './getColor';
import DEFAULT_THEME from '../elements/theme';
import PALETTE from '../elements/palette';
import { IGardenTheme } from '../types';
import { darken, lighten, rgba } from 'polished';
import { parseToRgba } from 'color2k';

const DARK_THEME: IGardenTheme = {
  ...DEFAULT_THEME,
  colors: { ...DEFAULT_THEME.colors, base: 'dark' }
};

describe('getColor', () => {
  describe('by variable', () => {
    it.each([['light'], ['dark']])('gets the %s mode color specified by string', mode => {
      const color = getColor({
        theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME,
        variable: 'background.default'
      });
      const expected = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(color).toBe(expected);
    });

    it('accepts literal color values', () => {
      const expected = '#fd5a1e';
      const theme: IGardenTheme = {
        ...DEFAULT_THEME,
        colors: {
          ...DEFAULT_THEME.colors,
          variables: {
            ...DEFAULT_THEME.colors.variables,
            light: {
              ...DEFAULT_THEME.colors.variables.light,
              background: { test: expected }
            }
          }
        }
      };
      const color = getColor({ theme, variable: 'background.test' });

      expect(color).toBe(expected);
    });

    it('uses `DEFAULT_THEME` fallback for malformed variables', () => {
      const theme: IGardenTheme = {
        ...DEFAULT_THEME,
        colors: { ...DEFAULT_THEME.colors, variables: {} }
      } as IGardenTheme;
      const color = getColor({ theme, variable: 'background.default' });

      expect(color).toBe(PALETTE.white);
    });

    describe('with rbga', () => {
      it.each([['light'], ['dark']])('gets the expected %s mode color with opacity', mode => {
        const color = getColor({
          theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME,
          variable: 'background.disabled'
        });
        const transparency = 0.08;
        const expected = rgba(PALETTE.grey[mode === 'dark' ? 500 : 700], transparency);

        expect(color).toBe(expected);
      });

      it('accepts a literal color parameter', () => {
        const theme: IGardenTheme = {
          ...DEFAULT_THEME,
          colors: {
            ...DEFAULT_THEME.colors,
            variables: {
              ...DEFAULT_THEME.colors.variables,
              light: {
                ...DEFAULT_THEME.colors.variables.light,
                background: { test: 'rgba(#fd5a1e, 0.5)' }
              }
            }
          }
        };
        const color = getColor({ theme, variable: 'background.test' });

        expect(color).toBe(rgba('#fd5a1e', 0.5));
      });
    });
  });

  describe('by hue', () => {
    it.each([['light'], ['dark']])('gets the %s mode color specified by string', mode => {
      const color = getColor({ theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME, hue: 'red' });
      const expected = mode === 'dark' ? PALETTE.red[500] : PALETTE.red[700];

      expect(color).toBe(expected);
    });

    it('accepts CSS keywords', () => {
      expect(getColor({ theme: DEFAULT_THEME, hue: 'currentcolor' })).toBe('currentcolor');
      expect(getColor({ theme: DEFAULT_THEME, hue: 'inherit' })).toBe('inherit');
      expect(getColor({ theme: DEFAULT_THEME, hue: 'transparent' })).toBe('transparent');
    });

    it('applies mode hue as expected', () => {
      const color = getColor({ theme: DARK_THEME, hue: 'red', dark: { hue: 'green' } });
      const expected = PALETTE.green[500];

      expect(color).toBe(expected);
    });

    it.each([['white'], ['black']])('handles %s theme palette value', hue => {
      const color = getColor({ theme: DEFAULT_THEME, hue });
      const expected = (PALETTE as any)[hue];

      expect(color).toBe(expected);
    });

    describe('by `theme.color` key', () => {
      it.each([
        ['primaryHue', 'light'],
        ['primaryHue', 'dark'],
        ['successHue', 'light'],
        ['successHue', 'dark'],
        ['dangerHue', 'light'],
        ['dangerHue', 'dark'],
        ['warningHue', 'light'],
        ['warningHue', 'dark'],
        ['neutralHue', 'light'],
        ['neutralHue', 'dark'],
        ['chromeHue', 'light'],
        ['chromeHue', 'dark']
      ])('gets the default %s for %s mode', (hue, mode) => {
        const color = getColor({ theme: mode === 'dark' ? DARK_THEME : DEFAULT_THEME, hue });
        const shade = mode === 'dark' ? 500 : 700;
        const expected = (PALETTE as any)[(DEFAULT_THEME as any).colors[hue]][shade];

        expect(color).toBe(expected);
      });
    });

    it('uses `DEFAULT_THEME` fallback for malformed palette', () => {
      const theme: IGardenTheme = {
        ...DEFAULT_THEME,
        palette: {}
      } as IGardenTheme;
      const color = getColor({ theme, hue: 'fuschia' });
      const expected = PALETTE.fuschia[700];

      expect(color).toBe(expected);
    });

    it('uses `DEFAULT_THEME` fallback for malformed colors', () => {
      const theme: IGardenTheme = {
        ...DEFAULT_THEME,
        colors: {}
      } as IGardenTheme;
      const hue = 'successHue';
      const color = getColor({ theme, hue });
      const expected = (PALETTE as any)[(DEFAULT_THEME as any).colors[hue]][700];

      expect(color).toBe(expected);
    });
  });

  describe('by shade', () => {
    it('gets the specified shade of hue', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'red', shade: 100 });
      const expected = PALETTE.red[100];

      expect(color).toBe(expected);
    });

    it('applies mode shade as expected', () => {
      const color = getColor({ theme: DARK_THEME, hue: 'red', shade: 100, dark: { shade: 200 } });
      const expected = PALETTE.red[200];

      expect(color).toBe(expected);
    });

    it('handles inbetween shades as expected', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'red', shade: 150 });
      const expected = darken(0.025, PALETTE.red[100]);

      expect(color).toBe(expected);
    });

    it('darkens the color if shade is greater than what exists within the hue', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'blue', shade: 1300 });
      const expected = darken(0.05, PALETTE.blue[1200]);

      expect(color).toBe(expected);
    });

    it('lightens the color if shade is lesser than what what exists within the hue', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'blue', shade: 0 });
      const expected = lighten(0.05, PALETTE.blue[100]);

      expect(color).toBe(expected);
    });

    it('generates color for a custom hex palette hue with unspecified shade', () => {
      const theme = { ...DEFAULT_THEME, palette: { custom: '#fd5a1e' } };
      const adjustedColor = getColor({ theme, hue: 'custom', shade: 600 });

      expect(!!parseToRgba(adjustedColor)).toBe(true);

      theme.palette.custom = adjustedColor;

      const unadjustedColor = getColor({ theme, hue: 'custom' });

      expect(unadjustedColor).toBe(adjustedColor);
    });
  });

  describe('by offset', () => {
    it('applies offset as expected', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'blue', offset: 100 });
      const expected = PALETTE.blue[800];

      expect(color).toBe(expected);
    });

    it('applies mode offset as expected', () => {
      const color = getColor({
        theme: DARK_THEME,
        hue: 'blue',
        offset: 100,
        dark: { offset: -100 }
      });
      const expected = PALETTE.blue[400];

      expect(color).toBe(expected);
    });

    it('handles inbetween offset as expected', () => {
      const color = getColor({ theme: DEFAULT_THEME, hue: 'blue', offset: 150 });
      const expected = darken(0.025, PALETTE.blue[800]);

      expect(color).toBe(expected);
    });
  });

  describe('by transparency', () => {
    it('applies transparency as expected', () => {
      const hue = 'blue';
      const transparency = 0.5;
      const color = getColor({ theme: DEFAULT_THEME, hue, transparency });
      const expected = rgba(PALETTE[hue][700], transparency);

      expect(color).toBe(expected);
    });

    it('applies transparency via theme `opacity` as expected', () => {
      const hue = 'blue';
      const transparency = 1000;
      const color = getColor({ theme: DEFAULT_THEME, hue, transparency });
      const expected = rgba(PALETTE[hue][700], DEFAULT_THEME.opacity[1000]);

      expect(color).toBe(expected);
    });

    it('applies mode transparency as expected', () => {
      const hue = 'blue';
      const transparency = 0.5;
      const color = getColor({
        theme: DARK_THEME,
        hue,
        transparency,
        dark: { transparency: 0.25 }
      });
      const expected = rgba(PALETTE[hue][500], 0.25);

      expect(color).toBe(expected);
    });
  });

  describe('by theme', () => {
    let theme: IGardenTheme;

    beforeEach(() => {
      theme = {
        ...DEFAULT_THEME,
        colors: {
          ...DEFAULT_THEME.colors,
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

    it('gets the specified color from the theme', () => {
      const color = getColor({ theme, hue: 'test', shade: 400 });
      const expected = theme.palette.test[400];

      expect(color).toBe(expected);
    });
  });

  describe('precedence', () => {
    const ARGUMENTS = {
      hue: 'blue',
      shade: 600,
      offset: 100,
      transparency: 0.5
    };

    it('overrides arguments based on mode', () => {
      const color = getColor({
        theme: DEFAULT_THEME,
        ...ARGUMENTS,
        light: { hue: 'red', shade: 500, offset: -100, transparency: 0.25 }
      });
      const expected = rgba(PALETTE.red[400], 0.25);

      expect(color).toBe(expected);
    });

    it('falls back to default arguments if not provided by mode', () => {
      const color = getColor({
        theme: DARK_THEME,
        ...ARGUMENTS,
        dark: { hue: 'kale', offset: -100 }
      });
      const expected = rgba(PALETTE.kale[500], ARGUMENTS.transparency);

      expect(color).toBe(expected);
    });

    it.each([['light'], ['dark']])(
      'ensures %s mode variable lookup takes precedence over other arguments',
      mode => {
        const theme = mode === 'dark' ? DARK_THEME : DEFAULT_THEME;
        const { hue, shade } = ARGUMENTS;
        const color = getColor({ theme, hue, shade, variable: 'foreground.default' });
        const expected = mode === 'dark' ? PALETTE.grey[300] : PALETTE.grey[900];

        expect(color).toBe(expected);
      }
    );

    it.each([['light'], ['dark']])(
      'ensures variable lookup uses `offset` and `transparency` arguments in %s mode',
      mode => {
        const theme = mode === 'dark' ? DARK_THEME : DEFAULT_THEME;
        const color = getColor({ theme, ...ARGUMENTS, variable: 'foreground.default' });
        const expected = rgba(
          mode === 'dark' ? PALETTE.grey[400] : PALETTE.grey[1000],
          ARGUMENTS.transparency
        );

        expect(color).toBe(expected);
      }
    );

    it.each([['light'], ['dark']])(
      'ensures variable lookup prefers mode fallback arguments in %s mode',
      mode => {
        const theme = mode === 'dark' ? DARK_THEME : DEFAULT_THEME;
        const color = getColor({
          theme,
          ...ARGUMENTS,
          variable: 'border.default',
          light: { offset: 0, transparency: 0 },
          dark: { offset: -100, transparency: 0 }
        });
        const expected = mode === 'dark' ? PALETTE.grey[700] : PALETTE.grey[300];

        expect(color).toBe(expected);
      }
    );
  });

  describe('errors', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('does not throw a memoization key error when the theme is invalid', () => {
      const test = () => getColor({ theme: {} as any, variable: 'background.default' });

      expect(test).not.toThrow('Invalid value used as weak map key');
    });

    it('throws an error if color arguments are missing', () => {
      expect(() => getColor({ theme: DEFAULT_THEME })).toThrow(Error);
    });

    it('throws an error when variable reference is invalid', () => {
      expect(() => getColor({ theme: DEFAULT_THEME, variable: 'invalid.key' })).toThrow(
        ReferenceError
      );
    });

    it('throws an error when variable reference does not resolve to a string', () => {
      expect(() => getColor({ theme: DEFAULT_THEME, variable: 'background' })).toThrow(Error);
    });

    it('throws an error when hue is off palette', () => {
      expect(() => getColor({ theme: DEFAULT_THEME, hue: 'missing' })).toThrow(Error);
    });

    it('throws an error if a shade cannot be combined with a hue keyword', () => {
      expect(() => getColor({ theme: DEFAULT_THEME, hue: 'inherit', shade: 500 })).toThrow(Error);
    });

    it('throws an error if shade is invalid', () => {
      expect(() => getColor({ theme: DEFAULT_THEME, hue: 'blue', shade: NaN })).toThrow(TypeError);
    });

    it('throws an error if transparency is invalid', () => {
      const invalid = DEFAULT_THEME.opacity[100] + 1;

      expect(() => getColor({ theme: DEFAULT_THEME, hue: 'blue', transparency: invalid })).toThrow(
        Error
      );
    });

    it('throws an error if rgba is invalid', () => {
      const theme: IGardenTheme = {
        ...DEFAULT_THEME,
        colors: {
          ...DEFAULT_THEME.colors,
          variables: {
            ...DEFAULT_THEME.colors.variables,
            light: {
              ...DEFAULT_THEME.colors.variables.light,
              background: { test: 'rgba(invalid)' }
            }
          }
        }
      };
      expect(() => getColor({ theme, variable: 'background.test' })).toThrow(Error);
    });
  });
});
