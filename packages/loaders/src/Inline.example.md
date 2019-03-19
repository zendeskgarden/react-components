```jsx
const {
  zdColorGrey600,
  zdColorGreen600,
  zdColorRed600,
  zdColorBlue600
} = require('@zendeskgarden/css-variables');

<Grid aria-busy="true" aria-live="polite">
  <Row>
    <p>
      All areas that contain these loaders must include the{' '}
      <code>[aria-busy="true",aria-live="polite"]</code>
      attributes for
      <a href="https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy">
        an accessible experience
      </a>
      .
    </p>
  </Row>
  <Row>
    <Col md>
      <Inline color={zdColorGrey600} />
    </Col>
    <Col md>
      <Inline size={32} color={zdColorGrey600} />
    </Col>
    <Col md>
      <Inline size={64} color={zdColorGrey600} />
    </Col>
  </Row>
  <Row>
    <Col md>
      <Inline color={zdColorGreen600} />
    </Col>
    <Col md>
      <Inline size={32} color={zdColorRed600} />
    </Col>
    <Col md>
      <Inline size={64} color={zdColorBlue600} />
    </Col>
  </Row>
</Grid>;
```
