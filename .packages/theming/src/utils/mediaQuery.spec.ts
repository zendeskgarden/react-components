/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import mediaQuery from './mediaQuery';

type TYPE_QUERY = 'up' | 'down' | 'only' | 'between';
type TYPE_BREAKPOINT = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TYPE_MAX_WIDTH = 'xs' | 'sm' | 'md' | 'lg';

const BREAKPOINTS = DEFAULT_THEME.breakpoints;
const MAX_WIDTHS = {
  xs: '575.98px',
  sm: '767.98px',
  md: '991.98px',
  lg: '1199.98px'
};

describe('mediaQuery', () => {
  describe('query = "up"', () => {
    it('applies the media query for the given breakpoint', () => {
      Object.keys(BREAKPOINTS).forEach(breakpoint => {
        const actual = mediaQuery('up', breakpoint as TYPE_BREAKPOINT);
        const expected = `@media (min-width: ${BREAKPOINTS[breakpoint as TYPE_BREAKPOINT]})`;

        expect(actual).toBe(expected);
      });
    });
  });

  describe('query = "down"', () => {
    it('applies the media query for the given breakpoint', () => {
      Object.keys(MAX_WIDTHS).forEach(breakpoint => {
        const actual = mediaQuery('down', breakpoint as TYPE_BREAKPOINT);
        const expected = `@media (max-width: ${MAX_WIDTHS[breakpoint as TYPE_MAX_WIDTH]})`;

        expect(actual).toBe(expected);
      });
    });

    it('applies the media query for the "xl" breakpoint', () => {
      const actual = mediaQuery('down', 'xl');
      const expected = `@media (min-width: ${BREAKPOINTS.xs})`;

      expect(actual).toBe(expected);
    });
  });

  describe('query = "only"', () => {
    it('applies the media query for the given breakpoint', () => {
      Object.keys(MAX_WIDTHS).forEach(breakpoint => {
        const actual = mediaQuery('only', breakpoint as TYPE_BREAKPOINT);
        const expected = `@media (min-width: ${
          BREAKPOINTS[breakpoint as TYPE_BREAKPOINT]
        }) and (max-width: ${MAX_WIDTHS[breakpoint as TYPE_MAX_WIDTH]})`;

        expect(actual).toBe(expected);
      });
    });

    it('applies the media query for the "xl" breakpoint', () => {
      const actual = mediaQuery('only', 'xl');
      const expected = `@media (min-width: ${BREAKPOINTS.xl})`;

      expect(actual).toBe(expected);
    });
  });

  describe('query = "between"', () => {
    it('applies the media query between "sm" and "md" breakpoints', () => {
      const actual = mediaQuery('between', ['sm', 'md']);
      const expected = `@media (min-width: ${BREAKPOINTS.sm}) and (max-width: ${MAX_WIDTHS.md})`;

      expect(actual).toBe(expected);
    });

    it('applies the media query between "xs" and "xl" breakpoints', () => {
      const actual = mediaQuery('between', ['xs', 'xl']);
      const expected = `@media (min-width: ${BREAKPOINTS.xs})`;

      expect(actual).toBe(expected);
    });
  });

  describe('errors', () => {
    it('throws when calling "between" with a single breakpoint', () => {
      const originalError = console.error;

      console.error = jest.fn();

      expect(() => mediaQuery('between', 'md')).toThrow();

      console.error = originalError;
    });

    it('throws when calling non-"between" with a breakpoint array', () => {
      const originalError = console.error;

      console.error = jest.fn();

      ['up', 'down', 'only'].forEach(query =>
        expect(() => mediaQuery(query as TYPE_QUERY, ['sm', 'lg'])).toThrow()
      );

      console.error = originalError;
    });
  });
});
