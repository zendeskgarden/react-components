/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Meta } from '@storybook/react';
import {
  Chrome,
  SkipNav,
  Body,
  Content,
  Main,
  Sidebar,
  Footer,
  FooterItem,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  HeaderItemWrapper,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  CollapsibleSubNavItem,
  SubNav,
  SubNavItem,
  SubNavItemText
} from '@zendeskgarden/react-chrome';

export default {
  title: 'Components/Chrome',
  subcomponents: {
    Chrome,
    SkipNav,
    Body,
    Content,
    Main,
    Sidebar,
    Footer,
    FooterItem,
    Header,
    HeaderItem,
    HeaderItemIcon,
    HeaderItemText,
    HeaderItemWrapper,
    Nav,
    NavItem,
    NavItemIcon,
    NavItemText,
    CollapsibleSubNavItem,
    SubNav,
    SubNavItem,
    SubNavItemText
  }
} as Meta;

export { Default } from './examples/Default';
export { StandaloneHeader } from './examples/StandaloneHeader';
