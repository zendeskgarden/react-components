# @zendeskgarden/react-pagination [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-pagination)](https://www.npmjs.com/package/@zendeskgarden/react-pagination)

This package includes components relating to pagination in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-pagination

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

### Offset Pagination

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';

initialState = {
  currentPage: 1
};

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Pagination
    totalPages={11}
    currentPage={state.currentPage}
    onChange={currentPage => setState({ currentPage })}
  />
</ThemeProvider>;
```

### Cursor Pagination

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { CursorPagination } from '@zendeskgarden/react-pagination';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <CursorPagination aria-label="Cursor pagination">
    <CursorPagination.First>First</CursorPagination.First>
    <CursorPagination.Previous>Previous</CursorPagination.Previous>
    <CursorPagination.Next>Next</CursorPagination.Next>
    <CursorPagination.Last>Last</CursorPagination.Last>
  </CursorPagination>
</ThemeProvider>;
```
