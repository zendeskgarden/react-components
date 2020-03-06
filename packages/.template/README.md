# @zendeskgarden/react-{{component}} [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-{{component}}
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-{{component}}

This package includes components related to {{component}} in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-{{component}}

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Example } from '@zendeskgarden/react-{{component}}';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Example>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi...</Example>
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add {{component}} to root README table.
  * [ ] Add {{component}} to demo `index.html`.
  * [ ] Add {{component}} to `styleguide.base.config.js` webpack globals.
  * [ ] Delete this comment block.
-->
