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
export const XL = forwardRef<HTMLDivElement, ITypescaleProps>(
  ({ isBold, tag = 'div', ...other }, ref) => (
    <StyledFont $size="extralarge" $isBold={isBold} ref={ref} as={tag} {...other} />
  )
);

XL.displayName = 'XL';

XL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};
