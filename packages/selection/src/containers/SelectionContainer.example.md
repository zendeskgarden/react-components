The `SelectionContainer` component helps ensure that any
"single-selection scenario" has the required:

* Keyboard Navigation support
  * Left/Right (Up/Down in RTL) arrow movement
  * Home/End key shortcuts
  * Click selection
  * Custom focused state for Keyboard-Focus vs. MouseDown-Focus
* RTL navigation support
  * Compatible with element shifting when `direction: rtl` is enabled
* Accessibility for vision-impaired users
* Uses the W3 "aria-activedescendant" focus management strategy
  * [https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant](https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant)

## Basic Usage

The `SelectionContainer` component follows the "render prop pattern".
This means that it doesn't render any UI, it just provides the required
navigation and accessibility props to your UI components.

It can be used in an _uncontrolled_ or _controlled_ state (similar to an `input`).

* _uncontrolled_ - The component manages the focused and selected state internally
* _controlled_ - You manage the state of the container using the
  provided props to give you full control of what's being visualized.

This render container supplies 2 render methods:

* `getContainerProps()`
  * Must be applied to a parent element for accessibility.
* `getItemProps({ key: required })`
  * Apply to any selectable item. A unique key must
    be provided for each selectable item, regardless
    of whether it is an iteration.

and 2 state attributes:

* `focusedKey`
* `selectedKey`

Any attributes passed to `getContainerProps` or `getItemProps` will
be applied to the element. This usage allows you to apply events
and props to the component without interfering with the containers
logic. Any event that has `event.preventDefault()` called within
it will not be triggered within the component.

### Uncontrolled Container

```jsx
const ExampleItem = styled.div`
  display: inline-block;
  padding: 15px;
  outline: ${({ focused }) => (focused ? 'red auto 5px' : '')};
  background-color: ${({ selected }) => (selected ? 'grey' : '')};
`;

const items = ['Button 1', 'Button 2', 'Button 3'];

<SelectionContainer>
  {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
    <div {...getContainerProps()}>
      {items.map(item => (
        <ExampleItem
          {...getItemProps({
            key: item,
            selected: selectedKey === item,
            focused: focusedKey === item
          })}
        >
          {item}
        </ExampleItem>
      ))}
    </div>
  )}
</SelectionContainer>;
```

### Controlled Container

```jsx
const ExampleItem = styled.div`
  display: inline-block;
  padding: 15px;
  outline: ${({ focused }) => (focused ? 'red auto 5px' : '')};
  background-color: ${({ selected }) => (selected ? 'grey' : '')};
`;

const items = ['Controlled 1', 'Controlled 2', 'Controlled 3'];

initialState = {
  selectedKey: items[1]
};

<SelectionContainer
  focusedKey={state.focusedKey}
  selectedKey={state.selectedKey}
  onStateChange={newState => setState(newState)}
>
  {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
    <div {...getContainerProps()}>
      {items.map(item => (
        <ExampleItem
          {...getItemProps({
            key: item,
            selected: selectedKey === item,
            focused: focusedKey === item
          })}
        >
          {item}
        </ExampleItem>
      ))}
    </div>
  )}
</SelectionContainer>;
```

### Disabled Items

The `SelectionContainer` is unopinionated when it comes to disabled items.
To make an item non-selectable just don't spread the `getItemProps` onto the element.

The concept of a disabled item can vary drastically when it comes to accessibility
so make sure to apply any specific accessibility props that are needed.

```jsx
const ExampleItem = styled.div`
  display: inline-block;
  padding: 15px;
  outline: ${({ focused }) => (focused ? 'red auto 5px' : '')};
  background-color: ${({ selected }) => (selected ? 'grey' : '')};
  ${({ disabled }) => (disabled ? 'color: lightgrey;' : '')};
`;

const items = [{ id: 'Button 1' }, { id: 'Disabled Button', disabled: true }, { id: 'Button 3' }];

<SelectionContainer>
  {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
    <div {...getContainerProps()}>
      {items.map(item => {
        let props = { key: item.id };

        if (item.disabled) {
          props.disabled = true;
        } else {
          props = getItemProps({
            key: item.id,
            selected: selectedKey === item.id,
            focused: focusedKey === item.id
          });
        }

        return <ExampleItem {...props}>{item.id}</ExampleItem>;
      })}
    </div>
  )}
</SelectionContainer>;
```

### Vertical Navigation Direction

You are able to control (Left/Right) vs. (Up/Down) arrow key navigation
using the `direction` prop.

```jsx
const ExampleItem = styled.div`
  padding: 15px;
  outline: ${({ focused }) => (focused ? 'red auto 5px' : '')};
  background-color: ${({ selected }) => (selected ? 'grey' : '')};
`;

const items = ['Button 1', 'Button 2', 'Button 3', '4', '5', '6', '7', '8'];

<SelectionContainer direction="vertical">
  {({ getContainerProps, getItemProps, focusedKey, selectedKey }) => (
    <div
      {...getContainerProps({
        style: { height: 200, overflowY: 'auto' }
      })}
    >
      {items.map(item => (
        <ExampleItem
          {...getItemProps({
            key: item,
            selected: selectedKey === item,
            focused: focusedKey === item
          })}
        >
          {item}
        </ExampleItem>
      ))}
    </div>
  )}
</SelectionContainer>;
```

### Custom Focus Movement

The render prop provides access to the `SingleSelectionModel` that is tied to the focus state.

```jsx
const ExampleItem = styled.div`
  display: inline-block;
  padding: 15px;
  outline: ${({ focused }) => (focused ? 'red auto 5px' : '')};
  background-color: ${({ selected }) => (selected ? 'grey' : '')};
`;

const items = ['Controlled 1', 'Controlled 2', 'Controlled 3'];

initialState = {
  selectedKey: items[1]
};

<SelectionContainer
  focusedKey={state.focusedKey}
  selectedKey={state.selectedKey}
  onStateChange={newState => setState(newState)}
>
  {({ getContainerProps, getItemProps, focusedKey, selectedKey, focusSelectionModel }) => (
    <div {...getContainerProps()}>
      {items.map(item => (
        <ExampleItem
          {...getItemProps({
            key: item,
            selected: selectedKey === item,
            focused: focusedKey === item
          })}
        >
          {item}
        </ExampleItem>
      ))}
      <button onClick={() => focusSelectionModel.selectFirst()}>First</button>
      <button onClick={() => focusSelectionModel.selectLast()}>Last</button>
    </div>
  )}
</SelectionContainer>;
```
