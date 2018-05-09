# @zendeskgarden/react-buttons [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-buttons.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-buttons) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/buttons&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/buttons) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components and render prop containers relating to
buttons within the Garden Design System.

## Installation

```sh
npm install @zendeskgarden/react-buttons
```

## Usage

### General Buttons

```jsx static
<Button onClick={() => alert('clicked')}>Default</Button>
<Button primary disabled>Disabled Primary button</Button>
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
