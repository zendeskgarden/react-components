/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Nav as ChromeNav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import ProductIcon from '@zendeskgarden/svg-icons/src/26/garden.svg';
import HomeIcon from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import SettingsIcon from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import ZendeskIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

export const Nav = () => (
  <ChromeNav>
    <NavItem hasLogo style={{ color: PALETTE.green[400] }} title="Zendesk Product">
      <NavItemIcon>
        <ProductIcon />
      </NavItemIcon>
      <NavItemText>Zendesk Product</NavItemText>
    </NavItem>
    <NavItem isCurrent title="Home">
      <NavItemIcon>
        <HomeIcon />
      </NavItemIcon>
      <NavItemText>Home</NavItemText>
    </NavItem>
    <NavItem title="Settings">
      <NavItemIcon>
        <SettingsIcon />
      </NavItemIcon>
      <NavItemText>Settings</NavItemText>
    </NavItem>
    <NavItem hasBrandmark title="Zendesk">
      <NavItemIcon>
        <ZendeskIcon />
      </NavItemIcon>
      <NavItemText>&copy;Zendesk</NavItemText>
    </NavItem>
  </ChromeNav>
);
