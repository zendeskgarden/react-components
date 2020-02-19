/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_THEME, ThemeProvider } from '../../../packages/theming/src';

const Wrapper = ({ children }) => {
  const isRtl = location.search.indexOf('isRtl') !== -1;

  return <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: isRtl }}>{children}</ThemeProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.any
};

Wrapper.contextTypes = {
  isRtl: PropTypes.bool
};

export default Wrapper;
