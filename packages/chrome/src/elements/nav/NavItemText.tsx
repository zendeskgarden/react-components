/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItemText, IStyledNavItemTextProps } from '../../styled';

/**
 * Accepts all `<span>` attributes and events
 */
export const NavItemText = React.forwardRef<
  HTMLElement,
  IStyledNavItemTextProps & HTMLAttributes<HTMLElement>
>((props, ref) => <StyledNavItemText ref={ref} {...props} />);

NavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
