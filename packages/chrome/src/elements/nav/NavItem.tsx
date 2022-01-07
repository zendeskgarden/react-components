/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItem, StyledLogoNavItem, StyledBrandmarkNavItem } from '../../styled';
import { PRODUCT, PRODUCTS } from '../../utils/types';
import { useNavContext } from '../../utils/useNavContext';
import { useChromeContext } from '../../utils/useChromeContext';

export interface INavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applies a product-specific color palette */
  product?: PRODUCT;
  /** Indicates that the item is current in the nav */
  isCurrent?: boolean;
  /** Indicates that the item contains a product logo */
  hasLogo?: boolean;
  /** Indicates that the item contains the company brandmark */
  hasBrandmark?: boolean;
}

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const NavItem = React.forwardRef<HTMLButtonElement, INavItemProps>(
  ({ hasLogo, hasBrandmark, product, ...other }, ref) => {
    const { hue, isLight, isDark } = useChromeContext();
    const { isExpanded } = useNavContext();

    if (hasLogo) {
      return (
        <StyledLogoNavItem
          ref={ref}
          isDark={isDark}
          isLight={isLight}
          product={product}
          {...other}
        />
      );
    }

    if (hasBrandmark) {
      return <StyledBrandmarkNavItem ref={ref} {...other} />;
    }

    return (
      <StyledNavItem
        tabIndex={0}
        ref={ref}
        isExpanded={isExpanded}
        hue={hue}
        isDark={isDark}
        isLight={isLight}
        {...other}
      />
    );
  }
);

NavItem.displayName = 'NavItem';

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool,
  isCurrent: PropTypes.bool
};
