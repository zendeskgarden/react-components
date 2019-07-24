The following example displays a selection of `IconButton` and
`ChevronButton` (a special type of icon button) components. The example is
also controlled so that the icons rotate on click.

```jsx
const { useState } = require('react');
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;
const AttachmentIcon = require('@zendeskgarden/svg-icons/src/16/paperclip.svg').default;

const ExampleIconButton = ({ children, type, ...other }) => {
  const [rotated, setRotated] = useState(false);
  const click = () => setRotated(!rotated);

  if (type === 'chevron') {
    return <ChevronButton {...other} onClick={click} rotated={rotated} />;
  } else {
    return (
      <IconButton {...other} onClick={click} rotated={rotated}>
        {children}
      </IconButton>
    );
  }
};

<Grid>
  <Row alignItems="center">
    <Col md>
      <ExampleIconButton size="small" aria-label="Settings">
        <SettingsIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton aria-label="Settings">
        <SettingsIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton size="large" aria-label="Settings">
        <SettingsIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton size="small" pill={false} aria-label="Attachments">
        <AttachmentIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton pill={false} aria-label="Attachments">
        <AttachmentIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton size="large" pill={false} aria-label="Attachments">
        <AttachmentIcon />
      </ExampleIconButton>
    </Col>
    <Col md>
      <ExampleIconButton size="small" aria-label="Menu" type="chevron" />
    </Col>
    <Col md>
      <ExampleIconButton aria-label="Menu" type="chevron" />
    </Col>
    <Col md>
      <ExampleIconButton size="large" aria-label="Menu" type="chevron" />
    </Col>
  </Row>
</Grid>;
```
