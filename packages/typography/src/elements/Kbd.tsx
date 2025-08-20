/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledKbd } from '../styled';
import { IKbdProps, INHERIT_SIZE } from '../types';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Kbd = forwardRef<HTMLElement, IKbdProps>(({ size = 'inherit', ...other }, ref) => (
  <StyledKbd $size={size} {...other} ref={ref} />
));

Kbd.displayName = 'Kbd';

Kbd.propTypes = {
  size: PropTypes.oneOf(INHERIT_SIZE)
};
