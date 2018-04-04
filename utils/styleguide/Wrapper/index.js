import React from 'react';
import PropTypes from 'prop-types';

import ThemeProvider from '../../../packages/theming/src/ThemeProvider/ThemeProvider';

const Wrapper = ({ children }) => {
  const isRtl = location.search.indexOf('isRtl') !== -1;

  return <ThemeProvider rtl={isRtl}>{children}</ThemeProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.any
};

Wrapper.contextTypes = {
  isRtl: PropTypes.bool
};

export default Wrapper;
