# @zendeskgarden/react-tooltips [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tooltips)](https://www.npmjs.com/package/@zendeskgarden/react-tooltips)

This package includes presentation components and render prop containers relating to Tooltips
in the Garden Design System.

## Installation

```sh
npm install @zendeskgarden/react-tooltips

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### TooltipElement

Standard tooltip usages.

```jsx
import { ThemingProvider } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tooltip content="This is a small tooltip">
    <button>Trigger top placement</button>
  </Tooltip>
</ThemeProvider>;
```
