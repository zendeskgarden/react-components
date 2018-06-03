# @zendeskgarden/react-ranges [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-ranges.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-ranges)

This package includes components relating to ranges in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-ranges

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include range styling at the root of your application
 */
import '@zendeskgarden/react-ranges/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { RangeField, Label, Hint, Range, Message } from '@zendeskgarden/react-ranges';

initialState = {
  value: 25
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <RangeField>
    <Label>Labely</Label>
    <Hint>Hint</Hint>
    <Range
      step={5}
      min={0}
      max={100}
      value={state.value}
      onChange={event => setState({ value: event.target.value })}
    />
    <Message>Example Messaging</Message>
  </RangeField>
</ThemeProvider>;
```
