/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { render } from 'garden-test-utils';
import { useColorScheme } from './useColorScheme';
import { ThemeProvider } from '../elements/ThemeProvider';

const ColorSchemeConsumer = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(
    () => {
      setColorScheme('system');
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    []
  );

  return <div>{!!colorScheme && 'it worked'}</div>;
};

describe('useColorScheme', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      }))
    });
  });

  it('works as expected when called within `<ThemeProvider initialColorScheme={...}>`', () => {
    const Test = () => (
      <ThemeProvider initialColorScheme="light">
        <ColorSchemeConsumer />
      </ThemeProvider>
    );

    expect(() => {
      render(<Test />);
    }).not.toThrow();

    /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
    expect(window.localStorage.getItem('color-scheme')).toBe('system');
  });

  describe('Errors', () => {
    let originalError: typeof console.error;

    beforeEach(() => {
      originalError = console.error;
      console.error = jest.fn();
    });

    it('throws if called outside of `ThemeProvider`', () => {
      const Test = () => <ColorSchemeConsumer />;

      expect(() => {
        render(<Test />);
      }).toThrow();
    });

    it('throws if called inside of `ThemeProvider` without `initialColorScheme`', () => {
      const Test = () => (
        <ThemeProvider>
          <ColorSchemeConsumer />
        </ThemeProvider>
      );

      expect(() => {
        render(<Test />);
      }).toThrow();
    });

    afterEach(() => {
      console.error = originalError;
    });
  });
});
