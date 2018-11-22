For accessibility ensure that all children include an `alt` description.

### Types

```jsx
<Grid>
  <Row>
    <Col md>
      <Avatar>
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar system>
        <img src="images/zendesk.jpeg" alt="Zendesk" />
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
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="small">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar>
        <img src="images/amir.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md>
      <Avatar size="large">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
</Grid>
```

### States

```jsx
<Grid>
  <Row>
    <Col md={4}>
      <Avatar size="extrasmall">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar disabled size="extrasmall">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar isBorderless size="extrasmall">
        <img src="images/amir.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <Avatar size="small">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar disabled size="small">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar isBorderless size="small">
        <img src="images/amir.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <Avatar size="large">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar disabled size="large">
        <img src="images/jason.png" alt="Example Avatar" />
      </Avatar>
    </Col>
    <Col md={4}>
      <Avatar isBorderless size="large">
        <img src="images/amir.png" alt="Example Avatar" />
      </Avatar>
    </Col>
  </Row>
</Grid>
```
