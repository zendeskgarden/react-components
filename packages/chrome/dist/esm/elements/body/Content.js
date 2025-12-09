/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import '../../styled/StyledChrome.js';
import '../../styled/StyledSkipNav.js';
import '../../styled/StyledSkipNavIcon.js';
import '../../styled/body/StyledBody.js';
import { StyledContent } from '../../styled/body/StyledContent.js';
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
import '../../styled/nav/StyledNavListItem.js';
import '../../styled/nav/StyledBaseNavItem.js';
import '../../styled/nav/StyledLogoNavItem.js';
import '../../styled/nav/StyledBrandmarkNavItem.js';
import '../../styled/nav/StyledNavButton.js';
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
import { useBodyContext } from '../../utils/useBodyContext.js';

const Content = React__default.forwardRef((props, ref) => {
  const {
    hasFooter
  } = useBodyContext() || {};
  return React__default.createElement(StyledContent, Object.assign({
    ref: ref,
    $hasFooter: hasFooter
  }, props));
});
Content.displayName = 'Content';

export { Content };
