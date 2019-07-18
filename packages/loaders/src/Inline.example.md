```jsx
const { PALETTE } = require('@zendeskgarden/react-theming/src');

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
      <Inline color={PALETTE.grey[600]} />
    </Col>
    <Col md>
      <Inline size={32} color={PALETTE.grey[600]} />
    </Col>
    <Col md>
      <Inline size={64} color={PALETTE.grey[600]} />
    </Col>
  </Row>
  <Row>
    <Col md>
      <Inline color={PALETTE.green[600]} />
    </Col>
    <Col md>
      <Inline size={32} color={PALETTE.red[600]} />
    </Col>
    <Col md>
      <Inline size={64} color={PALETTE.blue[600]} />
    </Col>
  </Row>
</Grid>;
```
