**Accessibility Warning:** All usages of `<Close />` must contain an `aria-label`
or other assistive technique to have discernible text.

```jsx
<Grid>
  <Row>
    <Col size={12}>
      <Alert type="success">
        <Title>Success Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="warning">
        <Title>Warning Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="error">
        <Title>Error Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="info">
        <Title>Info Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
  </Row>
</Grid>
```
