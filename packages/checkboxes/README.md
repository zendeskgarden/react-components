# @zendeskgarden/react-checkboxes [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-checkboxes.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-checkboxes)

This package includes components relating to checkboxes in the
[Garden Design System](https://zendeskgarden.github.io/).

## DEPRECATION WARNING

This package has been deprecated in favor of the API provided in the
[@zendeskgarden/react-forms](https://garden.zendesk.com/react-components/forms/) package.

This package will stop receiving updates in a future major release.

## Installation

```sh
npm install @zendeskgarden/react-checkboxes

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include checkbox styling at the root of your application
 */
import '@zendeskgarden/react-checkboxes/dist/styles.css';

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
