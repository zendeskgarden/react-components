The `ButtonGroup` component requires the following structure.
All `Button` components require a unique `key`.

All elements proxy the props of their native DOM representations.

If this abstraction is not able to handle your use-case use the
[ButtonGroupContainer](#buttongroupcontainer) component with our presentation components.

```jsx static
<ButtonGroup>
  <Button key="button-1">Item 1</Button>
  ...
</ButtonGroup>
```

### Uncontrolled Usage

```jsx
<ButtonGroup>
  <Button key="button-1">Item 1</Button>
  <Button key="button-2">Item 2</Button>
  <Button key="button-3">Item 3</Button>
</ButtonGroup>
```

### Controlled Usage

All elements proxy their events and attributes. This example uses controlled
state as well as custom `onClick` events for each button.

```jsx
initialState = { selectedKey: 'button-2' };

<ButtonGroup
  selectedKey={state.selectedKey}
  onStateChange={newState => {
    if (newState.selectedKey) {
      alert(`Button "${newState.selectedKey}" selected`);
    }

    setState(newState);
  }}
>
  <Button key="button-1" onClick={() => console.log('clicked')}>
    Item 1
  </Button>
  <Button key="button-2" onClick={() => console.log('clicked')}>
    Item 2
  </Button>
  <Button disabled>Disabled item</Button>
  <Button key="button-3" onClick={() => console.log('clicked')}>
    Item 3
  </Button>
</ButtonGroup>;
```
