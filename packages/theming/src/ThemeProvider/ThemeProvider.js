/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ThemeProvider } from 'styled-components';
import DEFAULT_THEME from '../theme';

ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};

/** @component */
export default ThemeProvider;
