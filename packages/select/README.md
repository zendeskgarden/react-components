# @zendeskgarden/react-select [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-select.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-select)

This package includes components relating to select fields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-select

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include select styling at the root of your application
 */
import '@zendeskgarden/react-select/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { SelectField, Label, Hint, Select, Item } from '@zendeskgarden/react-select';

initialState = {
  selectedKey: 'item-1'
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <SelectField>
    <Label>Example Select</Label>
    <Hint>Hinty hint</Hint>
    <Select
      selectedKey={state.selectedKey}
      onChange={selectedKey => setState({ selectedKey })}
      options={[<Item key="item-1">Item 1</Item>, <Item key="item-2">Item 2</Item>]}
    >
      {state.selectedKey}
    </Select>
  </SelectField>
</ThemeProvider>;
```
