The `MenuContainer` component is implemented to the
[W3C Menu accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#menubutton)
and includes the following keyboard navigation:

#### Trigger element

- `Enter`/`Space`/`DOWN` opens menu and focuses first item
- `UP` opens menu and focuses last item

#### Menu element

- `DOWN`/`UP` cycle through items and wrap on boundaries
- `HOME` focus first item
- `END` focus last item
- `[A-Z,1-9]` focuses items with matching `textValue` prop
- `ESC` closes menu and focuses trigger
- `TAB`/`SHIFT+TAB` moves focus within the menu if focusable elements are available
  - Otherwise cycles focus between items
- `ENTER`/`SPACE` selects item, closes menu, and focuses trigger element

### Simple Example

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const menuItems = [];
for (let x = 1; x <= 5; x++) {
  menuItems.push({
    id: `item-${x}`,
    text: `Item #${x}`
  });
}

<MenuContainer
  onChange={itemKey => alert(`Selected menu item: "${itemKey}"`)}
  trigger={({ getTriggerProps, triggerRef, isOpen }) => (
    <Button {...getTriggerProps({ ref: triggerRef, active: isOpen })}>Simple Menu Example</Button>
  )}
>
  {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
    <MenuView {...getMenuProps({ placement, arrow: true, animate: true, ref: menuRef })}>
      {menuItems.map(item => (
        /**
         * key - The unique identifier for each Menu Item. Necessary regardless of use within `.map()`
         * textValue - Optional string to assist with keyboard navigation
         **/
        <Item
          {...getItemProps({ key: item.id, textValue: item.text, focused: focusedKey === item.id })}
        >
          {item.text}
        </Item>
      ))}
    </MenuView>
  )}
</MenuContainer>;
```

### Disabled Menu Items

```jsx
const { Button, Icon } = require('@zendeskgarden/react-buttons/src');
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;

initialState = {
  selectedKey: 'Unknown'
};

const mainMenuItems = [
  {
    id: 'profile-menu-item',
    text: 'Profile'
  },
  {
    id: 'settings-menu-item',
    text: 'Settings'
  },
  {
    id: 'theme-menu-item',
    text: 'Theme Editor',
    disabled: true
  }
];

const secondaryMenuItems = [
  {
    id: 'article-editor-menu-item',
    text: 'Article Editor'
  },
  {
    id: 'logout-menu-item',
    text: 'Logout'
  }
];

<Grid>
  <Row>
    <Col md>
      <MenuContainer
        onChange={key => setState({ selectedKey: key })}
        trigger={({ getTriggerProps, triggerRef, isOpen }) => (
          <Button {...getTriggerProps({ ref: triggerRef, active: isOpen })}>Open Menu</Button>
        )}
      >
        {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
          <MenuView {...getMenuProps({ placement, animate: true, arrow: true, ref: menuRef })}>
            <HeaderItem>Simple Example</HeaderItem>
            <Separator />
            {mainMenuItems.map(item => {
              if (item.disabled) {
                return (
                  <Item key={item.id} disabled>
                    {item.text}
                  </Item>
                );
              }

              return (
                <Item
                  {...getItemProps({
                    key: item.id,
                    textValue: item.text,
                    focused: focusedKey === item.id
                  })}
                >
                  {item.text}
                </Item>
              );
            })}
            <Separator />
            {secondaryMenuItems.map(item => (
              <Item
                {...getItemProps({
                  key: item.id,
                  textValue: item.text,
                  focused: focusedKey === item.id
                })}
              >
                {item.text}
              </Item>
            ))}
          </MenuView>
        )}
      </MenuContainer>
    </Col>
    <Col md>
      <p>
        Previously selected item: <strong>{state.selectedKey}</strong>
      </p>
    </Col>
  </Row>
</Grid>;
```

### Scrollable Menu Areas

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const menuItems = [];

for (let x = 0; x < 100; x++) {
  menuItems.push({
    id: `item-${x}`,
    text: `Item ${x}`
  });
}

const ScrollableArea = styled.div`
  max-height: 250px;
  overflow: auto;
`;

<MenuContainer
  trigger={({ getTriggerProps, triggerRef, isOpen }) => (
    <Button {...getTriggerProps({ ref: triggerRef, active: isOpen })}>
      Scrolling Menu Example
    </Button>
  )}
>
  {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
    <MenuView {...getMenuProps({ placement, animate: true, arrow: true, ref: menuRef })}>
      <HeaderItem>Scrollable Area</HeaderItem>
      <Separator />
      <ScrollableArea>
        {menuItems.map(item => (
          <Item
            {...getItemProps({
              key: item.id,
              textValue: item.text,
              focused: focusedKey === item.id
            })}
          >
            {item.text}
          </Item>
        ))}
      </ScrollableArea>
    </MenuView>
  )}
</MenuContainer>;
```

