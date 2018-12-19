`Avatars` are meant to consume `svg` and `img` elements, but are able to apply
their styling to any element they are provided.

`Avatars` are hidden for small `Tags`.

```jsx
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-circle-stroke.svg').default;

<Grid>
  <Row>
    <Col md={4}>
      <Tag size="small">
        <Avatar>
          <img src="images/amir.png" alt="This is a hidden avatar due to the small size" />
        </Avatar>
        Small avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag>
        <Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Avatar>
        Default avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large">
        <Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Avatar>
        Large avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill>
        <Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Avatar>
        Small avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill>
        <Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Avatar>
        Default avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill>
        <Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Avatar>
        Large avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill dark>
        <Avatar>
          <PersonIcon alt="Example Avatar" />
        </Avatar>
        Small avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill dark>
        <Avatar>
          <PersonIcon alt="Example Avatar" />
        </Avatar>
        Default avatar
        <Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill dark>
        <Avatar>
          <PersonIcon alt="Example Avatar" />
        </Avatar>
        Large avatar
        <Close />
      </Tag>
    </Col>
  </Row>
</Grid>;
```
