## WIP MultiSelect

This component is not released and is for demo purposes only.

The MultiSelect component acts as a simple abstraction around the keyboard navigation and interactability of a Token Select.

### Selected Items
The `selectedItems` prop can be anything wrapped in the `Selectable` higher-order component.  With the `Selectable` HOC it respects the `disabled, value, and onRemove` props.  The most common use-case would be the `Label` component and is made available through `MultiSelect.Label` component.

### Menu items
The `menuItems` prop can also be anything wrapped in the `Selectable` higher-order component. `MultiSelect.Item` is the most common use-case.

#### Common Usage

```
const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

const menuItems = (textValue, state, setState) => {
  if (textValue.length === 0) {
    return [];
  }

  return [
    <MultiSelect.Item onClick={() => onMenuSelect(`${textValue} - ${textValue}`, state, setState)} key="0">{textValue} - {textValue}</MultiSelect.Item>,
    <MultiSelect.Item disabled  key="1">Disabled menu item</MultiSelect.Item>,
    <MultiSelect.Item onClick={() => onMenuSelect(`${textValue} - ${textValue} - ${textValue}`, state, setState)} key="2">{textValue} - {textValue} - {textValue}</MultiSelect.Item>
  ]
};

const onMenuSelect = (textValue, state, setState) => {
  const newItems = state.selectedItems.slice();
  newItems.push(<MultiSelect.Label onRemove={() => onRemove(newItems.length - 1, state, setState)} size='medium' pill avatar={avatar} className="u-m-xxs" type='light' value={textValue}>{textValue}</MultiSelect.Label>);
  setState({ selectedItems: newItems, textValue: '' });
};

const onRemove = (index, state, setState) => {
  debugger;
  const newItems = state.selectedItems.slice();
  newItems.splice(index, 1);
  setState({ selectedItems: newItems });
};

<State initialState={{ textValue: '', selectedItems: [] }}>
  {(state, setState) => <MultiSelect
        label='Common Example'
        hint='Try keyboard navigation and removing labels'
        onTextChange={textValue => setState({ textValue })}
        textValue={state.textValue}
        selectedItems={state.selectedItems}
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;

          if (isEnterKey && state.textValue) {
            const newItems = state.selectedItems.slice();
            newItems.push(<MultiSelect.Label onRemove={() => onRemove(newItems.length - 1, state, setState)} size='medium' pill avatar={avatar} className="u-m-xxs" type='light' value={state.textValue}>{state.textValue}</MultiSelect.Label>);
            setState({ selectedItems: newItems, textValue: '' });
          }
        }}
      >
        {menuItems(state.textValue, state, setState)}
      </MultiSelect>}
</State>
```

#### Custom Keyboard Events

```
const onCopy = () => console.log('Copied!');

const onRemove = (index) => {
  const newItems = state.selectedItems.slice();
  newItems.splice(index, 1);
  setState({ selectedItems: newItems });
};

initialState = { textValue: '', selectedItems: [], selected: '' };

<Grid columns={1} stretched>
  {state.selected && <p>{state.selected} was copied</p>}
  <MultiSelect
    label='Custom Keyboard Events'
    hint='Try to copy a selected label'
    onTextChange={textValue => setState({ textValue })}
    textValue={state.textValue}
    selectedItems={state.selectedItems}
    onKeyDown={(event, selectedItem) => {
      const isEnterKey = event.keyCode === 13;
      const isCopyKey = event.keyCode === 67 && event.metaKey;

      if (isCopyKey) {
        setState({ selected: selectedItem });
      }

      if (isEnterKey && state.textValue) {
        const newItems = state.selectedItems.slice();
        newItems.push(<MultiSelect.Label onRemove={() => onRemove(newItems.length)} size='medium' pill className="u-m-xxs" type='light' value={state.textValue}>{state.textValue}</MultiSelect.Label>);
        setState({ selectedItems: newItems, textValue: '' });
      }
    }}
  >
  </MultiSelect>
</Grid>
```

#### Custom Validation

```
const onRemove = (index) => {
  const newItems = state.selectedItems.slice();
  newItems.splice(index, 1);
  setState({ selectedItems: newItems });
};

const isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const menuItems = (textValue) => {
  if (textValue.length === 0) {
    return [];
  }

  if (textValue.indexOf('@') !== -1) {
    return [];
  }

  return [
    <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@gmail.com`)}>{textValue}@gmail.com</MultiSelect.Item>,
    <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@yahoo.com`)}>{textValue}@yahoo.com</MultiSelect.Item>,
    <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@outlook.com`)}>{textValue}@outlook.com</MultiSelect.Item>
  ]
};

const onMenuSelect = (textValue) => {
  const newItems = state.selectedItems.slice();
  newItems.push(<MultiSelect.Label onRemove={() => onRemove(newItems.length)} size='medium' pill className="u-m-xxs" type='light'>{textValue}</MultiSelect.Label>);
  setState({ selectedItems: newItems, textValue: '', validation: undefined, validationText: '' });
};

initialState = { textValue: '', selectedItems: [], validation: undefined, validationText: '' };

<Grid columns={1} stretched>
  <MultiSelect
    label='Custom Validation'
    hint='Only valid emails can be added'
    validation={state.validation}
    validationText={state.validationText}
    onTextChange={textValue => setState({ textValue })}
    textValue={state.textValue}
    selectedItems={state.selectedItems}
    onKeyDown={(event, selectedItem) => {
      const isEnterKey = event.keyCode === 13;

      if (isEnterKey && state.textValue) {
        if (isValidEmail(state.textValue)) {
          const newItems = state.selectedItems.slice();
          newItems.push(<MultiSelect.Label onRemove={() => onRemove(newItems.length)} size='medium' pill className="u-m-xxs" type='light' value={state.textValue}>{state.textValue}</MultiSelect.Label>);
          setState({ selectedItems: newItems, textValue: '', validation: undefined, validationText: '' });
        } else {
          setState({ validation: 'error', validationText: 'Only valid emails can be added' })
        }
      }
    }}
  >

    { menuItems(state.textValue) }
  </MultiSelect>
</Grid>
```
