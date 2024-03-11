/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Header as ChromeHeader } from '@zendeskgarden/react-chrome';
import { Menu, Item, Separator } from '@zendeskgarden/react-dropdowns';
import MenuIcon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';

export const Header = () => (
  <ChromeHeader>
    <Menu
      button={props => (
        <ChromeHeader.Item {...props}>
          <ChromeHeader.ItemIcon>
            <MenuIcon />
          </ChromeHeader.ItemIcon>
          <ChromeHeader.ItemText isClipped>Products</ChromeHeader.ItemText>
        </ChromeHeader.Item>
      )}
    >
      <Item value="item-one">One</Item>
      <Item value="item-two">Two</Item>
      <Item value="item-three">Three</Item>
      <Separator />
      <Item value="item-signout">Sign out</Item>
    </Menu>
  </ChromeHeader>
);
