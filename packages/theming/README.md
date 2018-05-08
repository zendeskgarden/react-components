# @zendeskgarden/react-theming [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-theming.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-theming) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/theming&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/theming) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

The Theming package includes several utility components relating to theming
and RTL capabilities in the [Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-theming
```

## Usage

The `ThemeProvider` component can be used to apply granular theming to
Garden (and custom) components as well as providing a RTL context.

It is intended to be used at the root of an application to provide a global
context for RTL.

`ThemeProvider` components can be nested within each other for areas that require
additional, custom theming.

### Theming

All themes are auto-prefixed and has access to the `props` provided to the component.

```jsx static
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Notification from '@zendeskgarden/react-notifications/Notification';

const theme = {
  'notification': `
    color: red;

    :hover {
      color: blue;
    }
  `
}

<ThemeProvider styles={theme}>
  <Notification>
    This notification content will have custom styling.
  </Notification>
</ThemeProvider>
```

### RTL

```jsx static
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Notification from '@zendeskgarden/react-notifications/Notification';

<ThemeProvider rtl>
  <Notification>This notification content will have custom styling.</Notification>
</ThemeProvider>;
```

The `withTheme` [HOC](https://reactjs.org/docs/higher-order-components.html) utility
allows any component to interact with its `ThemeProvider`.

```jsx static
import withTheme from '@zendeskgarden/react-theming/withTheme';

const StyledDiv = ({ theme, children }) => (
  <div style={{ direction: theme.rtl ? 'rtl' : 'ltr' }}>{children}</div>
);

const LocalizedComponent = withTheme(StyledDiv);

<ThemeProvider rtl>
  <LocalizedComponent>RTL localizable</LocalizedComponent>
</ThemeProvider>;
```

### Target

You can change the target location that style-components injects its CSS into e.g.
if you're using an iframe or shadow DOM.

```jsx static
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Notification from '@zendeskgarden/react-notifications/Notification';

<ThemeProvider target={document.querySelector('.some-element')}>
  <Notification>This notification content will have custom styling.</Notification>
</ThemeProvider>;
```

### WARNING

Theming is meant to be used for small, global changes to a component
(i.e accent color, padding changes, etc.)

If you find yourself "skinning" a component, it may be much easier (and maintainable)
if you were to create these presentation assets as standalone components and use
them with our advanced `Container` abstractions.
