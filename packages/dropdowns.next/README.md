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

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Combobox } from '@zendeskgarden/react-comboboxes';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Combobox>
    <Combobox.Text>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi...
    </Combobox.Text>
  </Combobox>
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add @zendeskgarden/react-dropdowns.next to root README table.
  * [ ] Delete this comment block.
-->
