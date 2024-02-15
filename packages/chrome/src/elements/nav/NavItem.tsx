/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { INavItemProps, PRODUCT } from '../../types';
import { StyledNavItem, StyledLogoNavItem, StyledBrandmarkNavItem } from '../../styled';
import { useNavContext } from '../../utils/useNavContext';
import { useChromeContext } from '../../utils/useChromeContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const NavItem = React.forwardRef<HTMLButtonElement, INavItemProps>(
  ({ hasLogo, hasBrandmark, product, ...other }, ref) => {
    const { hue, isLight, isDark } = useChromeContext();
    const { isExpanded } = useNavContext();
    const ariaCurrent = other.isCurrent || undefined;

    if (hasLogo) {
      return (
        <StyledLogoNavItem
          ref={ref}
          isDark={isDark}
          isLight={isLight}
          product={product}
          aria-current={ariaCurrent}
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
        aria-current={ariaCurrent}
        {...other}
      />
    );
  }
);

NavItem.displayName = 'NavItem';

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCT),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool
};
