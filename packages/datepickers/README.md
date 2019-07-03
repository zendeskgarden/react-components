# @zendeskgarden/react-datepickers [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-datepickers.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-datepickers)

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
/**
 * Include datepickers styling at the root of your application
 */
import '@zendeskgarden/react-datepickers/dist/styles.css';

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

## date-fns dependency

We currently use the v2, `date-fns@next`, distribution of [date-fns](https://date-fns.org/).
This allows us to provide a wider range of locales and include non-strict date parsing.
Ensure you are depending on locales from this version of `date-fns`.
