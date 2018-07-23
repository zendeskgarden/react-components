# @zendeskgarden/react-loaders [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-loaders.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-loaders)

This package includes components relating to loaders in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-loaders

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include loaders styling at the root of your application
 */
import '@zendeskgarden/react-loaders/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Example } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Example>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Example>;
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add loaders to root README table.
  * [ ] Add loaders to demo `index.html`.
  * [ ] Delete this comment block.
-->
