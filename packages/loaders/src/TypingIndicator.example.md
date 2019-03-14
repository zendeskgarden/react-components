```jsx
const { zdColorGreen600, zdColorRed600, zdColorBlue600 } = require('@zendeskgarden/css-variables');

<Grid>
  <Row>
    <Col md>
      <TypingIndicator />
    </Col>
    <Col md>
      <TypingIndicator size={32} />
    </Col>
    <Col md>
      <TypingIndicator size={64} />
    </Col>
  </Row>
  <Row>
    <Col md>
      <TypingIndicator color={zdColorGreen600} />
    </Col>
    <Col md>
      <TypingIndicator size={32} color={zdColorRed600} />
    </Col>
    <Col md>
      <TypingIndicator size={64} color={zdColorBlue600} />
    </Col>
  </Row>
</Grid>;
```
