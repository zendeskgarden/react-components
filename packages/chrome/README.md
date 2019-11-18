# @zendeskgarden/react-chrome [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-chrome.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-chrome)

Collection of elements relating to the Chrome component within the Garden Design System

## Installation

```sh
npm install @zendeskgarden/react-chrome

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usages

```jsx static
/**
 * Include chrome styling at the root of your application
 */
import '@zendeskgarden/react-chrome/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Chrome, Nav, NavItem, ... } from '@zendeskgarden/react-chrome';
import ConnectIcon from '@zendeskgarden/icons/src/26/relationshape-connect.svg';

<ThemeProvider>
  <Chrome>
    <Nav expanded>
      <NavItem logo product="connect" title="Zendesk Connect">
        <NavItemIcon>
          <ConnectIcon />
        </NavItemIcon>
        <NavItemText>Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem current>
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
    </Nav>
    <SubNav>
      <SubNavItem current>
        <SubNavItemText>Subnav 1</SubNavItemText>
      </SubNavItem>
      ...
    </SubNav>
    <Body>
      <Header>
        ...
      </Header>
      <Content>
        <Main>
          Lorem ipsum...
        </Main>
      </Content>
    </Body>
  </Chrome>
</ThemeProvider>
```
