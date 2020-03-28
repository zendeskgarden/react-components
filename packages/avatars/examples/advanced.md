The following examples demonstrate how avatars are intended to be used in
context with other Garden components.

### Chrome header

Use an `extrasmall` avatar within a Chrome `HeaderItem` in order to
provide a user profile menu. Remember to add the `isRound` prop to the header
item so that the keyboard focus ring is properly styled. Status may be added
to this avatar without impacting the height of the header. See the code for
details.

```jsx
const {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon
} = require('@zendeskgarden/react-chrome/src');

const GridIcon = require('@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg').default;

<Chrome style={{ height: 'auto' }}>
  <Body>
    <Header>
      <HeaderItem as="button">
        <HeaderItemIcon>
          <GridIcon />
        </HeaderItemIcon>
      </HeaderItem>
      <HeaderItem as="button" isRound>
        <Avatar size="extrasmall">
          <img alt="Example User" src={`images/avatar-${Math.floor(Math.random() * 70 + 1)}.png`} />
        </Avatar>
      </HeaderItem>
    </Header>
  </Body>
</Chrome>;
```

### Menus

The following example demonstrates intended avatar sizing within menus.
Additionally, note the detail of dynamically modifying `surfaceColor` to
blend with the menu item's highlight color on focus and hover. See the code
for details.

```jsx
const {
  Dropdown,
  Trigger,
  Menu,
  MediaItem,
  MediaFigure,
  MediaBody,
  ItemMeta
} = require('@zendeskgarden/react-dropdowns/src');
const { Button } = require('@zendeskgarden/react-buttons/src');

<Grid>
  <Row>
    <Col>
      <Dropdown onStateChange={changes => setState({ highlightedItem: changes.highlightedIndex })}>
        <Trigger>
          <Button>Default menu</Button>
        </Trigger>
        <Menu hasArrow>
          <MediaItem value="linden">
            <MediaFigure>
              <Avatar
                size="small"
                status="away"
                surfaceColor={state.highlightedItem === 0 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Linden" src="images/avatar-25.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Linden
              <ItemMeta>linden@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="reed">
            <MediaFigure>
              <Avatar
                size="small"
                status="available"
                surfaceColor={state.highlightedItem === 1 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Reed" src="images/avatar-30.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Reed
              <ItemMeta>reed@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="sage">
            <MediaFigure>
              <Avatar
                size="small"
                badge="3"
                surfaceColor={state.highlightedItem === 2 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Sage" src="images/avatar-48.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Sage
              <ItemMeta>sage@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    </Col>
    <Col>
      <Dropdown onStateChange={changes => setState({ highlightedItem: changes.highlightedIndex })}>
        <Trigger>
          <Button>Small menu</Button>
        </Trigger>
        <Menu hasArrow isCompact>
          <MediaItem value="clove">
            <MediaFigure>
              <Avatar
                size="extrasmall"
                status="away"
                surfaceColor={state.highlightedItem === 0 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Clove" src="images/avatar-31.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Clove
              <ItemMeta>clove@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="fennel">
            <MediaFigure>
              <Avatar
                size="extrasmall"
                status="available"
                surfaceColor={state.highlightedItem === 1 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Fennel" src="images/avatar-32.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Fennel
              <ItemMeta>fennel@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
          <MediaItem value="rue">
            <MediaFigure>
              <Avatar
                size="extrasmall"
                badge="1"
                surfaceColor={state.highlightedItem === 2 ? PALETTE.blue[100] : undefined}
              >
                <img alt="Rue" src="images/avatar-33.png" />
              </Avatar>
            </MediaFigure>
            <MediaBody>
              Rue
              <ItemMeta>rue@zendesk.garden</ItemMeta>
            </MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
</Grid>;
```
