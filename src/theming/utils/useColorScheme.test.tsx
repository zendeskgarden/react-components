/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { ColorSchemeProvider } from '../elements/ColorSchemeProvider';
import { useColorScheme } from './useColorScheme';

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
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
      }))
    });
  });

  it('bypasses localStorage as expected', () => {
    const Test = () => (
      <ColorSchemeProvider colorSchemeKey={null}>
        <ColorSchemeConsumer />
      </ColorSchemeProvider>
    );

    expect(() => {
      render(<Test />);
    }).not.toThrow();

    /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
    expect(window.localStorage.getItem('color-scheme')).toBeNull();
  });

  it('sets the color scheme as expected', () => {
    const Test = () => (
      <ColorSchemeProvider initialColorScheme="light">
        <ColorSchemeConsumer />
      </ColorSchemeProvider>
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
      console.error = vi.fn();
    });

    it('throws if called outside of `ColorSchemeProvider`', () => {
      const Test = () => <ColorSchemeConsumer />;

      expect(() => {
        render(<Test />);
      }).toThrow();
    });

    afterEach(() => {
      console.error = originalError;
    });
  });
});
