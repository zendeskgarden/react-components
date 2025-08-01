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
import PropTypes from 'prop-types';
import {
  ColorScheme,
  IColorSchemeContext,
  IColorSchemeProviderProps,
  IGardenTheme
} from '../types';

const mediaQuery =
  typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)');

const useColorScheme = (
  initialState: ColorScheme,
  colorSchemeKey: IColorSchemeProviderProps['colorSchemeKey']
) => {
  const localStorage =
    /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
    typeof window === 'undefined' || colorSchemeKey === null ? undefined : window.localStorage;

  const getState = useCallback((_state?: ColorScheme | null) => {
    const isSystem = _state === 'system' || _state === undefined || _state === null;
    let colorScheme: IGardenTheme['colors']['base'];

    if (isSystem) {
      colorScheme = mediaQuery?.matches ? 'dark' : 'light';
    } else {
      colorScheme = _state;
    }

    return { isSystem, colorScheme };
  }, []);

  const [state, setState] = useState<{
    isSystem: boolean;
    colorScheme: IGardenTheme['colors']['base'];
  }>(getState((localStorage?.getItem(colorSchemeKey!) as ColorScheme) || initialState));

  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: (colorScheme: ColorScheme) => {
      setState(getState(colorScheme));
      localStorage?.setItem(colorSchemeKey!, colorScheme);
    }
  };
};

export const ColorSchemeContext = createContext<IColorSchemeContext | undefined>(undefined);

export const ColorSchemeProvider = ({
  children,
  colorSchemeKey = 'color-scheme',
  initialColorScheme = 'system'
}: PropsWithChildren<IColorSchemeProviderProps>) => {
  const { isSystem, colorScheme, setColorScheme } = useColorScheme(
    initialColorScheme,
    colorSchemeKey
  );
  const contextValue = useMemo(
    () => ({ colorScheme, isSystem, setColorScheme }),
    [isSystem, colorScheme, setColorScheme]
  );

  useEffect(() => {
    // Listen for changes to the system color scheme
    /* istanbul ignore next */
    const eventListener = () => {
      setColorScheme('system');
    };

    if (isSystem) {
      mediaQuery?.addEventListener('change', eventListener);
    } else {
      mediaQuery?.removeEventListener('change', eventListener);
    }

    return () => {
      mediaQuery?.removeEventListener('change', eventListener);
    };
  }, [isSystem, setColorScheme]);

  return <ColorSchemeContext.Provider value={contextValue}>{children}</ColorSchemeContext.Provider>;
};

ColorSchemeProvider.propTypes = {
  colorSchemeKey: PropTypes.string,
  initialColorScheme: PropTypes.oneOf(['light', 'dark', 'system'])
};
