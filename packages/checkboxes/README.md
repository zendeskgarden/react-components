# @zendeskgarden/react-checkboxes [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-checkboxes.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-checkboxes) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/checkboxes&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/checkboxes) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to checkboxes in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-checkboxes

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Checkbox, Label } from '@zendeskgarden/react-checkboxes';

initialState = {
  isChecked: false
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Checkbox
    checked={state.isChecked}
    onChange={event => setState({ isChecked: event.target.checked })}
  >
    <Label>Example Checkbox</Label>
  </Checkbox>
</ThemeProvider>;
```
