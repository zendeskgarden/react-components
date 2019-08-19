`Avatars` are meant to consume `svg` and `img` elements, but are able to apply
their styling to any element they are provided.

`Avatars` are hidden for small `Tags`.

```jsx
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-circle-stroke.svg').default;

<Grid>
  <Row>
    <Col md={4}>
      <Tag size="small">
        <Tag.Avatar>
          <img src="images/amir.png" alt="This is a hidden avatar due to the small size" />
        </Tag.Avatar>
        Small avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag>
        <Tag.Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Tag.Avatar>
        Default avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large">
        <Tag.Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Tag.Avatar>
        Large avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill>
        <Tag.Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Tag.Avatar>
        Small avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill>
        <Tag.Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Tag.Avatar>
        Default avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill>
        <Tag.Avatar>
          <img src="images/amir.png" alt="Example Avatar" />
        </Tag.Avatar>
        Large avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill dark>
        <Tag.Avatar>
          <PersonIcon alt="Example Avatar" />
        </Tag.Avatar>
        Small avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill dark>
        <Tag.Avatar>
          <PersonIcon alt="Example Avatar" />
        </Tag.Avatar>
        Default avatar
        <Tag.Close />
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill dark>
        <Tag.Avatar>
          <PersonIcon alt="Example Avatar" />
        </Tag.Avatar>
        Large avatar
        <Tag.Close />
      </Tag>
    </Col>
  </Row>
</Grid>;
```
