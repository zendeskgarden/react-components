/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  ColorScheme,
  IColorSchemeContext,
  IColorSchemeProviderProps,
  IGardenTheme
} from '../types';

const useColorScheme = (initialState?: ColorScheme, colorSchemeKey = 'color-scheme') => {
  /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
  const localStorage = typeof window === 'undefined' ? undefined : window.localStorage;
  const mediaQuery =
    typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)');

  const getState = useCallback(
    (_state?: ColorScheme | null) => {
      const isSystem = _state === 'system' || _state === undefined || _state === null;
      let colorScheme: IGardenTheme['colors']['base'];

      if (isSystem) {
        colorScheme = mediaQuery?.matches ? 'dark' : 'light';
      } else {
        colorScheme = _state;
      }

      return { isSystem, colorScheme };
    },
    [mediaQuery?.matches]
  );

  const [state, setState] = useState<{
    isSystem: boolean;
    colorScheme: IGardenTheme['colors']['base'];
  }>(getState((localStorage?.getItem(colorSchemeKey) as ColorScheme) || initialState));

  useEffect(() => {
    // Listen for changes to the system color scheme
    /* istanbul ignore next */
    const eventListener = () => {
      setState(getState('system'));
    };

    if (state.isSystem) {
      mediaQuery?.addEventListener('change', eventListener);
    } else {
      mediaQuery?.removeEventListener('change', eventListener);
    }

    return () => {
      mediaQuery?.removeEventListener('change', eventListener);
    };
  }, [getState, state.isSystem, mediaQuery]);

  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: (colorScheme: ColorScheme) => {
      setState(getState(colorScheme));
      localStorage?.setItem(colorSchemeKey, colorScheme);
    }
  };
};

export const ColorSchemeContext = createContext<IColorSchemeContext | undefined>(undefined);

export const ColorSchemeProvider = ({
  children,
  colorSchemeKey,
  initialColorScheme
}: PropsWithChildren<IColorSchemeProviderProps>) => {
  const { isSystem, colorScheme, setColorScheme } = useColorScheme(
    initialColorScheme,
    colorSchemeKey
  );
  const contextValue = useMemo(
    () => ({ colorScheme, isSystem, setColorScheme }),
    [isSystem, colorScheme, setColorScheme]
  );

  return <ColorSchemeContext.Provider value={contextValue}>{children}</ColorSchemeContext.Provider>;
};
