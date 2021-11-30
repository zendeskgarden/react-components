# @zendeskgarden/react-{{pluralize (lowercase component)}} [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-{{pluralize (lowercase component)}}
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-{{pluralize (lowercase component)}}

This package includes components related to {{pluralize (capitalize component)}} in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-{{pluralize (lowercase component)}}

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { {{capitalize component}} } from '@zendeskgarden/react-{{pluralize (lowercase component)}}';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <{{capitalize component}}>
    <{{capitalize component}}.Text>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi...</{{capitalize component}}.Text>
  </{{capitalize component}}>
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add @zendeskgarden/react-{{pluralize (lowercase component)}} to root README table.
  * [ ] Delete this comment block.
-->
