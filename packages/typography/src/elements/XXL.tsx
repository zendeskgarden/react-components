/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ITypescaleProps } from '../types';
import { StyledFont } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const XXL = forwardRef<HTMLDivElement, ITypescaleProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="2xlarge" {...other} />
));

XXL.displayName = 'XXL';

XXL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XXL.defaultProps = {
  tag: 'div'
};
