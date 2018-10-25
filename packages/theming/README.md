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
the same properties in serveral components or you're using props to alter your
overrides then please see the below code example.

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
    ${commonOverrides}
    && {
      color: red;
    }
  `,
  'notifications.paragraph': css`
    ${commonOverrides}
    ${props => (props.purple ? 'color: purple' : '')}
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

| Component     | COMPONENT_IDs                                                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| avatars       | avatars.avatar                                                                                                                                                                                                                                                                                                                       |
| buttons       | buttons.anchor, buttons.button, buttons.button&zwnj;\_group_view, buttons.icon, buttons.icon_button                                                                                                                                                                                                                                  |
| checkboxes    | checkboxes.checkbox&zwnj;\_view, checkboxes.hint, checkboxes.input, checkboxes.label, checkboxes.message                                                                                                                                                                                                                             |
| chrome        | chrome.body, chrome.chrome, chrome.content, chrome.header, chrome.header&zwnj;\_item, chrome.header_item_icon, chrome.header_item_text, chrome.header_item_wrapper, chrome.main, chrome.nav, chrome.nav_item, chrome.nav_item_icon, chrome.nav_item_text, chrome.sidebar, chrome.subnav, chrome.subnav_item, chrome.subnav_item_text |
| grid          | grid.col, grid.grid, grid.row                                                                                                                                                                                                                                                                                                        |
| loaders       | loaders.dots, loaders.spinner                                                                                                                                                                                                                                                                                                        |
| menus         | menus.add&zwnj;\_item, menus.header_icon, menus.header_item, menus.item, menus.item_meta, menus.media_body, menus.media_figure, menus.media_item, menus.menu_view, menus.next_item, menus.previous_item, menus.separator                                                                                                             |
| modals        | modals.backdrop, modals.body, modals.close, modals.footer, modals.footer&zwnj;\_item, modals.header, modals.modal_view                                                                                                                                                                                                               |
| notifications | notifications.alert, notifications.close, notifications.notification, notifications.paragraph, notifications.title, notifications.well                                                                                                                                                                                               |
| pagination    | pagination.gap, pagination.next&zwnj;\_page, pagination.page, pagination.pagination_view, pagination.previous_page                                                                                                                                                                                                                   |
| radios        | radios.hint, radios.input, radios.label, radios.message, radios.radio&zwnj;\_view                                                                                                                                                                                                                                                    |
| ranges        | ranges.hint, ranges.label, ranges.message, ranges.range&zwnj;\_group, ranges.single_thumb_view                                                                                                                                                                                                                                       |
| select        | select.add&zwnj;\_item, select.dropdown, select.header_item, select.hint, select.item, select.item_meta, select.label, select.media_body, select.media_item, select.message, select.next_item, select.previous_item, select.select_group, select.select_view, select.separator                                                       |
| tables        | tables.body, tables.caption, tables.cell, tables.group&zwnj;\_row, tables.head, tables.header_cell, tables.header_row, tables.overflow_button, tables.row, tables.sortable, tables.table                                                                                                                                             |
| tabs          | tabs.tab, tabs.tablist, tabs.tabpanel, tabs.tabs&zwnj;\_view                                                                                                                                                                                                                                                                         |
| tags          | tags.avatar, tags.close, tags.tag&zwnj;\_view                                                                                                                                                                                                                                                                                        |
| textfields    | textfields.hint, textfields.input, textfields.label, textfields.media&zwnj;\_figure, textfields.message, textfields.text_group, textfields.textarea                                                                                                                                                                                  |
| toggles       | toggles.hint, toggles.input, toggles.label, toggles.message, toggles.toggle&zwnj;\_view                                                                                                                                                                                                                                              |
| tooltip       | tooltip.light&zwnj;\_tooltip, tooltip.paragraph, tooltip.title, tooltip.tooltip                                                                                                                                                                                                                                                      |
| typography    | typography.lg, typography.md, typography.sm, typography.xl, typography.xxl, typography.xxxl                                                                                                                                                                                                                                          |

### WARNING

Theming is meant to be used for small, global changes to a component
(i.e accent color, padding changes, etc.)

If you find yourself "skinning" a component, it may be much easier (and maintainable)
if you were to create these presentation assets as standalone components and use
them with our advanced `Container` abstractions.
