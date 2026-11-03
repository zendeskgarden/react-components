/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

import DEFAULT_THEME from '../elements/theme';
import { ThemeProvider } from '../elements/ThemeProvider';
import type { IGardenTheme } from '../types';
import { useGardenTheme } from './useGardenTheme';

describe('useGardenTheme()', () => {
  const wrapper = (theme?: IGardenTheme) => {
    const Wrapper = ({ children }: PropsWithChildren) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );

    return Wrapper;
  };

  it('returns the theme from the closest ThemeProvider', () => {
    const { result } = renderHook(() => useGardenTheme(), { wrapper: wrapper() });

    expect(result.current).toEqual(DEFAULT_THEME);
  });

  it('returns a customized theme', () => {
    const theme = { ...DEFAULT_THEME, rtl: true } as IGardenTheme;
    const { result } = renderHook(() => useGardenTheme(), { wrapper: wrapper(theme) });

    expect(result.current.rtl).toBe(true);
  });

  it('throws without a ThemeProvider outside production', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(() => renderHook(() => useGardenTheme())).toThrow(
      'Garden components must be rendered inside a ThemeProvider'
    );

    spy.mockRestore();
  });

  it('returns no theme without a ThemeProvider in production', () => {
    vi.stubEnv('NODE_ENV', 'production');

    const { result } = renderHook(() => useGardenTheme());

    expect(result.current).toBeUndefined();

    vi.unstubAllEnvs();
  });
});
