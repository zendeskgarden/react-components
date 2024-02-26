/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { IGardenTheme, IThemeProviderProps } from '../types';
import DEFAULT_THEME from './theme';
import { useDocument } from '../utils/useDocument';

export const ThemeProvider = ({
  theme,
  focusVisibleRef,
  children,
  ...other
}: PropsWithChildren<IThemeProviderProps>) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const relativeDocument = useDocument(theme as IGardenTheme);
  const controlledScopeRef =
    focusVisibleRef === null
      ? React.createRef<HTMLElement>()
      : getControlledValue(focusVisibleRef, scopeRef)!;

  useFocusVisible({ scope: controlledScopeRef, relativeDocument });

  return (
    <StyledThemeProvider theme={theme!} {...other}>
      {focusVisibleRef === undefined ? (
        <div ref={scopeRef}>{children as any}</div>
      ) : (
        (children as any)
      )}
    </StyledThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};
