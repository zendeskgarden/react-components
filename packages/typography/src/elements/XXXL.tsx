/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';
import { ITypescaleProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const XXXL = forwardRef<HTMLDivElement, ITypescaleProps>(
  ({ isBold, tag, ...other }, ref) => (
    <StyledFont $isBold={isBold} $size="3xlarge" {...other} as={tag} ref={ref} />
  )
);

XXXL.displayName = 'XXXL';

XXXL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XXXL.defaultProps = {
  tag: 'div'
};
