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

The `ThemeProvider` component can be used to apply granular theming to
Garden (and custom) components as well as providing a RTL context.

It is intended to be used at the root of an application to provide a global
context for RTL.

`ThemeProvider` components can be nested within each other for areas that require
additional, custom theming.

### Theming

All themes are auto-prefixed and has access to the `props` provided to the component.

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification, Title, Paragraph } from '@zendeskgarden/react-notifications';

const theme = {
  'notifications.title': `
    && {
      color: red;

      :hover {
        color: blue;
      }
    }
  `,
  'notifications.paragraph': props => (props.purple ? 'color: purple' : '')
};

<ThemeProvider theme={theme}>
  <Notification>
    <Title>Themed Title (hover as well)</Title>
    <Paragraph purple>Custom theme triggered by prop</Paragraph>
  </Notification>
</ThemeProvider>;
```

### RTL

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification } from '@zendeskgarden/react-notifications';

<ThemeProvider rtl>
  <Notification>This notification content will have custom styling.</Notification>
</ThemeProvider>;
```

The `withTheme` [HOC](https://reactjs.org/docs/higher-order-components.html) utility
allows any component to interact with its `ThemeProvider`.

```jsx static
import { withTheme } from '@zendeskgarden/react-theming';

const StyledDiv = ({ theme, children }) => (
  <div style={{ direction: theme.rtl ? 'rtl' : 'ltr' }}>{children}</div>
);

const LocalizedComponent = withTheme(StyledDiv);

<ThemeProvider rtl>
  <LocalizedComponent>RTL localizable</LocalizedComponent>
</ThemeProvider>;
```

### Advanced usage

If you need to compose from other theme overrides e.g. you find yourself overriding
the same properties in several components or you're using props to alter your
overrides then please see the following code example.

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Notification, Title, Paragraph } from '@zendeskgarden/react-notifications';
import { css } from 'styled-components';

const commonOverrides = `
  &&:hover {
    color: blue;
  }
`;
const theme = {
  'notifications.title': css`
    ${commonOverrides} && {
      color: red;
    }
  `,
  'notifications.paragraph': css`
    ${commonOverrides} ${props => (props.purple ? 'color: purple' : '')};
  `
};

<ThemeProvider theme={theme}>
  <Notification>
    <Title>Themed Title (hover as well)</Title>
    <Paragraph purple>Custom theme triggered by prop</Paragraph>
  </Notification>
</ThemeProvider>;
```

The main difference here is the usage of the [`css` helper](https://www.styled-components.com/docs/api#css)
from styled-components. This will correctly pass down the props from the component so you can conditionally
apply styles based on props or compose from other template literals.

### Theme ids

Each component has a `COMPONENT_ID` applied so you can target it in your own theme
file to override the default look and feel. This table contains all the ids and which
package they apply to.

```jsx noeditor
<CIDTable />
```

### WARNING

Theming is meant to be used for small, global changes to a component
(i.e accent color, padding changes, etc.)

If you find yourself "skinning" a component, it may be much easier (and maintainable)
if you were to create these presentation assets as standalone components and use
them with our advanced `Container` abstractions.
