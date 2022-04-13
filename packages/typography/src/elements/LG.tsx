/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';
import { ITypescaleMonospaceProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const LG = forwardRef<HTMLDivElement, ITypescaleMonospaceProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="large" {...other} />
));

LG.displayName = 'LG';

LG.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

LG.defaultProps = {
  tag: 'div'
};
