/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import DEFAULT_THEME from '../theme';

const ThemeProvider = props => {
  props.theme.rtl = props.rtl;
  props.theme.document = props.document;

  return <StyledThemeProvider theme={props.theme}>{props.children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
  document: PropTypes.object
};

ThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};

/** @component */
export default ThemeProvider;
