# @zendesk/garden-react-chrome

Collection of elements, render prop containers, and presentation components
relating to the Chrome component within the Garden Design System

## Installation

```sh
npm install --save-dev @zendesk/garden-react-chrome
```

## Usages

```jsx static
import { Chrome, Nav, NavItem, ... } from '@zendesk/garden-react-chrome';
import ConnectIcon from '@zendeskgarden/svg-icons/src/26/relationshape-connect.svg';

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
