# @zendeskgarden/react-theming [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-theming)](https://www.npmjs.com/package/@zendeskgarden/react-theming)

The Theming package includes several utility components relating to theming
and RTL capabilities in the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-theming

# Peer Dependencies - Also Required
npm install react react-dom styled-components
```

## Usage

The `ThemeProvider` component can be used to apply granular theming to Garden
(and custom) components. It is intended to be used at the root of an
application to provide a global context for RTL. `ThemeProvider` components
can be nested for areas that require additional, custom theming.

### Theming

Garden provides several levels of customization, listed here from simple to
complex, depending on your needs:

- Via the `theme` prop passed to `ThemeProvider`. Garden gives you access to
  many of the font, pixel, and color values used to style individual
  components. By modifying the `theme` you have the ability to customize whole
  aspects of the design system with minimal effort. Example: use `theme` to
  customize component primary accents with your brand color.
- Via the `theme.components` object within the `theme` prop. Using
  `COMPONENT_ID` keys, you can target precise CSS properties for
  customization. Example: use `theme.components` to override the 20px
  bottom margin of `tabs.tablist`.
- Via Garden's
  [`react-containers`](https://github.com/zendeskgarden/react-containers)
  (outside the scope of this component). At some point, the flexibility
  provided by `theme` and `theme.components` has diminishing returns. If you
  find yourself fully re-skinning a component, then you should check out
  Garden's container abstractions. Example: retain the accessible keyboard
  behavior and RTL layout of Garden's tabs component with an alternate visual
  design (i.e. closer to the look of browser tabs).

### RTL

```jsx
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Notification } from '@zendeskgarden/react-notifications';

<ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>
  <Notification>This notification content will render with RTL layout.</Notification>
</ThemeProvider>;
```

The `withTheme` [HOC](https://reactjs.org/docs/higher-order-components.html)
utility allows any component to interact with its `ThemeProvider`.

```jsx
import { withTheme } from '@zendeskgarden/react-theming';

const Div = ({ theme, children }) => (
  <div style={{ direction: theme.rtl ? 'rtl' : 'ltr' }}>{children}</div>
);

const LocalizedComponent = withTheme(Div);

<ThemeProvider theme={{ ...DEFAULT_THEME, rtl: true }}>
  <LocalizedComponent>RTL localizable</LocalizedComponent>
</ThemeProvider>;
```
