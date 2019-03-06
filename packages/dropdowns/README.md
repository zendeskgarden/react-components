# @zendeskgarden/react-dropdowns [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-dropdowns.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-dropdowns)

This package includes components relating to dropdowns in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-dropdowns

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include dropdowns styling at the root of your application
 */
import '@zendeskgarden/react-dropdowns/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Dropdown, Menu, Item, Select } from '@zendeskgarden/react-dropdowns';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Dropdown>
    <Select>Sample Item</Select>
    <Menu>
      <Item value="item-1">Item 1</Item>
      <Item value="item-2">Item 2</Item>
      <Item value="item-3">Item 3</Item>
    </Menu>
  </Dropdown>
</ThemeProvider>;
```
