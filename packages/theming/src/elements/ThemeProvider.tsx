/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useMemo, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { IGardenTheme, ISemanticVariables, IThemeProviderProps } from '../types';
import DEFAULT_THEME from './theme';
import { getButtonVariables } from './theme/getters';
import { useDocument } from '../utils/useDocument';
import { GlobalStyles } from './theme/global-styles';

/**
 * Builds a semantic theme object and attaches it to a provided (primitive) theme.
 * If the consumer provided their own variables getter func, use that instead.
 *
 * @param {IGardenTheme} theme
 * @param {string} prefix
 * @param {ISemanticVariables | undefined} variables
 * @returns {IGardenTheme}
 */
const withVariables = (
  theme: IGardenTheme,
  prefix?: string,
  _variables?: (theme: IGardenTheme) => ISemanticVariables
): IGardenTheme => {
  let variables;

  if (_variables) {
    variables = _variables(theme);
  } else {
    variables = {
      buttons: getButtonVariables(theme)
    };
  }

  return {
    ...theme,
    prefix: prefix || theme.prefix,
    variables
  };
};

export const ThemeProvider = ({
  theme: _theme,
  variables,
  prefix,
  focusVisibleRef,
  children,
  ...other
}: PropsWithChildren<IThemeProviderProps>) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const relativeDocument = useDocument(_theme as IGardenTheme);
  const controlledScopeRef =
    focusVisibleRef === null
      ? React.createRef<HTMLElement>()
      : getControlledValue(focusVisibleRef, scopeRef)!;

  useFocusVisible({ scope: controlledScopeRef, relativeDocument });

  const theme = useMemo(
    () => withVariables(_theme as IGardenTheme, prefix, variables),
    [_theme, variables, prefix]
  );

  return (
    <StyledThemeProvider theme={theme} {...other}>
      <GlobalStyles prefix={prefix || theme.prefix} />
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
