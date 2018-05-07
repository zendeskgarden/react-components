```jsx
const items = ['item-1', 'item-2', 'item-3'];

initialState = {
  selectedKey: items[0]
};

<SelectContainer
  selectedKey={state.selectedKey}
  onChange={selectedKey => setState({ selectedKey })}
  trigger={({ getTriggerProps, triggerRef, isOpen }) => (
    <SelectView
      {...getTriggerProps({
        open: isOpen,
        focused: isOpen,
        inputRef: ref => {
          this.triggerRef = ref;
          triggerRef(ref);
        }
      })}
    >
      {state.selectedKey}
    </SelectView>
  )}
>
  {({ getSelectProps, placement, getItemProps, focusedKey, selectedKey, dropdownRef }) => (
    <Dropdown
      {...getSelectProps({
        placement,
        animate: true,
        dropdownRef,
        style: { width: this.triggerRef.getBoundingClientRect().width }
      })}
    >
      {items.map(key => (
        <Item
          {...getItemProps({
            key,
            textValue: key,
            focused: focusedKey === key,
            checked: selectedKey === key
          })}
        >
          {key}
        </Item>
      ))}
    </Dropdown>
  )}
</SelectContainer>;
```
