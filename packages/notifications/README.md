# @zendeskgarden/react-notifications [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-notifications
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-notifications

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
