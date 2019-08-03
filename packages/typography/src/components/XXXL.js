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
const XXXL = ({ tag, ...other }) => {
  const StyledFontTag = StyledFont.withComponent(tag);

  return <StyledFontTag size="xxxl" {...other} />;
};

XXXL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any
};

XXXL.defaultProps = {
  tag: 'div'
};

/** @component */
export default XXXL;
