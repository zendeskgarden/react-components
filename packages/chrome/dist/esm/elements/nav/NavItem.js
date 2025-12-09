/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { PRODUCTS } from '../../types/index.js';
import '../../styled/StyledChrome.js';
import '../../styled/StyledSkipNav.js';
import '../../styled/StyledSkipNavIcon.js';
import '../../styled/body/StyledBody.js';
import '../../styled/body/StyledContent.js';
import '../../styled/body/StyledMain.js';
import '../../styled/footer/StyledFooter.js';
import '../../styled/footer/StyledFooterItem.js';
import '../../styled/header/StyledHeader.js';
import '../../styled/header/StyledBaseHeaderItem.js';
import '../../styled/header/StyledHeaderItem.js';
import '../../styled/header/StyledHeaderItemIcon.js';
import '../../styled/header/StyledLogoHeaderItem.js';
import '../../styled/header/StyledHeaderItemText.js';
import '../../styled/header/StyledHeaderItemWrapper.js';
import '../../styled/nav/StyledNav.js';
import '../../styled/nav/StyledNavList.js';
import { StyledNavListItem } from '../../styled/nav/StyledNavListItem.js';
import '../../styled/nav/StyledBaseNavItem.js';
import { StyledLogoNavItem } from '../../styled/nav/StyledLogoNavItem.js';
import { StyledBrandmarkNavItem } from '../../styled/nav/StyledBrandmarkNavItem.js';
import { StyledNavButton } from '../../styled/nav/StyledNavButton.js';
import '../../styled/nav/StyledNavItemIcon.js';
import '../../styled/nav/StyledNavItemText.js';
import '../../styled/sheet/StyledSheet.js';
import '../../styled/sheet/StyledSheetWrapper.js';
import '../../styled/sheet/StyledSheetTitle.js';
import '../../styled/sheet/StyledSheetDescription.js';
import '../../styled/sheet/StyledSheetBody.js';
import '../../styled/sheet/StyledSheetClose.js';
import '../../styled/sheet/StyledSheetFooter.js';
import '../../styled/sheet/StyledSheetFooterItem.js';
import '../../styled/sheet/StyledSheetHeader.js';
import { useNavContext } from '../../utils/useNavContext.js';
import { useChromeContext } from '../../utils/useChromeContext.js';
import { useNavListContext } from '../../utils/useNavListContext.js';

const NavItem = React__default.forwardRef(({
  hasLogo,
  hasBrandmark,
  product,
  isCurrent,
  ...other
}, ref) => {
  const {
    hue
  } = useChromeContext();
  const {
    isExpanded
  } = useNavContext();
  const navListContext = useNavListContext();
  const hasList = navListContext?.hasList;
  let retVal;
  if (hasLogo) {
    retVal = React__default.createElement(StyledLogoNavItem, Object.assign({
      ref: ref,
      $hue: hue,
      $product: product
    }, other));
  } else if (hasBrandmark) {
    retVal = React__default.createElement(StyledBrandmarkNavItem, Object.assign({
      ref: ref
    }, other));
  } else {
    retVal = React__default.createElement(StyledNavButton, Object.assign({
      tabIndex: 0,
      ref: ref,
      $isExpanded: isExpanded,
      $hue: hue,
      "aria-current": isCurrent || undefined
    }, other));
  }
  if (hasList) {
    retVal = React__default.createElement(StyledNavListItem, null, retVal);
  }
  return retVal;
});
NavItem.displayName = 'Nav.Item';
NavItem.propTypes = {
  product: PropTypes.oneOf(PRODUCTS),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool
};

export { NavItem };
