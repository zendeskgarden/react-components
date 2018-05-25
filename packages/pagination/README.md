# @zendeskgarden/react-pagination [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-pagination.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-pagination)

This package includes components relating to pagination in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-pagination
```

## Usage

```jsx static
import Pagination from '@zendeskgarden/react-pagination/Pagination';

initialState = {
  currentPage: 1
};

<Pagination totalPages={25} currentPage={state.currentPage} onStateChange={setState} />;
```
