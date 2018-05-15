```jsx
<Grid>
  <Row>
    <Col size={12}>
      <Alert type="success">
        <Title>Success Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="warning">
        <Title>Warning Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="error">
        <Title>Error Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing alert')} />
      </Alert>
    </Col>
  </Row>
</Grid>
```
