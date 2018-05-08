# @zendeskgarden/react-pagination [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-pagination.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-pagination) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/pagination&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/pagination) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to pagination in the
[Garden Design System](http://zendeskgarden.github.io/).

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
