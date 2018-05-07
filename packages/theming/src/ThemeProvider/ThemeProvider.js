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
