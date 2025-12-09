/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import '../styled/StyledChrome.js';
import { StyledSkipNav } from '../styled/StyledSkipNav.js';
import { StyledSkipNavIcon } from '../styled/StyledSkipNavIcon.js';
import '../styled/body/StyledBody.js';
import '../styled/body/StyledContent.js';
import '../styled/body/StyledMain.js';
import '../styled/footer/StyledFooter.js';
import '../styled/footer/StyledFooterItem.js';
import '../styled/header/StyledHeader.js';
import '../styled/header/StyledBaseHeaderItem.js';
import '../styled/header/StyledHeaderItem.js';
import '../styled/header/StyledHeaderItemIcon.js';
import '../styled/header/StyledLogoHeaderItem.js';
import '../styled/header/StyledHeaderItemText.js';
import '../styled/header/StyledHeaderItemWrapper.js';
import '../styled/nav/StyledNav.js';
import '../styled/nav/StyledNavList.js';
import '../styled/nav/StyledNavListItem.js';
import '../styled/nav/StyledBaseNavItem.js';
import '../styled/nav/StyledLogoNavItem.js';
import '../styled/nav/StyledBrandmarkNavItem.js';
import '../styled/nav/StyledNavButton.js';
import '../styled/nav/StyledNavItemIcon.js';
import '../styled/nav/StyledNavItemText.js';
import '../styled/sheet/StyledSheet.js';
import '../styled/sheet/StyledSheetWrapper.js';
import '../styled/sheet/StyledSheetTitle.js';
import '../styled/sheet/StyledSheetDescription.js';
import '../styled/sheet/StyledSheetBody.js';
import '../styled/sheet/StyledSheetClose.js';
import '../styled/sheet/StyledSheetFooter.js';
import '../styled/sheet/StyledSheetFooterItem.js';
import '../styled/sheet/StyledSheetHeader.js';

const SkipNav = React__default.forwardRef((_ref, ref) => {
  let {
    targetId,
    zIndex = 1,
    children,
    ...props
  } = _ref;
  return React__default.createElement(StyledSkipNav, Object.assign({
    href: `#${targetId}`,
    $zIndex: zIndex,
    ref: ref
  }, props), React__default.createElement(StyledSkipNavIcon, null), children);
});
SkipNav.displayName = 'SkipNav';
SkipNav.propTypes = {
  targetId: PropTypes.string.isRequired,
  zIndex: PropTypes.number
};

export { SkipNav };
