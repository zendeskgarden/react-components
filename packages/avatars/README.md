# @zendeskgarden/react-avatars [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-avatars.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-avatars)

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
/**
 * Include avatar styling at the root of your application
 */
import '@zendeskgarden/react-avatars/dist/styles.css';

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
