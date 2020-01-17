All `Item` components are able to be wrapped and extended with styling libraries or
other layout divs. All necessary information is provided through the `Context` API.

All `Items` require a `value` prop that is provided with the `onSelect` callback.
Any object or value can be provided.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const GroupIcon = require('@zendeskgarden/svg-icons/src/16/user-group-stroke.svg').default;

initialState = {
  isOpen: false
};

<Dropdown
  isOpen={state.isOpen}
  onStateChange={changes => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      setState({ isOpen: changes.isOpen });
    }
  }}
  onSelect={item => alert(item)}
>
  <Trigger>
    <Button active={state.isOpen}>Advanced Layout</Button>
  </Trigger>
  <Menu placement="end" hasArrow>
    <HeaderItem>Header Item</HeaderItem>
    <Separator />
    <Item value="profile">Option 1</Item>
    <Item value="settings">Option 2</Item>
    <Item disabled>Disabled item</Item>
    <Separator />
    <MediaItem value="image">
      <MediaFigure>
        <img src="images/amir.png" alt="Example Avatar" />
      </MediaFigure>
      <MediaBody>
        Image Media Item
        <ItemMeta>Meta info</ItemMeta>
      </MediaBody>
    </MediaItem>
    <MediaItem value="icon">
      <MediaFigure>
        <GroupIcon />
      </MediaFigure>
      <MediaBody>
        Icon Media Item
        <ItemMeta>Meta info</ItemMeta>
      </MediaBody>
    </MediaItem>
  </Menu>
</Dropdown>;
```

## Async Loading

You may delay rendering of items if loading is asynchronous. Re-renders will
cause `Downshift` to reapply the required accessibility and interaction attributes.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isOpen: false,
  isLoading: false
};

<Dropdown
  onSelect={item => alert(item)}
  isOpen={state.isOpen}
  onStateChange={changes => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      setState({ isOpen: changes.isOpen }, () => {
        if (changes.isOpen) {
          setState({ isLoading: true }, () => {
            setTimeout(() => {
              setState({ isLoading: false });
            }, 2000);
          });
        }
      });
    }
  }}
>
  <Trigger>
    <Button>Async Loading</Button>
  </Trigger>
  <Menu placement="end" hasArrow>
    {state.isLoading ? (
      <Item disabled>Loading...</Item>
    ) : (
      <>
        <Item value="option-1">Option 1</Item>
        <Item value="option-2">Option 2</Item>
        <Item value="option-3">Option 3</Item>
      </>
    )}
  </Menu>
</Dropdown>;
```
