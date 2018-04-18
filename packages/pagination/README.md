# @zendesk/garden-react-pagination

This package includes components relating to pagination in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-pagination
```

## Usage

```jsx static
import Pagination from '@zendesk/garden-react-pagination/Pagination';

initialState = {
  currentPage: 1
};

<Pagination totalPages={25} currentPage={state.currentPage} onStateChange={setState} />;
```
