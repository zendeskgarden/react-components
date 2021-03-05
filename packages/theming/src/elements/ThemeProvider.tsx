/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { ThemeProvider as StyledThemeProvider, ThemeProps } from 'styled-components';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import DEFAULT_THEME, { IGardenTheme } from './theme';
import { useDocument } from '../utils/useDocument';

export interface IThemeProviderProps extends Partial<ThemeProps<IGardenTheme>> {
  /**
   * Provides values for component styling. See styled-components
   * [`ThemeProvider`](https://styled-components.com/docs/api#themeprovider)
   * for details.
   */
  theme?: IGardenTheme;
  /**
   * Provides a reference to the DOM node used to scope a `:focus-visible`
   * polyfill. If left `undefined`, a scoping `<div>` will be rendered.
   * Assigning `null` (on a nested `ThemeProvider`, for example) prevents the
   * added polyfill and scoping `<div>`.
   */
  focusVisibleRef?: React.RefObject<HTMLElement> | null;
}

const ThemeProvider: React.FunctionComponent<IThemeProviderProps> = ({
  theme,
  focusVisibleRef,
  children,
  ...other
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const relativeDocument = useDocument(theme);
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

export default ThemeProvider;
