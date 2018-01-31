import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = props => {
  const theme = {
    rtl: props.rtl,
    styles: props.theme
  };

  return <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object
};

/** @component */
export default ThemeProvider;
