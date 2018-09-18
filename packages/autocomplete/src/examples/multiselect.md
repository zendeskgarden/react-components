The `MultiSelect` layout operates similarly to the `Autocomplete`.
One main difference is that it must manage the interaction between
the `input` and it's collection of tags.

This example also includes an example of "copy-to-clipboard" functionality when
a tag is selected.

### Accessibility Warning

When implementing a MultiSelect with the ability to delete Tags, be aware of
users that navigate primarily with a keyboard and how your features may affect
them and their productivity.

```jsx
const { MenuView, Item, AddItem, Separator } = require('@zendeskgarden/react-menus/src');
const { FauxInput, Input, TextGroup, Label } = require('@zendeskgarden/react-textfields/src');
const { Tag, Close } = require('@zendeskgarden/react-tags/src');
const { Anchor } = require('@zendeskgarden/react-buttons/src');
const { KEY_CODES, FieldContainer } = require('@zendeskgarden/react-selection/src');

const NoItemsMessage = styled.div`
  margin: 16px;
  text-align: center;
`;

const SpacedTag = styled(Tag)`
  margin: 2px;
`;

const MoreAnchor = styled(Anchor)`
  margin: 2px !important;
`;

<State
  initialState={{
    value: 'Default value',
    inputValue: '',
    selectedKeys: {
      Alfa: true,
      Bravo: true,
      Hotel: true,
      India: true,
      Juliett: true,
      November: true,
      Sierra: true,
      Yankee: true,
      Zulu: true
    },
    isFocused: false,
    isOpen: false,
    tagFocusedKey: undefined,
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
  }}
>
  {(state, setState) => {
    const stringContains = (original, comparison) => {
      const formattedOriginal = original.replace(/ /g, '').toLocaleLowerCase();
      const formattedComparison = comparison.replace(/ /g, '').toLocaleLowerCase();

      return formattedOriginal.indexOf(formattedComparison) !== -1;
    };

    const getMatchingMenuItems = (searchValue, selectedValues, getItemProps, focusedKey) => {
      const menuItems = state.natoPhonetics
        .filter(phonetic => stringContains(phonetic, searchValue))
        .map(phonetic => (
          <Item
            {...getItemProps({
              key: phonetic,
              focused: focusedKey === phonetic,
              checked: selectedValues[phonetic],
              'aria-selected': selectedValues[phonetic]
            })}
          >
            {phonetic}
          </Item>
        ));

      return menuItems.length === 0 ? <NoItemsMessage>No items found</NoItemsMessage> : menuItems;
    };

    const deleteTag = key => {
      const newItems = Object.assign({}, state.selectedKeys);
      delete newItems[key];

      setState({ selectedKeys: newItems, tagFocusedKey: undefined });
    };

    const renderTags = (isFocused, selectedKeys, tagFocusedKey, getTagProps) => {
      const keys = Object.keys(selectedKeys);
      if (isFocused) {
        return keys.map(key => (
          <SpacedTag
            {...getTagProps({
              key,
              focused: tagFocusedKey === key
            })}
          >
            {key}
            <Close
              onClick={e => {
                deleteTag(key);
              }}
            />
          </SpacedTag>
        ));
      }

      const labels = [];
      for (let x = 0; x < 4 && x < keys.length; x++) {
        const key = keys[x];

        labels.push(
          <SpacedTag
            {...getTagProps({
              key,
              focused: tagFocusedKey === key
            })}
          >
            {key}
            <Close
              onClick={e => {
                deleteTag(key);
              }}
            />
          </SpacedTag>
        );
      }

      if (keys.length > 4) {
        labels.push(
          <MoreAnchor tabIndex={-1} key="more-anchor">
            + {keys.length - 4} more
          </MoreAnchor>
        );
      }

      return labels;
    };

    return (
      <FieldContainer>
        {({ getLabelProps, getInputProps: getFieldInputProps }) => (
          <TextGroup style={{ maxWidth: 500, minHeight: 300 }}>
            <Label {...getLabelProps()}>Advanced Multi-Select Example</Label>
            <AutocompleteContainer
              isOpen={state.isOpen}
              tagFocusedKey={state.tagFocusedKey}
              focusedKey={state.focusedKey}
              onSelect={selectedKey => {
                let natoPhonetics = state.natoPhonetics;
                const selectedKeys = Object.assign({}, state.selectedKeys);

                if (selectedKeys[selectedKey]) {
                  delete selectedKeys[selectedKey];
                } else {
                  selectedKeys[selectedKey] = true;
                }

                setState({ selectedKeys, natoPhonetics, inputValue: '' });

                return true;
              }}
              onStateChange={newState => {
                let inputValue = state.inputValue;

                if (typeof newState.isOpen !== 'undefined' && !newState.isOpen) {
                  newState.inputValue = '';
                }

                setState(newState);
              }}
              trigger={({
                getTriggerProps,
                getInputProps,
                getTagProps,
                triggerRef,
                inputRef,
                isOpen,
                tagFocusedKey
              }) => {
                return (
                  <FauxInput
                    {...getTriggerProps({
                      open: isOpen,
                      small: true,
                      select: true,
                      tagLayout: true,
                      focused: isOpen || typeof tagFocusedKey !== 'undefined' || state.isFocused,
                      inputRef: ref => {
                        this.wrapperRef = ref;
                        triggerRef(ref);
                      }
                    })}
                  >
                    {renderTags(
                      isOpen || typeof tagFocusedKey !== 'undefined' || state.isFocused,
                      state.selectedKeys,
                      tagFocusedKey,
                      getTagProps
                    )}

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
                            onKeyDown: e => {
                              if (
                                e.keyCode === KEY_CODES.ENTER &&
                                (!e.target.value || e.target.value.trim().length === 0) &&
                                !state.focusedKey &&
                                state.isOpen
                              ) {
                                e.preventDefault();
                                return;
                              }

                              if (
                                e.keyCode === KEY_CODES.DELETE ||
                                e.keyCode === KEY_CODES.BACKSPACE
                              ) {
                                if (tagFocusedKey !== undefined) {
                                  deleteTag(tagFocusedKey);
                                  return;
                                }

                                if (e.target.value === '') {
                                  const tags = Object.keys(state.selectedKeys);
                                  deleteTag(tags[tags.length - 1]);
                                }
                              }

                              if (tagFocusedKey !== undefined) {
                                // copy-to-clipboard functionality
                                if (e.keyCode === 67 && e.metaKey) {
                                  alert(`"${tagFocusedKey}" copied`);
                                }
                              }
                            },
                            placeholder:
                              Object.keys(state.selectedKeys).length === 0
                                ? 'Enter some content'
                                : undefined,
                            onFocus: () => {
                              setState({ isFocused: true });
                            },
                            onBlur: () => {
                              setState({ isFocused: false });
                            },
                            style: Object.assign(
                              { margin: '0 2px', flexGrow: 1, width: 60 },
                              Object.keys(state.selectedKeys).length !== 0 &&
                              (!state.isFocused || tagFocusedKey !== undefined) &&
                              !isOpen
                                ? { opacity: 0, height: 0, minHeight: 0 }
                                : {}
                            )
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
                return (
                  <MenuView
                    {...getMenuProps({
                      placement,
                      animate: true,
                      small: true,
                      style: {
                        width: this.wrapperRef ? this.wrapperRef.getBoundingClientRect().width : 0
                      }
                    })}
                  >
                    <div style={{ height: '150px', overflowY: 'auto' }}>
                      {getMatchingMenuItems(
                        state.inputValue,
                        state.selectedKeys,
                        getItemProps,
                        focusedKey
                      )}
                    </div>
                  </MenuView>
                );
              }}
            </AutocompleteContainer>
          </TextGroup>
        )}
      </FieldContainer>
    );
  }}
</State>;
```
