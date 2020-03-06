# @zendeskgarden/react-datepickers [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-datepickers
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-datepickers

This package includes components relating to datepickers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-datepickers

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Datepicker } from '@zendeskgarden/react-datepickers';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Field>
    <Label>Example datepicker</Label>
    <Datepicker value={new Date()} onChange={selectedDate => console.log(selectedDate)}>
      <Input />
    </Datepicker>
  </Field>
</ThemeProvider>;
```