### Heavy Customization

This render prop container can be used with any DOM elements
it is provided.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const menuItems = [];
for (let x = 0; x < 5; x++) {
  menuItems.push({
    id: `item-${x}`,
    text: `${x} Menu Item`
  });
}

const CustomMenuContainer = styled.div`
  background-color: white;
  border: grey solid 2px;
  margin: 8px;
`;

const CustomMenuItem = styled.div`
  padding: 8px 4px;
  background-color: ${({ focused }) => (focused ? 'grey' : 'initial')};
  cursor: pointer;
`;

initialState = {
  selectedKey: 'Unknown'
};

<Grid>
  <Row>
    <Col md>
      <MenuContainer
        placement="end"
        onChange={selectedKey => setState({ selectedKey })}
        trigger={({ getTriggerProps, triggerRef, isOpen }) => (
          <button {...getTriggerProps({ ref: triggerRef })}>Heavily customized menu</button>
        )}
      >
        {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
          <CustomMenuContainer {...getMenuProps({ ref: menuRef })}>
            {menuItems.map(item => (
              <CustomMenuItem
                {...getItemProps({
                  key: item.id,
                  textValue: item.text,
                  focused: focusedKey === item.id
                })}
              >
                {item.text}
              </CustomMenuItem>
            ))}
          </CustomMenuContainer>
        )}
      </MenuContainer>
    </Col>
    <Col md>
      <p>
        Previously selected item: <strong>{state.selectedKey}</strong>
      </p>
    </Col>
  </Row>
