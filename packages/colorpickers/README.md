# @zendeskgarden/react-colorpickers [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-colorpickers)](https://www.npmjs.com/package/@zendeskgarden/react-colorpickers)

This package includes components related to color pickers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-colorpickers

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### ColorPicker

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { ColorPicker } from '@zendeskgarden/react-colorpickers';


/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <ColorPicker defaultColor="#17494D">
</ThemeProvider>
```

### ColorPickerDialog

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { ColorPickerDialog } from '@zendeskgarden/react-colorpickers';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <ColorPickerDialog defaultColor="#17494D" buttonProps={{ 'aria-label': 'Example label' }} />
</ThemeProvider>;
```

### ColorSwatch

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';

const colors = [
  [
    { label: 'Green-800', value: '#0b3b29' },
    { label: 'Green-700', value: '#186146' }
  ],
  [
    { label: 'Green-600', value: '#038153' },
    { label: 'Green-500', value: '#228f67' }
  ]
];

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <ColorSwatch colors={colors} name="swatch" />
</ThemeProvider>;
```

### ColorSwatchDialog

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';

const colors = [
  [
    { label: 'Green-800', value: '#0b3b29' },
    { label: 'Green-700', value: '#186146' }
  ],
  [
    { label: 'Green-600', value: '#038153' },
    { label: 'Green-500', value: '#228f67' }
  ]
];

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <ColorSwatchDialog
    colors={colors}
    name="swatch-dialog"
    buttonProps={{ 'aria-label': 'Example label' }}
  />
</ThemeProvider>;
```
