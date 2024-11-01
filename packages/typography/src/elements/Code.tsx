/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HUE, ICodeProps, INHERIT_SIZE } from '../types';
import { StyledCode } from '../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Code = forwardRef<HTMLElement, ICodeProps>(({ hue, size, ...other }, ref) => (
  <StyledCode ref={ref} $hue={hue} $size={size} {...other} />
));

Code.displayName = 'Code';

Code.propTypes = {
  hue: PropTypes.oneOf(HUE),
  size: PropTypes.oneOf(INHERIT_SIZE)
};

Code.defaultProps = {
  hue: 'grey',
  size: 'inherit'
};
