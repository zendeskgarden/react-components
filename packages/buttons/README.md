# @zendesk/garden-react-buttons

This package includes components and render prop containers relating to
buttons within the Garden Design System.

## Installation

```sh
npm install --save-dev @zendesk/garden-react-buttons
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
