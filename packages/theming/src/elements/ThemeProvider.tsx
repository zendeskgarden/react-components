/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { ThemeProvider, DefaultTheme, ThemeProps } from 'styled-components';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import DEFAULT_THEME from './theme';
import { useDocument } from '../utils/useDocument';

interface IGardenThemeProviderProps extends Partial<ThemeProps<DefaultTheme>> {
  focusVisibleRef?: React.RefObject<HTMLElement>;
}

const GardenThemeProvider: React.FunctionComponent<IGardenThemeProviderProps> = ({
  theme,
  focusVisibleRef,
  children,
  ...other
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const relativeDocument = useDocument(theme);
  const controlledScopeRef = getControlledValue(focusVisibleRef, scopeRef);

  useFocusVisible({ scope: controlledScopeRef, relativeDocument });

  return (
    <ThemeProvider theme={theme!} {...other}>
      {focusVisibleRef ? (children as any) : <div ref={scopeRef}>{children as any}</div>}
    </ThemeProvider>
  );
};

GardenThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};

/** @component */
export default GardenThemeProvider;
