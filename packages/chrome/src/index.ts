/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export { Chrome } from './elements/Chrome';
export { SkipNav } from './elements/SkipNav';
export { Body } from './elements/body/Body';
export { Content } from './elements/body/Content';
export { Main } from './elements/body/Main';
export { Sidebar } from './elements/body/Sidebar';
export { Header } from './elements/header/Header';
export { HeaderItem } from './elements/header/HeaderItem';
export { HeaderItemIcon } from './elements/header/HeaderItemIcon';
export { HeaderItemText } from './elements/header/HeaderItemText';
export { HeaderItemWrapper } from './elements/header/HeaderItemWrapper';
export { Footer } from './elements/footer/Footer';
export { FooterItem } from './elements/footer/FooterItem';
export { Nav } from './elements/nav/Nav';
export { NavItem } from './elements/nav/NavItem';
export { NavItemIcon } from './elements/nav/NavItemIcon';
export { NavItemText } from './elements/nav/NavItemText';
export { SubNav } from './elements/subnav/SubNav';
export { SubNavItem } from './elements/subnav/SubNavItem';
export { SubNavItemText } from './elements/subnav/SubNavItemText';
export { CollapsibleSubNavItem } from './elements/subnav/CollapsibleSubNavItem';
export { Sheet } from './elements/sheet/Sheet';

export {
  PRODUCT as PRODUCTS,
  type IChromeProps,
  type ISkipNavProps,
  type IBodyProps,
  type IHeaderProps,
  type IHeaderItemProps,
  type IHeaderItemTextProps,
  type IHeaderItemWrapperProps,
  type INavProps,
  type INavItemProps,
  type INavItemTextProps,
  type ISubNavItemProps,
  type ICollapsibleSubNavItemProps,
  type ISheetProps,
  type ISheetFooterProps,
  /** @deprecated can be accessed via IHeaderItemProps['product'] */
  type Product as PRODUCT
} from './types';
