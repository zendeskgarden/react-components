# @zendeskgarden/react-forms [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-forms)](https://www.npmjs.com/package/@zendeskgarden/react-forms)

This package includes components relating to native form fields in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-forms

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Input } from '@zendeskgarden/react-forms';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <form>
    <Field>
      <Field.Label>Example Text Input</Field.Label>
      <Field.Hint>Hint text</Field.Hint>
      <Input placeholder="Accepts all native input props" />
      <Field.Message>Default message styling</Field.Message>
    </Field>
  </form>
</ThemeProvider>;
```
