/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';

import { DEFAULT_THEME, ThemeProvider } from '../../../packages/theming/src';

const Wrapper = ({ children }) => {
  const parameters = qs.parse(location.search.slice(1));

  if ('bedrock' in parameters) {
    document.querySelector('link[href$="bedrock/index.css"]').removeAttribute('disabled');
  }

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: 'rtl' in parameters }}>{children}</ThemeProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any
};

Wrapper.contextTypes = {
  isRtl: PropTypes.bool
};

export default Wrapper;
