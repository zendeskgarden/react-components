# @zendeskgarden/react-scrollbars [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-scrollbars)

This package includes components relating to scrollbars in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-scrollbars

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include scrollbars styling at the root of your application
 */
import '@zendeskgarden/react-scrollbars/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Scrollbar } from '@zendeskgarden/react-scrollbars';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Scrollbar style={{ width: 200, height: 200 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </Scrollbar>
</ThemeProvider>;
```
