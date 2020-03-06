# @zendeskgarden/react-typography [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-typography
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-typography

This package includes components relating to typography in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-typography

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { SM } from '@zendeskgarden/react-typography';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <SM>This is some small body text</SM>;
</ThemeProvider>;
```
