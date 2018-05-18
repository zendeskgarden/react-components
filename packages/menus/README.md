# @zendeskgarden/react-menus [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-menus.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-menus) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/menus&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/menus) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

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
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Menu from '@zendeskgarden/react-menus/Menu';
import Item from '@zendeskgarden/react-menus/Item';

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
