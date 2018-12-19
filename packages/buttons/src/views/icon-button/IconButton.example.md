```jsx
const SettingsIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;
const AttachmentIcon = require('@zendeskgarden/svg-icons/src/16/paperclip.svg').default;

<Grid>
  <Row>
    <Col md>
      <IconButton size="small" aria-label="Settings">
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton aria-label="Settings">
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="large" aria-label="Settings">
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="small" pill={false} aria-label="Attachments">
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton pill={false} aria-label="Attachments">
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="large" pill={false} aria-label="Attachments">
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
  </Row>
</Grid>;
```
