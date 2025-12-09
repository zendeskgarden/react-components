/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useEffect } from 'react';
import SvgXStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';
import '../../../styled/StyledChrome.js';
import '../../../styled/StyledSkipNav.js';
import '../../../styled/StyledSkipNavIcon.js';
import '../../../styled/body/StyledBody.js';
import '../../../styled/body/StyledContent.js';
import '../../../styled/body/StyledMain.js';
import '../../../styled/footer/StyledFooter.js';
import '../../../styled/footer/StyledFooterItem.js';
import '../../../styled/header/StyledHeader.js';
import '../../../styled/header/StyledBaseHeaderItem.js';
import '../../../styled/header/StyledHeaderItem.js';
import '../../../styled/header/StyledHeaderItemIcon.js';
import '../../../styled/header/StyledLogoHeaderItem.js';
import '../../../styled/header/StyledHeaderItemText.js';
import '../../../styled/header/StyledHeaderItemWrapper.js';
import '../../../styled/nav/StyledNav.js';
import '../../../styled/nav/StyledNavList.js';
import '../../../styled/nav/StyledNavListItem.js';
import '../../../styled/nav/StyledBaseNavItem.js';
import '../../../styled/nav/StyledLogoNavItem.js';
import '../../../styled/nav/StyledBrandmarkNavItem.js';
import '../../../styled/nav/StyledNavButton.js';
import '../../../styled/nav/StyledNavItemIcon.js';
import '../../../styled/nav/StyledNavItemText.js';
import '../../../styled/sheet/StyledSheet.js';
import '../../../styled/sheet/StyledSheetWrapper.js';
import '../../../styled/sheet/StyledSheetTitle.js';
import '../../../styled/sheet/StyledSheetDescription.js';
import '../../../styled/sheet/StyledSheetBody.js';
import { StyledSheetClose } from '../../../styled/sheet/StyledSheetClose.js';
import '../../../styled/sheet/StyledSheetFooter.js';
import '../../../styled/sheet/StyledSheetFooterItem.js';
import '../../../styled/sheet/StyledSheetHeader.js';
import { useSheetContext } from '../../../utils/useSheetContext.js';

const SheetClose = forwardRef((props, ref) => {
  const {
    setIsCloseButtonPresent
  } = useSheetContext();
  useEffect(() => {
    setIsCloseButtonPresent(true);
    return () => setIsCloseButtonPresent(false);
  }, [setIsCloseButtonPresent]);
  return React__default.createElement(StyledSheetClose, Object.assign({
    "aria-label": "Close Sheet",
    ref: ref
  }, props), React__default.createElement(SvgXStroke, null));
});
SheetClose.displayName = 'Sheet.Close';
const Close = SheetClose;

export { Close };
