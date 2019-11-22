# @zendeskgarden/react-breadcrumbs [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-breadcrumbs.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-breadcrumbs)

This package includes components relating to breadcrumbs in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-breadcrumbs

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include breadcrumbs styling at the root of your application
 */
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { Anchor } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Breadcrumb>
    <Anchor href="/">Root</Anchor>
    <Anchor href="..">Parent</Anchor>
    <span>Self</span>
  </Breadcrumb>
</ThemeProvider>;
```
