/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItem, IStyledNavItemProps } from '../../styled';
import { PRODUCTS } from '../../utils/types';

/**
 * Accepts all `<button>` attributes and events
 */
export const NavItem = React.forwardRef<
  HTMLButtonElement,
  IStyledNavItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ hasLogo, hasBrandmark, ...other }, ref) => (
  <StyledNavItem
    tabIndex={hasLogo || hasBrandmark ? -1 : 0}
    hasLogo={hasLogo || hasBrandmark}
    hasBrandmark={hasBrandmark}
    ref={ref}
    {...other}
  />
));

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool,
  isCurrent: PropTypes.bool
};
