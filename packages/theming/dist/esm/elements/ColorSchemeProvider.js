/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { createContext, useMemo, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const mediaQuery = typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)');
const useColorScheme = (initialState, colorSchemeKey) => {
  const localStorage =
  typeof window === 'undefined' || colorSchemeKey === null ? undefined : window.localStorage;
  const getState = useCallback(_state => {
    const isSystem = _state === 'system' || _state === undefined || _state === null;
    let colorScheme;
    if (isSystem) {
      colorScheme = mediaQuery?.matches ? 'dark' : 'light';
    } else {
      colorScheme = _state;
    }
    return {
      isSystem,
      colorScheme
    };
  }, []);
  const [state, setState] = useState(getState(localStorage?.getItem(colorSchemeKey) || initialState));
  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: colorScheme => {
      setState(getState(colorScheme));
      localStorage?.setItem(colorSchemeKey, colorScheme);
    }
  };
};
const ColorSchemeContext = createContext(undefined);
const ColorSchemeProvider = _ref => {
  let {
    children,
    colorSchemeKey = 'color-scheme',
    initialColorScheme = 'system'
  } = _ref;
  const {
    isSystem,
    colorScheme,
    setColorScheme
  } = useColorScheme(initialColorScheme, colorSchemeKey);
  const contextValue = useMemo(() => ({
    colorScheme,
    isSystem,
    setColorScheme
  }), [isSystem, colorScheme, setColorScheme]);
  useEffect(() => {
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
  return React.createElement(ColorSchemeContext.Provider, {
    value: contextValue
  }, children);
};
ColorSchemeProvider.propTypes = {
  colorSchemeKey: PropTypes.string,
  initialColorScheme: PropTypes.oneOf(['light', 'dark', 'system'])
};

export { ColorSchemeContext, ColorSchemeProvider };
