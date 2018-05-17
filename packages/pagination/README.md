# @zendeskgarden/react-pagination [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-pagination.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-pagination) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/pagination&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/pagination) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

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
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Pagination from '@zendeskgarden/react-pagination/Pagination';

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
