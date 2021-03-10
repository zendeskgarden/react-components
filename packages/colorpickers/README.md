# @zendeskgarden/react-colorpickers [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-colorpickers)](https://www.npmjs.com/package/@zendeskgarden/react-colorpickers)

This package includes components related to color pickers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-colorpickers

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Colorpicker } from '@zendeskgarden/react-colorpickers';


/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Colorpicker defaultColor="#17494D">
</ThemeProvider>
```
