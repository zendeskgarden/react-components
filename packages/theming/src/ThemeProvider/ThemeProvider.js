/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = props => {
  const theme = {
    rtl: props.rtl,
    styles: props.theme,
    document: props.document
  };

  return <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
  document: PropTypes.object
};

/** @component */
export default ThemeProvider;
