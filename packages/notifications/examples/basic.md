**Accessibility Warning:** All usages of `<Close />` must contain an `aria-label`
or other assistive technique to have discernible text.

```jsx
const initialState = {
  type: 'success'
};

<Grid>
  <Row>
    <Col size={12}>
      <Alert type="success">
        <Title>Success Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="warning">
        <Title>Warning Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="error">
        <Title>Error Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
    <Col size={12}>
      <Alert type="info">
        <Title>Info Alert</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing alert')} aria-label="Close Alert" />
      </Alert>
    </Col>
  </Row>
</Grid>;
```

**Accessibility Warning:** All usages of `<Close />` must contain an `aria-label`
or other assistive technique to have discernible text.

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
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="success">
        <Title>Success Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="warning">
        <Title>Warning Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="error">
        <Title>Error Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
    <Col size={12}>
      <Notification type="info">
        <Title>Info Notification</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna.
        <Close onClick={() => alert('closing notification')} aria-label="Close Notification" />
      </Notification>
    </Col>
  </Row>
</Grid>
```

The `<Paragraph>` component should be used to wrap multi-line content within a `<Well>`. Otherwise,
no wrapper is necessary.

Default wells

```jsx
<Grid>
  <Row>
    <Col>
      <Well>
        <Title>Well: Standard (Multi-line)</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Paragraph>
      </Well>
    </Col>
  </Row>
  <Row>
    <Col md>
      <Well>
        <Title>Well: Standard (One-line)</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Well>
    </Col>
    <Col md>
      <Well recessed>
        <Title>Recessed Well: Standard (One-line)</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing.
      </Well>
    </Col>
  </Row>
</Grid>
```

You can also use a floating `Well` to emphasize content

```jsx
<Grid>
  <Row>
    <Col size={12}>
      <Well isFloating>
        <Title>Floating Well: Standard (Multi-line)</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Paragraph>
      </Well>
    </Col>
    <Col size={12}>
      <Well isFloating>
        <Title>Floating Well: Standard (One-line)</Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Well>
    </Col>
  </Row>
</Grid>
```
