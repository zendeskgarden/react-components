# @zendeskgarden/react-dropdowns.legacy [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-dropdowns.legacy)](https://www.npmjs.com/package/@zendeskgarden/react-dropdowns.legacy)

This package includes components relating to legacy dropdowns in the
[Garden Design System](https://zendeskgarden.github.io/).

:warning: **DEPRECATED:** use `@zendeskgarden/react-dropdowns@^9.0.0` to continue using the latest Garden Dropdowns.

## Installation

```sh
npm install @zendeskgarden/react-dropdowns.legacy

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Basic Example

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns.legacy';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Dropdown onSelect={value => console.log(`Selected: ${value}`)}>
    <Trigger>
      <button>This triggers a menu</button>
    </Trigger>
    <Menu placement="end" hasArrow>
      <Item value="option-1">Option 1</Item>
      <Item value="option-2">Option 2</Item>
      <Item value="option-3">Option 3</Item>
    </Menu>
  </Dropdown>
</ThemeProvider>;
```

For all components within the `react-dropdowns.legacy` package, the menu layouts and
implementations are interchangeable.

Whether you're making a `Select`, `Autocomplete`, or a traditional `Menu` the `<Menu>` implementation
will adapted to its consumer.

## Usage

### Overview

The `react-dropdowns.legacy` package abstracts the common concepts of `Menus`, `Selects`, and `Autocompletes`
into a common API. This includes consistent visuals, common keyboard interaction, and a fully accessible
experience for sighted and non-sighted users.

The customizations available within this can be broken into two groups: _placement / positioning_
and _dropdown state_

### Placement / Positioning

Internally, the `<Dropdown>` component uses [PopperJS](https://popper.js.org/popper-documentation.html)
for its positioning calculations.

The `<Menu>` component accepts all customizations regarding placement, boundaries, overflows,
etc. via the `popperModifiers` prop.

```jsx
/** Customize default overflow settings to position against the `viewport` */
<Menu popperModifiers={{ preventOverflow: { boundariesElement: 'viewport' } }}>
  <Item value="item-1">Item 1</Item>
  <Item value="item-2">Item 2</Item>
  <Item value="item-3">Item 3</Item>
</Menu>
```

### Dropdown State

We use the [Downshift](https://github.com/downshift-js/downshift) render-prop library to
handle our keyboard and accessibility logic.

The following states can be controlled directly from the `<Dropdown>` component:

- **isOpen** Whether the dropdown is currently open
- **highlightedIndex** Which index is currently highlighted
- **inputValue** The value of the input when it's used as an `Autocomplete`
- **selectedItem** The currently selected item
- **selectedItems** The currently selected items

All other customizations may be provided directly to the Downshift provider
via the `downshiftProps` prop.

Downshift provides several advanced customization features that can be very helpful when
customizing this component. The [stateReducer](https://github.com/downshift-js/downshift#statereducer)
pattern is a common customization strategy.

### Server Side Rendering

If you are using server side rendering you may need to [configure specific Downshift settings](https://github.com/downshift-js/downshift#resetidcounter).
This package re-exports the Downshift `resetIdCounter` utility. It allows resetting the internal id
counter which is used to generate unique ids for Downshift.
