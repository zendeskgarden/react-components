/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useMemo } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import { useChromeContext } from '../../utils/useChromeContext.js';
import { NavContext } from '../../utils/useNavContext.js';
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
import { StyledNav } from '../../styled/nav/StyledNav.js';
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
import { NavItem } from './NavItem.js';
import { NavItemIcon } from './NavItemIcon.js';
import { NavItemText } from './NavItemText.js';
import { NavList } from './NavList.js';

const NavComponent = React__default.forwardRef(({
  isExpanded,
  ...other
}, ref) => {
  const {
    hue,
    isLight
  } = useChromeContext();
  const navContextValue = useMemo(() => ({
    isExpanded: !!isExpanded
  }), [isExpanded]);
  return React__default.createElement(ThemeProvider, {
    theme: parentTheme => ({
      ...parentTheme,
      colors: {
        ...parentTheme.colors,
        base: isLight ? 'light' : 'dark'
      }
    })
  }, React__default.createElement(NavContext.Provider, {
    value: navContextValue
  }, React__default.createElement(StyledNav, Object.assign({
    ref: ref,
    $isExpanded: isExpanded,
    $hue: hue
  }, other))));
});
NavComponent.displayName = 'Nav';
NavComponent.propTypes = {
  isExpanded: PropTypes.bool
};
const Nav = NavComponent;
Nav.List = NavList;
Nav.Item = NavItem;
Nav.ItemIcon = NavItemIcon;
Nav.ItemText = NavItemText;

export { Nav, NavComponent };
