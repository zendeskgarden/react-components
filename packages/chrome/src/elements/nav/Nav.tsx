/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNav, IStyledNavProps } from '../../styled';

/**
 * Accepts all `<nav>` attributes and events
 */
export const Nav = React.forwardRef<HTMLElement, IStyledNavProps & HTMLAttributes<HTMLElement>>(
  (props, ref) => <StyledNav ref={ref} {...props} />
);

Nav.propTypes = {
  isExpanded: PropTypes.bool,
  isDark: PropTypes.bool,
  isLight: PropTypes.bool
};
