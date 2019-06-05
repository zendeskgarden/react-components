For accessibility ensure that all children images include an `alt` description.

For implementations that use the `badge` prop ensure that information is read
correctly by assistive technologies as necessary for your use-case.

### Types

```jsx
const { zdColorSecondaryFuschia600, zdColorGrey600 } = require('@zendeskgarden/css-variables');
const UserIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;

const StyledTextAvatar = styled(Avatar)`
  background-color: ${zdColorSecondaryFuschia600};
`;

const StyledSvgAvatar = styled(Avatar)`
  background-color: ${zdColorGrey600};
`;

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
      <Avatar system>
        <img src="images/system.png" alt="System avatar" />
      </Avatar>
    </Col>
    <Col md>
      <h3>Text</h3>
      <StyledTextAvatar>
        <Text>DV</Text>
      </StyledTextAvatar>
    </Col>
    <Col md>
      <h3>SVG</h3>
      <StyledSvgAvatar>
        <UserIcon alt="SVG avatar" />
      </StyledSvgAvatar>
    </Col>
  </Row>
</Grid>;
```

### Sizes

```jsx
<Grid>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <Avatar size="extrasmall">
        <img src="images/avatar-2.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="small">
        <img src="images/avatar-2.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar>
        <img src="images/avatar-2.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="large">
        <img src="images/avatar-2.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
  <Row alignItems="center" justifyContent="center">
    <Col md>
      <Avatar size="extrasmall" system>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="small" system>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar system>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="large" system>
        <img src="images/system.png" alt="System Avatar" />
      </Avatar>
    </Col>
  </Row>
</Grid>
```

### States

```jsx
const { zdColorSecondaryAzure600 } = require('@zendeskgarden/css-variables');

const StyledTextAvatar = styled(Avatar)`
  background-color: ${zdColorSecondaryAzure600};
`;

<Grid>
  <Row>
    <Col md={4}>
      <Avatar status="available" badge="9+">
        <img src="images/avatar-1.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar status="available">
        <img src="images/avatar-2.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar status="away">
        <img src="images/avatar-4.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <StyledTextAvatar status="available" badge="9+" size="large">
        <Text>JZ</Text>
      </StyledTextAvatar>
    </Col>
    <Col md={4}>
      <StyledTextAvatar status="available" size="large">
        <Text>AS</Text>
      </StyledTextAvatar>
    </Col>
    <Col md={4}>
      <StyledTextAvatar status="away" size="large">
        <Text>GW</Text>
      </StyledTextAvatar>
    </Col>
  </Row>
</Grid>;
```

### Animation

```jsx
class Example extends React.Component {
  constructor() {
    this.state = {
      status: undefined,
      badge: undefined
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.status === undefined) {
        this.setState({ status: 'available', badge: undefined });
      } else if (this.state.status === 'available' && this.state.badge === undefined) {
        this.setState({ status: 'available', badge: '5' });
      } else if (this.state.status === 'available' && this.state.badge !== undefined) {
        this.setState({ status: 'away', badge: undefined });
      } else {
        this.setState({ status: undefined, badge: undefined });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Avatar status={this.state.status} badge={this.state.badge}>
        <img src="images/avatar-1.png" alt="User avatar" />
      </Avatar>
    );
  }
}

<Example />;
```
