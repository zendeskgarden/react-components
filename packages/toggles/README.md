# @zendeskgarden/react-toggles [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-toggles.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-toggles)

This package includes components relating to toggles in the
[Garden Design System](https://zendeskgarden.github.io/).

## DEPRECATION WARNING

This package has been deprecated in favor of the API provided in the
[@zendeskgarden/react-forms](https://garden.zendesk.com/react-components/forms/) package.

This package will stop receiving updates in a future major release.

## Installation

```sh
npm install @zendeskgarden/react-toggles

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include toggles styling at the root of your application
 */
import '@zendeskgarden/react-toggles/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Toggle, Label } from '@zendeskgarden/react-toggles';

initialState = {
  isEnabled: false
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Toggle
    checked={state.isEnabled}
    onChange={event => setState({ isEnabled: event.target.checked })}
  >
    <Label>Example Toggle</Label>
  </Toggle>
</ThemeProvider>;
```
