# @zendeskgarden/react-{{component}} [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-{{component}}.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-{{component}}) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/{{component}}&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/{{component}}) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to {{component}} in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-{{component}}

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Example from '@zendeskgarden/react-{{component}}/Example';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Example>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Example>;
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add {{component}} to root README table.
  * [ ] Add {{component}} to demo `index.html`.
  * [ ] Delete this comment block.
-->
