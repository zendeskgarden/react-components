By default, the `<Button>` component contains an internal `KeyboardFocusContainer`
wrapper that applies focused styling _ONLY_ on keyboard focus. This can always
be overridden by providing the `focus` prop.

```jsx
<Grid>
  <Row>
    <Col md>
      <Button onClick={() => alert('clicked')}>Default Example</Button>
    </Col>
    <Col md>
      <Button danger onClick={() => alert('clicked')}>
        Danger Example
      </Button>
    </Col>
    <Col md>
      <Button pill onClick={() => alert('clicked')}>
        Pill Example
      </Button>
    </Col>
    <Col md>
      <Button danger pill onClick={() => alert('clicked')}>
        Danger Pill Example
      </Button>
    </Col>
  </Row>
</Grid>
```

### Types

```jsx
<Grid>
  <Row>
    <Col md>
      <Button>Default</Button>
    </Col>
    <Col md>
      <Button primary>Primary</Button>
    </Col>
    <Col md>
      <Button pill>Pill</Button>
    </Col>
    <Col md>
      <Button basic>Basic</Button>
    </Col>
    <Col md>
      <Button muted>Muted</Button>
    </Col>
    <Col md>
      <Button link>Link</Button>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row>
    <Col md>
      <Button size="small">Small</Button>
    </Col>
    <Col md>
      <Button>Default</Button>
    </Col>
    <Col md>
      <Button size="large">Large</Button>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md>
      <Button stretched>Stretched</Button>
    </Col>
    <Col md>
      <Button stretched>Stretched</Button>
    </Col>
  </Row>
</Grid>
```

### States

```jsx
<Grid>
  <Row>
    <Col md>
      <Button>Default</Button>
    </Col>
    <Col md>
      <Button disabled>Disabled</Button>
    </Col>
    <Col md>
      <Button hovered>Hovered</Button>
    </Col>
    <Col md>
      <Button focused>Focused</Button>
    </Col>
    <Col md>
      <Button active>Active</Button>
    </Col>
  </Row>
</Grid>
```
