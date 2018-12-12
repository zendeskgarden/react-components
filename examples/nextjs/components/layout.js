/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

/**
 * Garden imports
 */
import {
  Chrome,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Content,
  Main,
  Body
} from '@zendeskgarden/react-chrome';
import { Menu, Item } from '@zendeskgarden/react-menus';

/**
 * Garden Icons
 */
import ZendeskIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import HomeIcon from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import MenuTrayIcon from '@zendeskgarden/svg-icons/src/14/menu-tray.svg';
import PersonIcon from '@zendeskgarden/svg-icons/src/14/person.svg';

const PaddedMain = styled(Main)`
  padding: 28px;
`;

const Layout = ({ children, title = 'This is the default title' }) => (
  <Chrome>
    <Head>
      <title>{title}</title>
    </Head>
    <Nav expanded>
      <NavItem logo title="Zendesk Garden">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>Zendesk Garden</NavItemText>
      </NavItem>
      <NavItem title="Home" current>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
    </Nav>
    <Body>
      <Header>
        <Menu
          arrow
          placement="bottom-end"
          trigger={({ ref, isOpen }) => (
            <HeaderItem ref={ref} active={isOpen}>
              <HeaderItemIcon>
                <MenuTrayIcon />
              </HeaderItemIcon>
              <HeaderItemText clipped>Products</HeaderItemText>
            </HeaderItem>
          )}
        >
          <Item key="support">Support</Item>
          <Item key="chat">Chat</Item>
          <Item key="talk">Talk</Item>
        </Menu>
        <HeaderItem round>
          <HeaderItemIcon>
            <PersonIcon />
          </HeaderItemIcon>
          <HeaderItemText clipped>User</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content>
        <PaddedMain>{children}</PaddedMain>
      </Content>
    </Body>
  </Chrome>
);

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.element
};

export default Layout;
