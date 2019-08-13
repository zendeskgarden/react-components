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
const SM = React.forwardRef(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="sm" {...other} />
));

SM.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any,
  /** Render monospace font */
  monospace: PropTypes.bool
};

SM.defaultProps = {
  tag: 'div'
};

/** @component */
export default SM;
