/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  StyledNavItem,
  StyledLogoNavItem,
  StyledBrandmarkNavItem,
  IStyledNavItemProps,
  IStyledLogoNavItemProps
} from '../../styled';
import { PRODUCTS } from '../../utils/types';

interface INavItemProps extends IStyledLogoNavItemProps, IStyledNavItemProps, HTMLAttributes<any> {
  hasLogo?: boolean;
  hasBrandmark?: boolean;
}

/**
 * Accepts all `<button>` attributes and events
 */
export const NavItem = React.forwardRef<any, INavItemProps>(
  ({ hasLogo, hasBrandmark, ...other }, ref) => {
    if (hasLogo) {
      return <StyledLogoNavItem ref={ref} {...other} />;
    }

    if (hasBrandmark) {
      return <StyledBrandmarkNavItem ref={ref} {...other} />;
    }

    return <StyledNavItem tabIndex={0} ref={ref} {...other} />;
  }
);

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool,
  isCurrent: PropTypes.bool
};
