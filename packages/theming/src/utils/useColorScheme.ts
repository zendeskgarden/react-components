/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { ColorSchemeContext } from '../elements/ColorSchemeProvider';

/**
 * Provides the current color scheme for the context `ThemeProvider`.
 *
 * @returns {object} Current color scheme accessor and mutator.
 */
export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('Error: this component must be rendered within a <ColorSchemeProvider>.');
  }

  return context;
};
