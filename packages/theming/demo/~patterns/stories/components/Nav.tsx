/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Nav as ChromeNav } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import ProductIcon from '@zendeskgarden/svg-icons/src/26/garden.svg';
import HomeIcon from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import SettingsIcon from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import ZendeskIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

export const Nav = () => (
  <ChromeNav>
    <ChromeNav.Item hasLogo style={{ color: PALETTE.green[400] }} title="Zendesk Product">
      <ChromeNav.ItemIcon>
        <ProductIcon />
      </ChromeNav.ItemIcon>
      <ChromeNav.ItemText>Zendesk Product</ChromeNav.ItemText>
    </ChromeNav.Item>
    <ChromeNav.Item isCurrent title="Home">
      <ChromeNav.ItemIcon>
        <HomeIcon />
      </ChromeNav.ItemIcon>
      <ChromeNav.ItemText>Home</ChromeNav.ItemText>
    </ChromeNav.Item>
    <ChromeNav.Item title="Settings">
      <ChromeNav.ItemIcon>
        <SettingsIcon />
      </ChromeNav.ItemIcon>
      <ChromeNav.ItemText>Settings</ChromeNav.ItemText>
    </ChromeNav.Item>
    <ChromeNav.Item hasBrandmark title="Zendesk">
      <ChromeNav.ItemIcon>
        <ZendeskIcon />
      </ChromeNav.ItemIcon>
      <ChromeNav.ItemText>&copy;Zendesk</ChromeNav.ItemText>
    </ChromeNav.Item>
  </ChromeNav>
);
