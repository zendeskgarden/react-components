/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

/**
 * Accepts all standard props relating to provided `tag`
 */
const MD = ({ tag, ...other }) => {
  const StyledFontTag = StyledFont.withComponent(tag);

  return <StyledFontTag size="md" {...other} />;
};

MD.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any,
  /** Render monospace font */
  monospace: PropTypes.bool
};

MD.defaultProps = {
  tag: 'div'
};

/** @component */
export default MD;
