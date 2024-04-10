# @zendeskgarden/react-chrome [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-chrome)](https://www.npmjs.com/package/@zendeskgarden/react-chrome)

Collection of elements relating to the Chrome component within the Garden Design System

## Installation

```sh
npm install @zendeskgarden/react-chrome

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usages

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Chrome, Nav, SubNav, Body, Header, Content, Main } from '@zendeskgarden/react-chrome';
import ConnectIcon from '@zendeskgarden/icons/src/26/relationshape-connect.svg';
import BrandmarkIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

<ThemeProvider>
  <Chrome>
    <Nav isExpanded>
      <Nav.Item hasLogo product="connect" title="Zendesk Connect">
        <Nav.ItemIcon>
          <ConnectIcon />
        </Nav.ItemIcon>
        <NavItemText>Zendesk Connect</NavItemText>
      </Nav.Item>
      <Nav.List>
        <Nav.Item isCurrent>
          <Nav.ItemIcon>
            <HomeIcon />
          </Nav.ItemIcon>
          <NavItemText>Home</NavItemText>
        </Nav.Item>
      </Nav.List>
      <Nav.Item hasBrandmark>
        <Nav.ItemIcon>
          <BrandmarkIcon />
        </Nav.ItemIcon>
        <Nav.ItemText>Brandmark</Nav.ItemText>
      </Nav.Item>
    </Nav>
    <SubNav>
      <SubNav.Item isCurrent>
        <SubNav.ItemText>Subnav 1</SubNav.ItemText>
      </SubNav.Item>
      ...
    </SubNav>
    <Body>
      <Header>...</Header>
      <Content>
        <Main>Lorem ipsum...</Main>
      </Content>
    </Body>
  </Chrome>
</ThemeProvider>;
```
