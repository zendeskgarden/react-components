# @zendeskgarden/react-notifications [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-notifications)](https://www.npmjs.com/package/@zendeskgarden/react-notifications)

This package includes several varieties of notifications and wells within
the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-notifications

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

## Notifications

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification } from '@zendeskgarden/react-notifications';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Notification>
    <Notification.Title>Example Title</Notification.Title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </Notification>
</ThemeProvider>;
```

## Toasts

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Notification, ToastProvider, useToast } from '@zendeskgarden/react-notifications';

const ToastExample = () => {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() =>
        addToast(({ close }) => (
          <Notification>
            Example notification
            <Notification.Close onClick={close} aria-label="Close" />
          </Notification>
        ))
      }
    >
      Add toast
    </Button>
  );
};

<ThemeProvider>
  <ToastProvider>
    <ToastExample />
  </ToastProvider>
</ThemeProvider>;
```
