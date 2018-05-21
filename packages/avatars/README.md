# @zendeskgarden/react-avatars [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-avatars.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-avatars) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/avatars&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/avatars) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to avatars in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-avatars

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Avatar>
    <img src="images/amir.png" alt="Example Avatar" />
  </Avatar>
</ThemeProvider>;
```
