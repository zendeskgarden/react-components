# @zendeskgarden/react-datepickers [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-datepickers)](https://www.npmjs.com/package/@zendeskgarden/react-datepickers)

This package includes components relating to datepickers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-datepickers

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

The `<Datepicker>` component allows users to select a
date with a dropdown selection or a variety of localizable
text formats. Internally, the `<Datepicker>` uses [date-fns](https://date-fns.org/)
for it's date calculations and the [Intl.DateTimeFormat utility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
for localization support.

```jsx
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
