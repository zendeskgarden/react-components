# @zendeskgarden/react-notifications [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-notifications.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-notifications)

This package includes several varieties of notifications and wells within
the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-notifications

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include notification styling at the root of your application
 */
import '@zendeskgarden/react-notifications/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification, Title } from '@zendeskgarden/react-notifications';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Notification>
    <Title>Example Title</Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </Notification>
</ThemeProvider>;
```
