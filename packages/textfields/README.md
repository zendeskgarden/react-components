# @zendeskgarden/react-textfields [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-textfields.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-textfields) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/textfields&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/textfields) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to textfields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-textfields

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <TextField>
    <Label>Example Garden Input</Label>
    <Hint>Hinty hint</Hint>
    <Input placeholder="Accepts all native input props" />
    <Message>Default message styling</Message>
  </TextField>
</ThemeProvider>;
```
