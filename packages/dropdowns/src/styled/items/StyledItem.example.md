### States

```jsx
/**
 * Only necessary to position within documentation
 */
const StyledInlineMenuView = styled(StyledMenu)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <StyledInlineMenuView>
        <StyledItem>Default</StyledItem>
        <StyledItem hovered>Hovered</StyledItem>
        <StyledItem checked>Checked</StyledItem>
        <StyledItem focused>Focused</StyledItem>
        <StyledItem disabled>Disabled</StyledItem>
      </StyledInlineMenuView>
    </Col>
    <Col md>
      <StyledInlineMenuView small>
        <StyledItem>Default</StyledItem>
        <StyledItem hovered>Hovered</StyledItem>
        <StyledItem checked>Checked</StyledItem>
        <StyledItem focused>Focused</StyledItem>
        <StyledItem disabled>Disabled</StyledItem>
      </StyledInlineMenuView>
    </Col>
  </Row>
</Grid>;
```

### Types

```jsx
const GroupIcon = require('@zendeskgarden/svg-icons/src/16/user-group-stroke.svg').default;

/**
 * Only necessary to position within documentation
 */
const StyledInlineMenuView = styled(StyledMenu)`
  position: relative;
`;

<Grid>
  <Row>
    <Col md>
      <StyledInlineMenuView>
        <StyledHeaderItem>HeaderItem</StyledHeaderItem>
        <StyledPreviousItem>PreviousItem</StyledPreviousItem>
        <StyledNextItem>NextItem</StyledNextItem>
        <StyledItem>Default Item</StyledItem>
        <StyledItem>
          Default Item
          <StyledItemMeta>with meta info</StyledItemMeta>
        </StyledItem>
      </StyledInlineMenuView>
    </Col>
    <Col md>
      <StyledInlineMenuView>
        <StyledHeaderItem containsIcon>
          <StyledHeaderIcon>
            <GroupIcon />
          </StyledHeaderIcon>
          Header with icon
        </StyledHeaderItem>
        <StyledSeparator />
        <StyledMediaItem>
          <StyledMediaFigure>
            <img src="images/amir.png" alt="Example Avatar" />
          </StyledMediaFigure>
          <StyledMediaBody>
            Example Image Media Item
            <StyledItemMeta>Sample meta info</StyledItemMeta>
          </StyledMediaBody>
        </StyledMediaItem>
        <StyledMediaItem>
          <StyledMediaFigure>
            <GroupIcon />
          </StyledMediaFigure>
          <StyledMediaBody>
            Example SVG Media Item
            <StyledItemMeta>Sample meta info</StyledItemMeta>
          </StyledMediaBody>
        </StyledMediaItem>
      </StyledInlineMenuView>
    </Col>
  </Row>
</Grid>;
```
