## Standard Menus

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Grid>
  <Row>
    <Col md>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger refKey="innerRef">
          <Button>Default Menu</Button>
        </Trigger>
        <Menu>
          <Item value="1 - Item">1 - Item</Item>
          <Item value="2 - Item">2 - Item</Item>
          <Item value="3 - Item">3 - Item</Item>
        </Menu>
      </Dropdown>
    </Col>
    <Col md>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger refKey="innerRef">
          <Button>Small Menu</Button>
        </Trigger>
        <Menu small>
          <Item value="1 - Item">1 - Item</Item>
          <Item value="2 - Item">2 - Item</Item>
          <Item value="3 - Item">3 - Item</Item>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
</Grid>;
```

## Disabled Items

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Dropdown onSelect={item => alert(item)}>
  <Trigger refKey="innerRef">
    <Button>Disabled Menu Items</Button>
  </Trigger>
  <Menu>
    <Item value="item-1">Item 1</Item>
    <Item disabled>Disabled</Item>
    <Item value="item-2">Item 2</Item>
    <Item value="item-3">Item 3</Item>
  </Menu>
</Dropdown>;
```

## Advanced Layout

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Dropdown onSelect={item => alert(item)}>
  <Trigger refKey="innerRef">
    <Button>Advanced Layout</Button>
  </Trigger>
  <Menu placement="end" arrow>
    <HeaderItem>Header Item Text</HeaderItem>
    <Separator />
    <Item value="profile">Profile</Item>
    <Item value="settings">Settings</Item>
    <Item disabled>Theme Editor</Item>
    <Separator />
    <Item value="article-editor">Article Editor</Item>
    <Item value="logout">Logout</Item>
  </Menu>
</Dropdown>;
```

## Tree Layout

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Dots } = require('@zendeskgarden/react-loaders/src');
const { zdColorBlue600 } = require('@zendeskgarden/css-variables');
const { default: posed, PoseGroup } = require('react-pose');

const StyledLoadingAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingAnimation = () => (
  <StyledLoadingAnimation>
    <Dots size="48px" color={zdColorBlue600} delayMS={50} />
  </StyledLoadingAnimation>
);

const AnimatedItem = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

initialState = {
  isLoading: true,
  isOpen: false,
  tempSelectedItem: undefined
};

const renderItems = () => {
  if (state.isLoading) {
    return (
      <AnimatedItem key="loader" style={{ height: '100%' }}>
        <LoadingAnimation />
      </AnimatedItem>
    );
  }

  if (state.tempSelectedItem === 'specific-settings') {
    return (
      <>
        <AnimatedItem key="spec-settings">
          <PreviousItem value="general-settings">Specific Settings</PreviousItem>
        </AnimatedItem>
        <AnimatedItem key="sep-3">
          <Separator />
        </AnimatedItem>
        <AnimatedItem key="cool-setting1">
          <Item value="cool-setting">Cool setting</Item>
        </AnimatedItem>
        <AnimatedItem key="uncoll-2">
          <Item value="uncool-setting">Uncool setting</Item>
        </AnimatedItem>
        <AnimatedItem key="another-3">
          <Item value="another-setting">Another cool setting</Item>
        </AnimatedItem>
      </>
    );
  }

  return (
    <>
      <AnimatedItem key="general">
        <HeaderItem>General Settings</HeaderItem>
      </AnimatedItem>
      <AnimatedItem key="sep-1">
        <Separator />
      </AnimatedItem>
      <AnimatedItem key="profile">
        <Item value="profile">Profile</Item>
      </AnimatedItem>
      <AnimatedItem key="settings">
        <Item value="settings">Settings</Item>
      </AnimatedItem>
      <AnimatedItem key="ui">
        <Item value="user-images">User Images</Item>
      </AnimatedItem>
      <AnimatedItem key="specific-settings">
        <NextItem value="specific-settings">Specific Settings</NextItem>
      </AnimatedItem>
      <AnimatedItem>
        <Item value="theme-editor">Theme Editor</Item>
      </AnimatedItem>
    </>
  );
};

<Dropdown
  isOpen={state.isOpen}
  onOpen={isOpen => {
    setState({ isOpen, isLoading: false, tempSelectedItem: undefined });
  }}
  onSelect={(item, stateAndHelpers) => {
    const isOpen = item === 'specific-settings' || item === 'general-settings';

    setState({ tempSelectedItem: item, isOpen }, () => {
      if (item === 'specific-settings') {
        stateAndHelpers.setHighlightedIndex(1);
      } else if (item === 'general-settings') {
        stateAndHelpers.setHighlightedIndex(3);
      }
    });
  }}
>
  <Trigger refKey="innerRef">
    <Button>Async Tree Layout</Button>
  </Trigger>
  <Menu placement="end" arrow style={{ width: 200, height: 300 }}>
    <Container initialPose="exit" pose="enter" style={{ height: '100%' }}>
      {renderItems()}
    </Container>
  </Menu>
</Dropdown>;
```
