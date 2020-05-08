All `Item` components are able to be wrapped and extended with styling libraries or
other layout divs. All necessary information is provided through the `Context` API.

All `Items` require a `value` prop that is provided with the `onSelect` callback.
Any object or value can be provided.

```jsx
const { Avatar } = require('@zendeskgarden/react-avatars/src');
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field: FormField, Label: FormLabel } = require('@zendeskgarden/react-forms/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const GroupIcon = require('@zendeskgarden/svg-icons/src/16/user-group-stroke.svg').default;
const ClipboardIcon = require('@zendeskgarden/svg-icons/src/16/clipboard-list-stroke.svg').default;

const StyledSpacer = styled.div`
  margin-top: ${props => props.theme.space.xs};
`;

initialState = {
  isOpen: false,
  placement: 'end',
  hasArrow: true,
  isAnimated: true,
  isCompact: false,
  isDiabled: false,
  forceIsOpen: false
};

<Grid>
  <Row alignItems="center">
    <Col size={4}>
      <Well isRecessed>
        <Dropdown selectedItem={state.placement} onSelect={placement => setState({ placement })}>
          <Field>
            <Label>Placement</Label>
            <Select isCompact>{state.placement}</Select>
          </Field>
          <Menu isCompact>
            <Item value="top">top</Item>
            <Item value="top-start">top-start</Item>
            <Item value="top-end">top-end</Item>
            <Item value="end">end</Item>
            <Item value="end-top">end-top</Item>
            <Item value="end-bottom">end-bottom</Item>
            <Item value="bottom">bottom</Item>
            <Item value="bottom-start">bottom-start</Item>
            <Item value="bottom-end">bottom-end</Item>
            <Item value="start">start</Item>
            <Item value="start-top">start-top</Item>
            <Item value="start-bottom">start-bottom</Item>
          </Menu>
        </Dropdown>
        <StyledSpacer />
        <FormField>
          <Toggle checked={state.hasArrow} onChange={e => setState({ hasArrow: e.target.checked })}>
            <FormLabel>Has arrow</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.isAnimated}
            onChange={e => setState({ isAnimated: e.target.checked })}
          >
            <FormLabel>Animated</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.isCompact}
            onChange={e => setState({ isCompact: e.target.checked })}
          >
            <FormLabel>Compact</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.isDisabled}
            onChange={e => setState({ isDisabled: e.target.checked })}
          >
            <FormLabel>Disable items</FormLabel>
          </Toggle>
        </FormField>
        <StyledSpacer />
        <FormField>
          <Toggle
            checked={state.forceIsOpen}
            onChange={e => setState({ forceIsOpen: e.target.checked })}
          >
            <FormLabel>Force open</FormLabel>
          </Toggle>
        </FormField>
      </Well>
    </Col>
    <Col size={8} style={{ textAlign: 'center' }}>
      <Dropdown
        isOpen={state.forceIsOpen || state.isOpen}
        onStateChange={changes => {
          if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
            setState({ isOpen: changes.isOpen });
          }
        }}
      >
        <Trigger>
          <Button>Advanced Layout</Button>
        </Trigger>
        <Menu
          placement={state.placement}
          hasArrow={state.hasArrow}
          isCompact={state.isCompact}
          isAnimated={state.isAnimated}
        >
          <HeaderItem hasIcon>
            <HeaderIcon>
              <ClipboardIcon />
            </HeaderIcon>
            Header Item
          </HeaderItem>
          <Item value="profile" disabled={state.isDisabled}>
            Option 1
          </Item>
          <Item value="settings" disabled={state.isDisabled}>
            Option 2<ItemMeta>Optional meta</ItemMeta>
          </Item>
          <Separator />
          <MediaItem value="image" disabled={state.isDisabled}>
            <MediaFigure>
              <img src="images/amir.png" alt="Example Avatar" />
            </MediaFigure>
            <MediaBody>
              Image Media Item
              <ItemMeta>Meta info</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="icon" disabled={state.isDisabled}>
            <MediaFigure>
              <GroupIcon />
            </MediaFigure>
            <MediaBody>
              Icon Media Item
              <ItemMeta>Meta info</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="avatar" disabled={state.isDisabled}>
            <MediaFigure>
              <Avatar size="extraextrasmall" status="available">
                <img alt="Sage" src="images/avatar-48.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Sage
              <ItemMeta>sage@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
          <Separator />
          <AddItem value="add-item" disabled={state.isDisabled}>
            Add Item
          </AddItem>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
</Grid>;
```

## Async Loading

You may delay rendering of items if loading is asynchronous. Re-renders will
cause `Downshift` to reapply the required accessibility and interaction attributes.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Dots } = require('@zendeskgarden/react-loaders/src');

initialState = {
  isOpen: false,
  isLoading: false
};

const CenteredItem = styled(Item)`
  text-align: center;
`;

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
      <CenteredItem disabled>
        <Dots color={PALETTE.blue[600]} size={DEFAULT_THEME.fontSizes.xxl} delayMS={0} />
      </CenteredItem>
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
