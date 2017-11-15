### Selected Items
The `selectedItems` prop can be anything wrapped in the `Selectable` higher-order component.  With the `Selectable` HOC it respects the `disabled, value, and onRemove` props.  The most common use-case would be the `Label` component and is made available through `MultiSelect.Label` component.

### Menu items
The `menuItems` prop can also be anything wrapped in the `Selectable` higher-order component. `MultiSelect.Item` is the most common use-case. All `Menu.Item` types are available through `MultiSelect` as well: Header, Media, Previous, Next, etc.

#### Common Usage

```
<State initialState={{ textValue: '', selectedItems: ['Hello world!', 'These are removable', 'And selectable'] }}>
  {(state, setState) => {
    const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

    const menuItems = (textValue) => {
      if (textValue.length === 0) {
        return [
          <MultiSelect.Item
            disabled
            key="0">
            Add some text to have completion options
          </MultiSelect.Item>
        ];
      }

      return [
        <MultiSelect.Item
          value={`${textValue} - ${textValue}`}
          key="0">
          {textValue} - {textValue}
        </MultiSelect.Item>,
        <MultiSelect.Item
          disabled
          key="1">
          Disabled menu item
        </MultiSelect.Item>,
        <MultiSelect.Item
          value={`${textValue} - ${textValue} - ${textValue}`}
          key="2">
          {textValue} - {textValue} - {textValue}
        </MultiSelect.Item>
      ]
    };

    const onMenuSelect = (textValue) => {
      const newItems = state.selectedItems.slice();
      newItems.push(textValue);
      setState({ selectedItems: newItems, textValue: '' });
    };

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <MultiSelect
        size="small"
        label='Common Example'
        hint='Try keyboard navigation and removing labels'
        onTextChange={textValue => setState({ textValue })}
        textValue={state.textValue}
        onMenuValueSelected={onMenuSelect}
        selectedItems={state.selectedItems.map((itemValue, index) =>
          <MultiSelect.Label
            onRemove={() => onRemove(index)}
            pill
            avatar={avatar}
            type='light'
            value={itemValue}>
            {itemValue}
          </MultiSelect.Label>)
        }
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;
          const isTabKey = event.keyCode === 9;

          if ((isEnterKey || isTabKey) && state.textValue) {
            // Don't want to blur input if adding a new label
            if (isTabKey) {
              event.stopPropagation();
              event.preventDefault();
            }

            const newItems = state.selectedItems.slice();
            newItems.push(state.textValue);
            setState({ selectedItems: newItems, textValue: '' });
          }
        }}
      >
        {menuItems(state.textValue)}
      </MultiSelect>;
    }}
</State>
```

#### Permanent Selected Items

Sometimes you don't want to allow removal of a selected item.  This example includes 3 default labels which cannot be removed.

```
<State initialState={{ textValue: '',
  selectedItems: [{ value: 'Default 1', permanent: true }, { value: 'Default 2', permanent: true }, { value: 'Default 3', permanent: true }] }}>
  {(state, setState) => {
    const menuItems = (textValue) => {
      if (textValue.length === 0) {
        return [];
      }

      return [
        <MultiSelect.Item
          onClick={() => onMenuSelect(`${textValue} - ${textValue}`)}
          key="0">
          {textValue} - {textValue}
        </MultiSelect.Item>,
        <MultiSelect.Item
          disabled
          key="1">
          Disabled menu item
        </MultiSelect.Item>,
        <MultiSelect.Item
          onClick={() => onMenuSelect(`${textValue} - ${textValue} - ${textValue}`)}
          key="2">
          {textValue} - {textValue} - {textValue}
        </MultiSelect.Item>
      ]
    };

    const onMenuSelect = (value) => {
      const newItems = state.selectedItems.slice();
      newItems.push({ value });
      setState({ selectedItems: newItems, textValue: '' });
    };

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <MultiSelect
        label='Common Example'
        hint='Try keyboard navigation and removing labels'
        onTextChange={textValue => setState({ textValue })}
        textValue={state.textValue}
        selectedItems={state.selectedItems.map((item, index) =>
          <MultiSelect.Label
            onRemove={!item.permanent ? () => onRemove(index) : undefined}
            disabled={item.permanent}
            type='light'
            value={item.value}>
            {item.value}
          </MultiSelect.Label>)
        }
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;
          const isTabKey = event.keyCode === 9;

          if ((isEnterKey || isTabKey) && state.textValue) {
            // Don't want to blur input if adding a new label
            if (isTabKey) {
              event.stopPropagation();
              event.preventDefault();
            }

            const newItems = state.selectedItems.slice();
            newItems.push({ value: state.textValue, permanent: false });
            setState({ selectedItems: newItems, textValue: '' });
          }
        }}
      >
        {menuItems(state.textValue)}
      </MultiSelect>;
    }}
</State>
```