</Grid>;
```

```jsx
const { KEY_CODES } = require('@zendeskgarden/react-selection/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Input, FauxInput, MediaFigure } = require('@zendeskgarden/react-textfields/src');
const SearchIcon = require('@zendeskgarden/svg-icons/src/16/search-stroke.svg').default;

const natoPhonetics = [
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
];

const InputWrapper = styled.div`
  padding: 4px 8px;
`;

const StyledMenuView = styled(MenuView)`
  min-width: 300px;
`;

const ScrollableItems = styled.div`
  height: 150px;
  overflow-y: auto;
`;

const NoItemsMessage = styled.div`
  margin: 16px;
  text-align: center;
`;

const stringContains = (original, comparison) => {
  const formattedOriginal = original.replace(/ /g, '').toLocaleLowerCase();
  const formattedComparison = comparison.replace(/ /g, '').toLocaleLowerCase();

  return formattedOriginal.indexOf(formattedComparison) !== -1;
};

const getMatchingMenuItems = (searchValue, getItemProps, focusedKey) => {
  const menuItems = natoPhonetics
    .filter(phonetic => stringContains(phonetic, searchValue))
    .map(phonetic => (
      <Item {...getItemProps({ key: phonetic, focused: focusedKey === phonetic })}>{phonetic}</Item>
    ));

  return menuItems.length === 0 ? <NoItemsMessage>No items found</NoItemsMessage> : menuItems;
};

/**
 * <State> wrapper component is needed due to react-styleguidist
 */
<State initialState={{ searchValue: '', isOpen: false, focusedKey: undefined }}>
  {(state, setState) => (
    <MenuContainer
      isOpen={state.isOpen}
      placement="end"
      focusedKey={state.focusedKey}
      onStateChange={newState => {
        if (typeof newState.isOpen !== 'undefined' && !newState.isOpen && state.isOpen) {
          // Menu is closing, we should reset the search input
          newState.searchValue = '';
        }

        setState(newState);
      }}
      onChange={itemKey => alert(`Selected menu item: "${itemKey}"`)}
      trigger={({ getTriggerProps, triggerRef, isOpen }) => (
        <Button {...getTriggerProps({ ref: triggerRef, active: isOpen })}>
          Inline search example
        </Button>
      )}
    >
      {({ getMenuProps, menuRef, placement, getItemProps, focusedKey }) => (
        <StyledMenuView
          {...getMenuProps({
            placement,
            arrow: true,
            animate: true,
            ref: menuRef,
            onKeyDown: event => {
              // We don't want the space key to trigger a selection since there is a child input
              if (event.keyCode === KEY_CODES.SPACE) {
                event.defaultPrevented = true;
              }
            }
          })}
        >
          <InputWrapper>
            <FauxInput mediaLayout small>
              <MediaFigure>
                <SearchIcon />
              </MediaFigure>
              <Input
                bare
                placeholder="Search Nato Phonetics"
                value={state.searchValue}
                onChange={e => {
                  const firstFocusableKey = natoPhonetics.find(phonetic =>
                    stringContains(phonetic, e.target.value)
                  );

                  setState({ searchValue: e.target.value, focusedKey: firstFocusableKey });
                }}
                ref={ref => ref && ref.focus()}
              />
            </FauxInput>
          </InputWrapper>
          <Separator />
          <ScrollableItems>
            {getMatchingMenuItems(state.searchValue, getItemProps, focusedKey)}
          </ScrollableItems>
        </StyledMenuView>
      )}
    </MenuContainer>
  )}
</State>;
```

### Tree Menu

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const TREE_DATA = {
  root: {
    id: 'root',
    children: [
      {
        id: '1-node',
        text: 'Node'
      },
      {
        id: '2-node',
        text: 'Node'
      },
      {
        id: '3-node',
        text: 'Node'
      },
      {
        id: '4-parent',
        text: 'Parent Node',
        isParent: true
      }
    ]
  },
  '4-parent': {
    id: '4-parent',
    parent: {
      id: 'root',
      text: 'Root nodes'
    },
    children: [
      {
        id: '1-nested-node',
        text: 'Nested Node'
      },
      {
        id: '2-nested-node',
        text: 'Nested Node'
      },
      {
        id: '3-parent-node',
        text: 'Nested Parent Node',
        isParent: true
      },
      {
        id: '4-nested-node',
        text: 'Nested Node'
      }
    ]
  },
  '3-parent-node': {
    id: '3-parent-node',
    parent: {
      id: '4-parent',
      text: 'Nested Parent Node'
    },
    children: [
      {
        id: '1-double-nested-node',
        text: 'Double nested node'
      },
      {
        id: '2-double-nested-node',
        text: 'Double nested node'
      },
      {
        id: '3-double-nested-node',
        text: 'Double nested node'
      }
    ]
  }
};

initialState = {
  node: TREE_DATA['root'],
  focusedKey: undefined,
  isOpen: false
};

retrieveMenuItems = (node, getItemProps, getNextItemProps, getPreviousItemProps, focusedKey) => {
  const menuItems = [];

  if (node.parent) {
    menuItems.push(
      <PreviousItem
        {...getPreviousItemProps({
          key: node.parent.id,
          textValue: node.parent.text,
          focused: focusedKey === node.parent.id
        })}
      >
        {node.parent.text}
      </PreviousItem>,
      <Separator key="header-separator" />
    );
  }

  menuItems.push(
    node.children.map(child => {
      if (child.isParent) {
        return (
          <NextItem
            {...getNextItemProps({
              key: child.id,
              textValue: child.text,
              focused: focusedKey === child.id
            })}
          >
            {child.text}
          </NextItem>
        );
      }

      return (
        <Item
          {...getItemProps({
            key: child.id,
            textValue: child.text,
            focused: focusedKey === child.id
          })}
        >
          {child.text}
        </Item>
      );
    })
  );

  return menuItems;
};

<MenuContainer
  onChange={selectedItemKey => {
    if (TREE_DATA[selectedItemKey]) {
      const node = TREE_DATA[selectedItemKey];

      let focusedKey = node.children[0].id;
      if (state.node.parent && selectedItemKey === state.node.parent.id) {
        focusedKey = state.node.id;
      }

      setState({ node, focusedKey });
    } else {
      setState({ node: TREE_DATA['root'] });
    }
  }}
  onStateChange={newState => {
    if (newState.hasOwnProperty('isOpen') && !newState.isOpen) {
      newState.node = TREE_DATA['root'];
    }

    if (!newState.focusedKey) {
      delete newState.focusedKey;
    }

    setState(newState);
  }}
  focusedKey={state.focusedKey}
  isOpen={state.isOpen}
  trigger={({ getTriggerProps, triggerRef, isOpen }) => (
    <Button {...getTriggerProps({ ref: triggerRef, active: isOpen })}>Simple Menu Example</Button>
  )}
>
  {({
    getMenuProps,
    menuRef,
    placement,
    getItemProps,
    getNextItemProps,
    getPreviousItemProps,
    focusedKey
  }) => (
    <MenuView
      {...getMenuProps({
        placement,
        animate: true,
        arrow: true,
        ref: menuRef,
        style: { height: 225 }
      })}
    >
      {this.retrieveMenuItems(
        state.node,
        getItemProps,
        getNextItemProps,
        getPreviousItemProps,
        focusedKey
      )}
    </MenuView>
  )}
</MenuContainer>;
```
