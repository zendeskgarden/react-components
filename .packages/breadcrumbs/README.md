# @zendeskgarden/react-breadcrumbs [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-breadcrumbs)](https://www.npmjs.com/package/@zendeskgarden/react-breadcrumbs)

This package includes components relating to breadcrumbs in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-breadcrumbs

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
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
