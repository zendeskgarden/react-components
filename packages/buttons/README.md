# @zendeskgarden/react-buttons [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-buttons)](https://www.npmjs.com/package/@zendeskgarden/react-buttons)

This package includes components relating to buttons in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-buttons

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### Button

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <>
    <Button onClick={() => alert('clicked')}>Default</Button>
    <Button isPrimary isDanger>
      Primary danger button
    </Button>
  </>
</ThemeProvider>;
```

### Media button

```jsx
import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import StartIcon from '@zendeskgarden/icons/src/16/shield-stroke.svg';
import EndIcon from '@zendeskgarden/icons/src/16/chevron-down-stroke.svg';

const MediaButton = ({ children, ...props }) => {
  const [isRotated, setRotated] = useState(false);

  return (
    <Button onClick={() => setRotated(!isRotated)} {...props}>
      <Button.StartIcon>
        <StartIcon />
      </Button.StartIcon>
      {children}
      <Button.EndIcon isRotated={isRotated}>
        <EndIcon />
      </Button.EndIcon>
    </Button>
  );
};
```

### Button group

```jsx
import React, { useState } from 'react';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const MyButtonGroup = ({ children, initialItem, ...props }) => {
  const [selectedItem, setSelectedItem] = useState(initialItem);

  return (
    <ButtonGroup
      selectedItem={selectedItem}
      onSelect={selectedItem => setSelectedItem(selectedItem)}
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
