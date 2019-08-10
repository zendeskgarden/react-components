# @zendeskgarden/react-buttons [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-buttons.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-buttons)

This package includes components relating to buttons in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-buttons

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <>
    <Button onClick={() => alert('clicked')}>Default</Button>
    <Button primary danger>
      Primary danger button
    </Button>
  </>
</ThemeProvider>;
```

### Button Group

```jsx static
import React, { useState } from 'react';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const MyButtonGroup = ({ children, initialKey, ...props }) => {
  const [selectedKey, setSelectedKey] = useState(initialKey);

  return (
    <ButtonGroup
      selectedKey={selectedKey}
      onStateChange={newState => setSelectedKey(newState.selectedKey)}
      {...props}
    >
      {children}
    </ButtonGroup>
  );
};

<MyButtonGroup initialKey="item-1">
  <Button key="item-1">Item 1</Button>
  <Button key="item-2">Item 2</Button>
  <Button key="item-3">Item 3</Button>
</MyButtonGroup>;
```
