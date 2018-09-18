The `Autocomplete` layout operates as a "filterable select" and can
optionally allow users to add content with the "Add" Menu Item.

```jsx
const { MenuView, Item, AddItem, Separator } = require('@zendeskgarden/react-menus/src');
const { TextGroup, Label, FauxInput, Input } = require('@zendeskgarden/react-textfields/src');
const { FieldContainer, KEY_CODES } = require('@zendeskgarden/react-selection/src');

const NoItemsMessage = styled.div`
  margin: 16px;
  text-align: center;
`;

const stringContains = (original, comparison) => {
  const formattedOriginal = original.replace(/ /g, '').toLocaleLowerCase();
  const formattedComparison = comparison.replace(/ /g, '').toLocaleLowerCase();

  return formattedOriginal.indexOf(formattedComparison) !== -1;
};

const getMatchingMenuItems = (searchValue, selectedValue, getItemProps, focusedKey) => {
  const menuItems = state.natoPhonetics
    .filter(phonetic => stringContains(phonetic, searchValue))
    .map(phonetic => (
      <Item
        {...getItemProps({
          key: phonetic,
          focused: focusedKey === phonetic,
          checked: selectedValue === phonetic,
          'aria-selected': selectedValue === phonetic
        })}
      >
        {phonetic}
      </Item>
    ));

  return menuItems.length === 0 ? <NoItemsMessage>No items found</NoItemsMessage> : menuItems;
};

initialState = {
  value: 'Default value',
  inputValue: '',
  selectedKeys: {},
  isFocused: false,
  isOpen: false,
  focusedKey: undefined,
  natoPhonetics: [
    'Alfa',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'X-ray',
    'Yankee',
    'Zulu'
  ]
};

<FieldContainer>
  {({ getLabelProps, getInputProps: getFieldInputProps }) => (
    <TextGroup>
      <Label {...getLabelProps()}>Basic Autocomplete</Label>
      <AutocompleteContainer
        isOpen={state.isOpen}
        focusedKey={state.focusedKey}
        onSelect={selectedKey => {
          let natoPhonetics = state.natoPhonetics;

          if (selectedKey === 'add-item') {
            natoPhonetics = natoPhonetics.slice();
            natoPhonetics.push(state.inputValue);
            selectedKey = state.inputValue;
          }

          setState({ value: selectedKey, natoPhonetics, inputValue: '' });
        }}
        onStateChange={newState => {
          let inputValue = state.inputValue;

          if (typeof newState.isOpen !== 'undefined' && !newState.isOpen) {
            newState.inputValue = '';
          }

          setState(newState);
        }}
        trigger={({ getTriggerProps, getInputProps, triggerRef, inputRef, isOpen }) => {
          return (
            <FauxInput
              {...getTriggerProps({
                open: isOpen,
                focused: state.isFocused || isOpen,
                select: true,
                inputRef: ref => {
                  this.wrapperRef = ref;
                  triggerRef(ref);
                }
              })}
            >
              {!isOpen && <span>{state.value}</span>}
              <Input
                {...getInputProps(
                  getFieldInputProps(
                    {
                      bare: true,
                      innerRef: inputRef,
                      value: state.inputValue,
                      onChange: e => {
                        setState({ inputValue: e.target.value });
                      },
                      placeholder: state.value,
                      onFocus: () => {
                        setState({ isFocused: true });
                      },
                      onBlur: () => {
                        setState({ isFocused: false });
                      },
                      onKeyDown: e => {
                        if (
                          e.keyCode === KEY_CODES.ENTER &&
                          (!e.target.value || e.target.value.trim().length === 0) &&
                          !state.focusedKey &&
                          state.isOpen
                        ) {
                          e.preventDefault();
                        }
                      },
                      style: !isOpen
                        ? { opacity: 0, height: 0, minHeight: 0, width: 0, minWidth: 0 }
                        : {}
                    },
                    { isDescribed: false }
                  )
                )}
              />
            </FauxInput>
          );
        }}
      >
        {({ getMenuProps, getItemProps, placement, focusedKey }) => {
          const menuItems = getMatchingMenuItems(
            state.inputValue,
            state.value,
            getItemProps,
            focusedKey
          );

          const addItemProps =
            state.inputValue.length === 0
              ? { disabled: true }
              : getItemProps({ key: 'add-item', focused: focusedKey === 'add-item' });

          return (
            <MenuView
              {...getMenuProps({
                placement,
                animate: true,
                style: {
                  width: this.wrapperRef ? this.wrapperRef.getBoundingClientRect().width : 0
                }
              })}
            >
              <div style={{ height: '200px', overflowY: 'auto' }}>{menuItems}</div>
              <Separator />
              <AddItem {...addItemProps}>Add item</AddItem>
            </MenuView>
          );
        }}
      </AutocompleteContainer>
    </TextGroup>
  )}
</FieldContainer>;
```
