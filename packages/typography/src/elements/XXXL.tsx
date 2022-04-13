/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';
import { ITypographyProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const XXXL = forwardRef<HTMLDivElement, ITypographyProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="xxxl" {...other} />
));

XXXL.displayName = 'XXXL';

XXXL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XXXL.defaultProps = {
  tag: 'div'
};
