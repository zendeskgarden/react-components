/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItem, StyledLogoNavItem, StyledBrandmarkNavItem } from '../../styled';
import { PRODUCT, PRODUCTS } from '../../utils/types';
import { useNavContext } from '../../utils/useNavContext';
import { useChromeContext } from '../../utils/useChromeContext';

interface INavItemProps extends HTMLAttributes<any> {
  /**
   * Applies product-specific color palette
   **/
  product?: PRODUCT;
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
  /**
   * Indicate that the item contains a product logo
   */
  hasLogo?: boolean;
  /**
   * Indicate that the item contains the company brandmark
   */
  hasBrandmark?: boolean;
}

/**
 * Accepts all `<button>` attributes and events
 */
export const NavItem = React.forwardRef<any, INavItemProps>(
  ({ hasLogo, hasBrandmark, product, ...other }, ref) => {
    const { hue } = useChromeContext();
    const { isExpanded } = useNavContext();

    if (hasLogo) {
      return <StyledLogoNavItem ref={ref} hue={hue} product={product} {...other} />;
    }

    if (hasBrandmark) {
      return <StyledBrandmarkNavItem ref={ref} {...other} />;
    }

    return <StyledNavItem tabIndex={0} ref={ref} hue={hue} isExpanded={isExpanded} {...other} />;
  }
);

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool,
  isCurrent: PropTypes.bool
};
