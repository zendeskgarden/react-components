/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { INavItemProps, PRODUCTS } from '../../types';
import {
  StyledNavButton,
  StyledLogoNavItem,
  StyledBrandmarkNavItem,
  StyledNavListItem
} from '../../styled';
import { useNavContext } from '../../utils/useNavContext';
import { useChromeContext } from '../../utils/useChromeContext';
import { useNavListContext } from '../../utils/useNavListContext';

/**
 * @deprecated use `Nav.Item` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const NavItem = React.forwardRef<HTMLButtonElement, INavItemProps>(
  ({ hasLogo, hasBrandmark, product, isCurrent, ...other }, ref) => {
    const { hue } = useChromeContext();
    const { isExpanded } = useNavContext();
    const navListContext = useNavListContext();
    const hasList = navListContext?.hasList;
    let retVal;

    if (hasLogo) {
      retVal = <StyledLogoNavItem ref={ref} hue={hue} product={product} {...other} />;
    } else if (hasBrandmark) {
      retVal = <StyledBrandmarkNavItem ref={ref} {...other} />;
    } else {
      retVal = (
        <StyledNavButton
          tabIndex={0}
          ref={ref}
          isExpanded={isExpanded}
          hue={hue}
          aria-current={isCurrent || undefined}
          {...other}
        />
      );
    }

    if (hasList) {
      retVal = <StyledNavListItem>{retVal}</StyledNavListItem>;
    }

    return retVal;
  }
);

NavItem.displayName = 'Nav.Item';

NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool
};
