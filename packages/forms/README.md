# @zendeskgarden/react-forms [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-forms.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-forms)

This package includes components relating to native form fields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-forms

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components@3.4.10 @zendeskgarden/react-theming
```

## Requirements

This package uses several modern React features like [Context](https://reactjs.org/docs/context.html)
and [Hooks](https://reactjs.org/docs/hooks-intro.html) to provide an enhanced component API.

These features require the following minimum versions of the dependencies:

- `react@^16.8.0`
- `react-dom@^16.8.0`
- `styled-components@^4.2.0`

## Usage

```jsx static
/**
 * Include forms styling at the root of your application
 */
import '@zendeskgarden/react-forms/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Hint, Input, Message } from '@zendeskgarden/react-forms';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <form>
    <Field>
      <Label>Example Text Input</Label>
      <Hint>Hint text</Hint>
      <Input placeholder="Accepts all native input props" />
      <Message>Default message styling</Message>
    </Field>
  </form>
</ThemeProvider>;
```
