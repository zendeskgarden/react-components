# @zendeskgarden/react-chrome [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-chrome.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-chrome) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/chrome&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/chrome) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

Collection of elements, render prop containers, and presentation components
relating to the Chrome component within the Garden Design System

## Installation

```sh
npm install @zendeskgarden/react-chrome
```

## Usages

```jsx static
import { Chrome, Nav, NavItem, ... } from '@zendeskgarden/react-chrome';
import ConnectIcon from '@zendeskgarden/icons/src/26/relationshape-connect.svg';

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
```
