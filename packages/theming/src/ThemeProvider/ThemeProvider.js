/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider, StyleSheetManager } from 'styled-components';

const ThemeProvider = props => {
  const theme = {
    rtl: props.rtl,
    styles: props.theme
  };
  const { target } = props;

  return (
    <StyleSheetManager target={target}>
      <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
    </StyleSheetManager>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
  /** DOM node where styled-componets can inject its CSS */
  target: PropTypes.instanceOf(Element)
};

ThemeProvider.defaultProps = {
  target: document.head
};

/** @component */
export default ThemeProvider;
