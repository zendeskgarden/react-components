/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledCode } from '../styled';
import { HUE, ICodeProps, INHERIT_SIZE } from '../types';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Code = forwardRef<HTMLElement, ICodeProps>(
  ({ hue = 'grey', size = 'inherit', ...other }, ref) => (
    <StyledCode ref={ref} $hue={hue} $size={size} {...other} />
  )
);

Code.displayName = 'Code';

Code.propTypes = {
  hue: PropTypes.oneOf(HUE),
  size: PropTypes.oneOf(INHERIT_SIZE)
};
