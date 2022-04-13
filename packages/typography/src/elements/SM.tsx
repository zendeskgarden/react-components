/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IMonospaceTypographyProps } from '../types';
import { StyledFont } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SM = forwardRef<HTMLDivElement, IMonospaceTypographyProps>(
  ({ tag, ...other }, ref) => <StyledFont as={tag} ref={ref} size="sm" {...other} />
);

SM.displayName = 'SM';

SM.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

SM.defaultProps = {
  tag: 'div'
};
