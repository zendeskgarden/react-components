# @zendeskgarden/react-chrome [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-chrome)](https://www.npmjs.com/package/@zendeskgarden/react-chrome)

Collection of elements relating to the Chrome component within the Garden Design System

| ⚠️ **DEPRECATED**                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------ |
| The `Chrome` components (including `Body`, `Content`, `Header`, `Main`, `Nav`, `SkipNav`) are deprecated for general use. |

## Installation

```sh
npm install @zendeskgarden/react-chrome

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usages

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Chrome, Nav, Body, Header, Content, Main } from '@zendeskgarden/react-chrome';
import SupportIcon from '@zendeskgarden/icons/src/26/relationshape-support.svg';
import BrandmarkIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

<ThemeProvider>
  <Chrome>
    <Nav isExpanded>
      <Nav.Item hasLogo product="support" title="Zendesk Support">
        <Nav.ItemIcon>
          <SupportIcon />
        </Nav.ItemIcon>
        <NavItemText>Zendesk Support</NavItemText>
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
    <Body>
      <Header>...</Header>
      <Content>
        <Main>Lorem ipsum...</Main>
      </Content>
    </Body>
  </Chrome>
</ThemeProvider>;
```
