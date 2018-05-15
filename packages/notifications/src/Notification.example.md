```jsx
<Grid>
  <Row>
    <Col size={12}>
      <Notification>
        <Title>Notification: Standard (Multi-line)</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Paragraph>
        <Close onClick={() => alert('closing notification')} />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="success">
        <Title>Success Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing notification')} />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="warning">
        <Title>Warning Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing notification')} />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="error">
        <Title>Error Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <Close onClick={() => alert('closing notification')} />
      </Notification>
    </Col>
  </Row>
</Grid>
```