#### RTL Compatible

```
<State initialState={{ textValue: '', selectedItems: ['Hello world!', 'These are removable', 'And selectable'] }}>
  {(state, setState) => {
    const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

    const menuItems = (textValue) => {
      if (textValue.length === 0) {
        return [];
      }

      return [
        <MultiSelect.Item
          onClick={() => onMenuSelect(`${textValue} - ${textValue}`)}
          key="0">
          {textValue} - {textValue}
        </MultiSelect.Item>,
        <MultiSelect.Item
          disabled
          key="1">
          Disabled menu item
        </MultiSelect.Item>,
        <MultiSelect.Item
          onClick={() => onMenuSelect(`${textValue} - ${textValue} - ${textValue}`)}
          key="2">
          {textValue} - {textValue} - {textValue}
        </MultiSelect.Item>
      ]
    };

    const onMenuSelect = (textValue) => {
      const newItems = state.selectedItems.slice();
      newItems.push(textValue);
      setState({ selectedItems: newItems, textValue: '' });
    };

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <MultiSelect
        dir="rtl"
        size="small"
        label='RTL Example'
        hint='Try keyboard navigation and removing labels'
        onTextChange={textValue => setState({ textValue })}
        textValue={state.textValue}
        selectedItems={state.selectedItems.map((itemValue, index) =>
          <MultiSelect.Label
            onRemove={() => onRemove(index)}
            pill
            avatar={avatar}
            type='light'
            value={itemValue}>
            {itemValue}
          </MultiSelect.Label>)
        }
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;
          const isTabKey = event.keyCode === 9;

          if ((isEnterKey || isTabKey) && state.textValue) {
            // Don't want to blur input if adding a new label
            if (isTabKey) {
              event.stopPropagation();
              event.preventDefault();
            }

            const newItems = state.selectedItems.slice();
            newItems.push(state.textValue);
            setState({ selectedItems: newItems, textValue: '' });
          }
        }}
      >
        {menuItems(state.textValue)}
      </MultiSelect>;
    }}
</State>
```

#### Custom Keyboard Events

This is a customer keyboard event for the `Copy` operation.  The `onKeyDown` callback receives the currently selected Value from the `Selectable` Label.  This can be undefined if nothing is currently selected.

```
<State initialState={{ textValue: '', selectedItems: ['Try to copy me', 'Or me!'], selected: '' }}>
  {(state, setState) => {
    const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <Grid columns={1} stretched>
      {state.selected && <p><strong>{state.selected}</strong> was copied</p>}
        <MultiSelect
          size="small"
          label='Custom Keyboard Events'
          hint='Try to copy a selected label'
          onTextChange={textValue => setState({ textValue })}
          textValue={state.textValue}
          useChevron={false}
          selectedItems={state.selectedItems.map((itemValue, index) =>
            <MultiSelect.Label
              onRemove={() => onRemove(index)}
              pill
              avatar={avatar}
              type='light'
              value={itemValue}>
              {itemValue}
            </MultiSelect.Label>)
          }
          onKeyDown={(event, selectedItem) => {
            const isEnterKey = event.keyCode === 13;
            const isTabKey = event.keyCode === 9;
            const isCopyKey = event.keyCode === 67 && event.metaKey;

            if (isCopyKey && selectedItem) {
              setState({ selected: selectedItem });
            }

            if ((isEnterKey || isTabKey) && state.textValue) {
              // Don't want to blur input if adding a new label
              if (isTabKey) {
                event.stopPropagation();
                event.preventDefault();
              }

              const newItems = state.selectedItems.slice();
              newItems.push(state.textValue);
              setState({ selectedItems: newItems, textValue: '' });
            }
          }}/>
        </Grid>;
    }}
</State>
```

#### Custom Validation

This example only allows the addition of valid email addresses.  Additionally, it applies special styling to Labels that contain a zendesk address.

