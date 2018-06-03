# @zendeskgarden/react-tags [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tags.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tags)

This package includes components relating to tags in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tags

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include tag styling at the root of your application
 */
import '@zendeskgarden/react-tags/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tag, Avatar, Close } from '@zendeskgarden/react-tags';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tag pill>
    <Avatar>
      <img src="images/amir.png" alt="Example Avatar" />
    </Avatar>
    Default tag with avatar
    <Close onClick={() => alert('remove tag')} />
  </Tag>
</ThemeProvider>;
```
