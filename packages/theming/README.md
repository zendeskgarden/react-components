# @zendeskgarden/react-theming [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-theming.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-theming)

The Theming package includes several utility components relating to theming
and RTL capabilities in the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-theming

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

The `ThemeProvider` component can be used to apply granular theming to Garden
(and custom) components. It is intended to be used at the root of an
application to provide a global context for RTL. `ThemeProvider` components
can be nested for areas that require additional, custom theming.

### RTL

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification } from '@zendeskgarden/react-notifications';

<ThemeProvider rtl>
  <Notification>This notification content will render with RTL layout.</Notification>
</ThemeProvider>;
```

The `withTheme` [HOC](https://reactjs.org/docs/higher-order-components.html) utility
allows any component to interact with its `ThemeProvider`.

```jsx static
import { withTheme } from '@zendeskgarden/react-theming';

const Div = ({ theme, children }) => (
  <div style={{ direction: theme.rtl ? 'rtl' : 'ltr' }}>{children}</div>
);

const LocalizedComponent = withTheme(Div);

<ThemeProvider rtl>
  <LocalizedComponent>RTL localizable</LocalizedComponent>
</ThemeProvider>;
```
