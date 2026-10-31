/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import type { IGardenTheme } from '../types';

/**
 * Typed theme access for element component bodies.
 *
 * Components must be rendered inside a `ThemeProvider` (ADR-002). There is no
 * `DEFAULT_THEME` fallback, since one would hide a missing provider (for
 * example, a dark color scheme that is never applied). Outside production, a
 * missing provider throws.
 *
 * Internal to the package; not part of the public API.
 */
export const useGardenTheme = (): IGardenTheme => {
  /* `useContext` instead of `useTheme`: styled-components 6 throws its own
     error in `useTheme`, which would defeat the production behavior. */
  const theme = useContext(ThemeContext) as IGardenTheme | undefined;

  if (process.env.NODE_ENV !== 'production' && theme === undefined) {
    throw new Error('Garden components must be rendered inside a ThemeProvider');
  }

  return theme as IGardenTheme;
};