```
<State initialState={{ textValue: '', selectedItems: ['hello@example.com', 'agreen@zendesk.com', 'example@outlook.com'], validation: undefined, validationText: '', shouldHideMenu: false }}>
  {(state, setState) => {
    const isValidEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const menuItems = (textValue) => {
      if (textValue.length === 0 || textValue.indexOf('@') !== -1 || state.shouldHideMenu) {
        return [];
      }

      return [
        <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@gmail.com`)} key="gmail">{textValue}@gmail.com</MultiSelect.Item>,
        <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@yahoo.com`)}  key="yahoo">{textValue}@yahoo.com</MultiSelect.Item>,
        <MultiSelect.Item onClick={() => onMenuSelect(`${textValue}@outlook.com`)}  key="outlook">{textValue}@outlook.com</MultiSelect.Item>
      ]
    };

    const onMenuSelect = (textValue) => {
      const newItems = state.selectedItems.slice();
      newItems.push(textValue);
      setState({ selectedItems: newItems, textValue: '', validation: undefined, validationText: '' });
    };

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <MultiSelect
        size="small"
        label='Custom Validation'
        hint='Only valid emails can be added (@zendesk is special)'
        validation={state.validation}
        validationText={state.validationText}
        onTextChange={textValue => {
          setState({ textValue });

          if (!textValue) {
            setState({ validation: undefined, validationText: '' });
          }
        }}
        textValue={state.textValue}
        selectedItems={state.selectedItems.map((itemValue, index) =>
          <MultiSelect.Label
            onRemove={() => onRemove(index)}
            type={itemValue.indexOf('@zendesk') === -1 ? 'light' : 'default'}
            value={itemValue}>
            {itemValue}
          </MultiSelect.Label>)
        }
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;
          const isTabKey = event.keyCode === 9;

          if ((isEnterKey || isTabKey) && state.textValue) {
            // Don't want to blur input if adding a new label
            if (isTabKey && !state.validationText) {
              event.stopPropagation();
              event.preventDefault();
            }

            if (isValidEmail(state.textValue)) {
              const newItems = state.selectedItems.slice();
              newItems.push(state.textValue);
              setState({ selectedItems: newItems, textValue: '', validation: undefined, validationText: '' });
            } else {
              setState({ validation: 'error', validationText: 'Only valid emails can be added', shouldHideMenu: true })
            }
          } else if (state.shouldHideMenu) {
            setState({ shouldHideMenu: false });
          }
        }}
      >
        {menuItems(state.textValue)}
      </MultiSelect>;
    }}
</State>
```

#### Anything can be a Selectable

This makes the `Avatar` component a selectable item with the `Selectable` HOC.

```
class CustomAvatar extends React.Component {
  render() {
    const { disabled, selected, className, onClick } = this.props;
    return <Avatar
      className={className}
      status={disabled ? 'away' : selected ? 'active' : 'default'}
      src='./images/jason.png'
      onClick={onClick} />;
  }
}

const { Selectable } = require('../');

const SelectableAvatar = Selectable(CustomAvatar, {
  selectEvent: "onClick"
});

<State initialState={{ textValue: '', selectedItems: [{ value: 'http://placeskull.com/16/16/03363d' }, { value: 'http://placeskull.com/16/16/03363d', disabled: true }, { value: 'http://placeskull.com/16/16/03363d' }] }}>
  {(state, setState) => {
    const avatar = <img src='http://placeskull.com/16/16/03363d'/>;

    const onRemove = (index) => {
      const newItems = state.selectedItems.slice();
      newItems.splice(index, 1);
      setState({ selectedItems: newItems });
    };

    return <MultiSelect
        showIcon={false}
        label='Avatar Selectables'
        hint='Just hit [ENTER] to add items'
        onTextChange={textValue => setState({ textValue })}
        textValue={state.textValue}
        selectedItems={state.selectedItems.map((item, index) =>
          <SelectableAvatar
            onRemove={() => onRemove(index)}
            value={item.value}
            className="u-m-xxs"
            disabled={item.disabled} />
        )}
        onKeyDown={(event, selectedItem) => {
          const isEnterKey = event.keyCode === 13;

          if (isEnterKey) {
            const newItems = state.selectedItems.slice();
            newItems.push({ value: 'http://placeskull.com/16/16/03363d' });
            setState({ selectedItems: newItems, textValue: '' });
          }
        }}>
      </MultiSelect>;
    }}
</State>
```
