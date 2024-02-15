# @zendeskgarden/react-dropdowns.next [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns.next
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-dropdowns.next

This package includes components related to dropdowns in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-dropdowns.next

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### Combobox

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Combobox, Option } from '@zendeskgarden/react-dropdowns.next';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Field>
    <Label>Combobox</Label>
    <Combobox>
      <Option value="One" />
      <Option value="Two" />
      <Option value="Three" />
    </Combobox>
  </Field>
</ThemeProvider>;
```

Beyond this basic example, Garden's `Combobox` offers a comprehensive set of
WAI-ARIA compliant combobox features. Key capabilities include:

- **Controllable**: The `Combobox` functions in both [uncontrolled and
  controlled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
  modes. Controlled mode enables aspects, such as input value, selection value(s),
  listbox expansion, and current option active index, to share and adapt to the
  surrounding UI.
- **Autocomplete-able**: Denotes the `Combobox` with [list
  autocomplete](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).
  Filtering implementation is left to the API consumer.
- **Selectable**: The `Combobox` API ensures the selection of one or more
  listbox option values, while also supporting the W3C [no autocomplete
  example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)
  for use cases like search.
- **Multi-selectable**: This feature enables the `Combobox` to provide WAI-ARIA
  [multi-select
  listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/#ex2_label)
  functionality with option-as-tag value rendering.
- **Non-editable**: The `Combobox` supports [select-only
  mode](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/),
  where the user cannot modify the `<input>`.
- **Filterable**: The `Combobox` offers various filtering methods for listbox
  options. Details of the filtering implementation are left to the API consumer.
- **Markup-able**: The `Combobox` can convert input value text to rich HTML
  markup on blur in single-selection mode.
- **Decorate-able**: The `Combobox` allows adding start and end media (SVG icons).
  Certain features will replace end media with Garden's standard dropdown chevron
  treatment.
- **Group-able**: The `Combobox` API utilizes fully accessible `<OptGroup>`
  components for grouping, similar to the corresponding HTML element.
- **Compactible**: Like other form elements, the `Combobox` supports compact
  sizing.
- **Field-able**: The `Combobox` builds on Garden’s Field API context to
  establish accessible relationships with corresponding Label, Hint, and Message
  components.
- **Validate-able**: The `Combobox` provides validation styling and
  accessibility comparable to other Garden form components.
- **RTL theme-able**: Functionality displays and operates correctly for
  left-to-right and right-to-left layouts.

### Menu

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Menu button="Choose an item">
    <Item value="item-01" label="One" />
    <Item value="item-02" label="Two" />
    <Item value="item-03" label="Three" />
  </Menu>
</ThemeProvider>;
```

Visit [storybook](https://zendeskgarden.github.io/react-components) for live examples.
