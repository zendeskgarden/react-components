/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import { ThemeProvider as ThemeProvider$1 } from 'styled-components';
import DEFAULT_THEME from './theme/index.js';

const ThemeProvider = _ref => {
  let {
    theme = DEFAULT_THEME,
    ...other
  } = _ref;
  return React.createElement(ThemeProvider$1, Object.assign({
    theme: theme
  }, other));
};

export { ThemeProvider };
