# @zendeskgarden/react-trees [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-trees
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-trees

This package includes components related to Trees in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-trees

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tree } from '@zendeskgarden/react-trees';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tree>
    <Tree.Text>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi...</Tree.Text>
  </Tree>
</ThemeProvider>;
```

<!--
  TODO:

  * [ ] Add @zendeskgarden/react-trees to root README table.
  * [ ] Delete this comment block.
-->
