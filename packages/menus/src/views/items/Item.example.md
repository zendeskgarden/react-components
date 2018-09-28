### States

```jsx
/**
 * Only necessary to position within documentation
 */
const InlineMenuView = styled(MenuView)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <InlineMenuView>
        <Item>Default</Item>
        <Item hovered>Hovered</Item>
        <Item checked>Checked</Item>
        <Item focused>Focused</Item>
        <Item disabled>Disabled</Item>
      </InlineMenuView>
    </Col>
    <Col md>
      <InlineMenuView small>
        <Item>Default</Item>
        <Item hovered>Hovered</Item>
        <Item checked>Checked</Item>
        <Item focused>Focused</Item>
        <Item disabled>Disabled</Item>
      </InlineMenuView>
    </Col>
  </Row>
</Grid>;
```

### Types

```jsx
const GroupIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/group.svg');

/**
 * Only necessary to position within documentation
 */
const InlineMenuView = styled(MenuView)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <InlineMenuView>
        <HeaderItem>HeaderItem</HeaderItem>
        <PreviousItem>PreviousItem</PreviousItem>
        <NextItem>NextItem</NextItem>
        <Item>Default Item</Item>
        <Item>
          Default Item
          <ItemMeta>with meta info</ItemMeta>
        </Item>
      </InlineMenuView>
    </Col>
    <Col md>
      <InlineMenuView>
        <HeaderItem containsIcon>
          <HeaderIcon>
            <GroupIcon />
          </HeaderIcon>
          Header with icon
        </HeaderItem>
        <Separator />
        <MediaItem>
          <MediaFigure>
            <img src="images/amir.png" alt="Example Avatar" />
          </MediaFigure>
          <MediaBody>
            Example Image Media Item
            <ItemMeta>Sample meta info</ItemMeta>
          </MediaBody>
        </MediaItem>
        <MediaItem>
          <MediaFigure>
            <GroupIcon />
          </MediaFigure>
          <MediaBody>
            Example SVG Media Item
            <ItemMeta>Sample meta info</ItemMeta>
          </MediaBody>
        </MediaItem>
      </InlineMenuView>
    </Col>
  </Row>
</Grid>;
```
