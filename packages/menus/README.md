# @zendeskgarden/react-menus [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-menus.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-menus)

This package includes components relating to menus in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-menus

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include menu styling at the root of your application
 */
import '@zendeskgarden/react-menus/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Menu, Item } from '@zendeskgarden/react-menus';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Menu
    onChange={selectedKey => console.log(`Item selected: "${selectedKey}"`)}
    trigger={({ ref }) => <button ref={ref}>Simple Example</button>}
  >
    <Item key="item-1">Item 1</Item>
    <Item key="item-2">Item 2</Item>
    <Item key="item-3">Item 3</Item>
  </Menu>
</ThemeProvider>;
```
