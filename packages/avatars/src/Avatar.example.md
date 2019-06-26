#### Accessibility

Ensure that all child images include an `alt` description. Similarly, ensure
that all child SVGs include `role="img"` with an `aria-label` description. By
default, the `Avatar` is rendered with `aria-atomic="true"` and
`aria-live="polite"`. Whenever the `badge` prop changes, these ARIA settings
result in VoiceOver reading out the image's `alt` (or SVG's `aria-label`)
description followed by the badge count. You may need to override with an
improved implementation for your use-case.

### Types

```jsx
<Grid>
  <Row>
    <Col md>
      <h3>Default</h3>
      <Avatar>
        <img src="images/avatar-1.png" alt="User avatar" />
      </Avatar>
    </Col>
    <Col md>
      <h3>System</h3>
      <Avatar isSystem>
        <img src="images/system.png" alt="System avatar" />
      </Avatar>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <Avatar size="extrasmall">
        <img src="images/avatar-2.png" alt="Example image" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="small">
        <img src="images/avatar-2.png" alt="Example image" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar>
        <img src="images/avatar-2.png" alt="Example image" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="large">
        <img src="images/avatar-2.png" alt="Example image" />
      </Avatar>
    </Col>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <Avatar size="extrasmall" isSystem>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="small" isSystem>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar isSystem>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="large" isSystem>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
  </Row>
</Grid>
```

### Content

Along with a child `<img>`, avatars also support the display of a single
child SVG icon or `<Text>` component. In both of these cases, the background
color of the `<Avatar>` must be overridden from the browser's "transparent"
default. Optionally, the foreground color (default "white") of the SVG or
`<Text>` may be overridden. Foreground color override on the parent avatar is
reserved for modification of internal status rings – see "States" below for
details.

```jsx
const { palette } = require('@zendeskgarden/react-theming/src');
const StyledSvgAvatar = styled(Avatar)`
  background-color: ${palette.grey[600]};
`;
const StyledTextAvatar = styled(Avatar)`
  background-color: ${palette.azure[600]};
`;
const StyledSystemAvatar = styled(Avatar)`
  background-color: ${palette.kale[800]};
`;
const UserIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;
const ZendeskIcon = require('@zendeskgarden/svg-icons/src/26/zendesk.svg').default;

<Grid>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <StyledSvgAvatar size="extrasmall">
        <UserIcon role="img" aria-label="Example SVG" />
      </StyledSvgAvatar>
    </Col>
    <Col md>
      <StyledSvgAvatar size="small">
        <UserIcon role="img" aria-label="Example SVG" />
      </StyledSvgAvatar>
    </Col>
    <Col md>
      <StyledSvgAvatar size="medium">
        <UserIcon role="img" aria-label="Example SVG" />
      </StyledSvgAvatar>
    </Col>
    <Col md>
      <StyledSvgAvatar size="large">
        <UserIcon role="img" aria-label="Example SVG" />
      </StyledSvgAvatar>
    </Col>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <StyledSystemAvatar size="large" isSystem>
        <ZendeskIcon role="img" aria-label="Zendesk" />
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="medium" isSystem>
        <ZendeskIcon role="img" aria-label="Zendesk" />
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="small" isSystem>
        <ZendeskIcon role="img" aria-label="Zendesk" />
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="extrasmall" isSystem>
        <ZendeskIcon role="img" aria-label="Zendesk" />
      </StyledSystemAvatar>
    </Col>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <StyledTextAvatar size="extrasmall">
        <Text>G</Text>
      </StyledTextAvatar>
    </Col>
    <Col md>
      <StyledTextAvatar size="small">
        <Text>A</Text>
      </StyledTextAvatar>
    </Col>
    <Col md>
      <StyledTextAvatar size="medium">
        <Text>R</Text>
      </StyledTextAvatar>
    </Col>
    <Col md>
      <StyledTextAvatar size="large">
        <Text>DN</Text>
      </StyledTextAvatar>
    </Col>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <StyledSystemAvatar size="large" isSystem>
        <Text>ZD</Text>
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="medium" isSystem>
        <Text>ZD</Text>
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="small" isSystem>
        <Text>ZD</Text>
      </StyledSystemAvatar>
    </Col>
    <Col md>
      <StyledSystemAvatar size="extrasmall" isSystem>
        <Text>ZD</Text>
      </StyledSystemAvatar>
    </Col>
  </Row>
</Grid>;
```

### States

Note that a foreground color style override should be used on `<Avatar>`
components to ensure internal status rings match the current background
color.

```jsx
const StyledCol = styled(Col)`
  text-align: center;
`;

<Grid>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <Avatar size="extrasmall" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="small" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="medium" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="large" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </Avatar>
    </StyledCol>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <Avatar size="extrasmall" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="small" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="medium" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="large" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </Avatar>
    </StyledCol>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <Avatar size="extrasmall" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="small" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="medium" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </Avatar>
    </StyledCol>
    <StyledCol md>
      <Avatar size="large" badge="9+">
        <img src="images/avatar-5.png" alt="Example image" />
      </Avatar>
    </StyledCol>
  </Row>
</Grid>;
```

```jsx
const { palette } = require('@zendeskgarden/react-theming/src');
const StyledGrid = styled(Grid)`
  padding: 10px;
  background-color: ${palette.grey[800]};
`;
const StyledCol = styled(Col)`
  text-align: center;
`;
const StyledAvatar = styled(Avatar)`
  color: ${palette.grey[800]} !important;
`;

<StyledGrid>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <StyledAvatar size="extrasmall" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="small" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="medium" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="large" status="away">
        <img src="images/avatar-3.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <StyledAvatar size="extrasmall" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="small" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="medium" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="large" status="available">
        <img src="images/avatar-4.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <StyledCol md>
      <StyledAvatar size="extrasmall" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="small" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="medium" badge="1">
        <img src="images/avatar-5.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
    <StyledCol md>
      <StyledAvatar size="large" badge="9+">
        <img src="images/avatar-5.png" alt="Example image" />
      </StyledAvatar>
    </StyledCol>
  </Row>
</StyledGrid>;
```

### Animation

```jsx
const UserIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;
const { palette } = require('@zendeskgarden/react-theming/src');

class Example extends React.Component {
  constructor() {
    this.state = {
      status: undefined,
      badge: undefined
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.interval = setInterval(() => {
        if (this.state.status === undefined) {
          this.setState({ status: 'away', badge: undefined });
        } else if (this.state.status === 'away' && this.state.badge === undefined) {
          this.setState({ status: 'available', badge: undefined });
        } else if (this.state.status === 'available' && this.state.badge === undefined) {
          this.setState({ status: 'away', badge: 2 });
        } else if (this.state.status === 'away' && this.state.badge !== undefined) {
          this.setState({ status: 'available', badge: 1 });
        } else {
          this.setState({ status: undefined, badge: undefined });
        }
      }, 3000);
    }, this.props.delay || 0);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <Avatar status={this.state.status} badge={this.state.badge} style={this.props.style}>
        {this.props.children}
      </Avatar>
    );
  }
}

<Grid>
  <Row>
    <Col md>
      <Example style={{ backgroundColor: palette.grey[600] }}>
        <img src="images/avatar-1.png" alt="Marcus Oakley" />
      </Example>
    </Col>
    <Col md>
      <Example style={{ backgroundColor: palette.grey[600] }} delay={1500}>
        <UserIcon role="img" aria-label="Generic User" />
      </Example>
    </Col>
  </Row>
</Grid>;
```
