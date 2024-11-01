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
export const LG = forwardRef<HTMLDivElement, ITypescaleMonospaceProps>(
  ({ isBold, isMonospace, tag, ...other }, ref) => (
    <StyledFont
      $isBold={isBold}
      $isMonospace={isMonospace}
      $size="large"
      as={tag}
      ref={ref}
      {...other}
    />
  )
);

LG.displayName = 'LG';

LG.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

LG.defaultProps = {
  tag: 'div'
};
