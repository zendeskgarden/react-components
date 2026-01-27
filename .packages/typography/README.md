# @zendeskgarden/react-typography [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-typography)](https://www.npmjs.com/package/@zendeskgarden/react-typography)

This package includes components relating to typography in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-typography

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { SM } from '@zendeskgarden/react-typography';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <SM>This is some small body text</SM>;
</ThemeProvider>;
```
