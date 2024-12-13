/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, PropsWithChildren, useMemo } from 'react';
import { ColorScheme, IColorSchemeContext } from '../types';

interface IColorSchemeProviderProps extends PropsWithChildren<IColorSchemeContext> {
  isSystem: boolean;
}

export const ColorSchemeContext = createContext<IColorSchemeContext | undefined>(undefined);

export const ColorSchemeProvider = ({
  children,
  isSystem,
  colorScheme,
  setColorScheme
}: IColorSchemeProviderProps) => {
  const contextValue = useMemo(
    () => ({ colorScheme: isSystem ? 'system' : (colorScheme as ColorScheme), setColorScheme }),
    [isSystem, colorScheme, setColorScheme]
  );

  return <ColorSchemeContext.Provider value={contextValue}>{children}</ColorSchemeContext.Provider>;
};
