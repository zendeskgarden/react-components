```jsx
const SettingsIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/settings.svg');
const AttachmentIcon = require('svg-react-loader?name=Attachment!@zendeskgarden/svg-icons/src/14/attachment.svg');

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
