# @zendeskgarden/react-buttons [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-buttons.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-buttons)

This package includes components and render prop containers relating to
buttons within the Garden Design System.

## Installation

```sh
npm install @zendeskgarden/react-buttons

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

### General Buttons

```jsx static
/**
 * Include button styling at the root of your application
 */
import '@zendeskgarden/react-buttons/dist/styles.css';

import { Fragment } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Fragment>
    <Button onClick={() => alert('clicked')}>Default</Button>
    <Button primary disabled>
      Disabled Primary button
    </Button>
  </Fragement>
</ThemeProvider>;
```

### Button Group

```jsx static
initialState = {
  selectedKey: 'item-1'
};

<ButtonGroup selectedKey={state.selectedKey} onStateChange={setState}>
  <Button key="item-1">Item 1</Button>
  <Button key="item-2">Item 2</Button>
  <Button key="item-3">Item 3</Button>
</ButtonGroup>;
```
