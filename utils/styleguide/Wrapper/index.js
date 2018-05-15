/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ThemeProvider from '../../../packages/theming/src/ThemeProvider/ThemeProvider';

const ResponsiveWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

const Wrapper = ({ children }) => {
  const isRtl = location.search.indexOf('isRtl') !== -1;

  return (
    <ResponsiveWrapper>
      <ThemeProvider rtl={isRtl}>{children}</ThemeProvider>
    </ResponsiveWrapper>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any
};

Wrapper.contextTypes = {
  isRtl: PropTypes.bool
};

export default Wrapper;
