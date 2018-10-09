### States

```jsx
/**
 * Only necessary to position within documentation
 */
const InlineSelectView = styled(Dropdown)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <InlineSelectView>
        <Item>Default</Item>
        <Item hovered>Hovered</Item>
        <Item checked>Checked</Item>
        <Item focused>Focused</Item>
        <Item disabled>Disabled</Item>
      </InlineSelectView>
    </Col>
    <Col md>
      <InlineSelectView small>
        <Item>Default</Item>
        <Item hovered>Hovered</Item>
        <Item checked>Checked</Item>
        <Item focused>Focused</Item>
        <Item disabled>Disabled</Item>
      </InlineSelectView>
    </Col>
  </Row>
</Grid>;
```

### Types

```jsx
const GroupIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/16/user-group-stroke.svg');

/**
 * Only necessary to position within documentation
 */
const InlineSelectView = styled(Dropdown)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <InlineSelectView>
        <HeaderItem>HeaderItem</HeaderItem>
        <PreviousItem>PreviousItem</PreviousItem>
        <NextItem>NextItem</NextItem>
        <Item>Default Item</Item>
        <Item>
          Default Item
          <ItemMeta>with meta info</ItemMeta>
        </Item>
      </InlineSelectView>
    </Col>
    <Col md>
      <InlineSelectView>
        <HeaderItem>
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
      </InlineSelectView>
    </Col>
  </Row>
</Grid>;
```
