import React from 'react';
import PropTypes from 'prop-types';
import url from 'url';

import ThemeProvider from '../../../packages/theming/src/ThemeProvider/ThemeProvider';

const Wrapper = ({ children }) => {
  const query = url.parse(window.location.href).query;
  const isRtl = query && query.indexOf('isRtl') !== -1;

  return <ThemeProvider rtl={isRtl}>
    {children}
  </ThemeProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.any
};

Wrapper.contextTypes = {
  isRtl: PropTypes.bool
};

export default Wrapper;
