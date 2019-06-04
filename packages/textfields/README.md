# @zendeskgarden/react-textfields [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-textfields.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-textfields)

This package includes components relating to textfields in the
[Garden Design System](https://zendeskgarden.github.io/).

## DEPRECATION WARNING

This package has been deprecated in favor of the API provided in the
[@zendeskgarden/react-forms](https://garden.zendesk.com/react-components/forms/) package.

This package will stop receiving updates in a future major release.

## Installation

```sh
npm install @zendeskgarden/react-textfields

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include textfield styling at the root of your application
 */
import '@zendeskgarden/react-textfields/dist/styles.css';

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
