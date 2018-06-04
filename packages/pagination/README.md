# @zendeskgarden/react-pagination [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-pagination.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-pagination)

This package includes components relating to pagination in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-pagination

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include pagination styling at the root of your application
 */
import '@zendeskgarden/react-pagination/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';

initialState = {
  currentPage: 1
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Pagination totalPages={25} currentPage={state.currentPage} onStateChange={setState} />
</ThemeProvider>;
```
