```jsx
const SettingsIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/settings.svg');
const AttachmentIcon = require('svg-react-loader?name=Attachment!@zendeskgarden/svg-icons/src/14/attachment.svg');

<Grid>
  <Row>
    <Col md>
      <IconButton size="small">
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton>
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="large">
        <Icon>
          <SettingsIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="small" pill={false}>
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton pill={false}>
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
    <Col md>
      <IconButton size="large" pill={false}>
        <Icon>
          <AttachmentIcon />
        </Icon>
      </IconButton>
    </Col>
  </Row>
</Grid>;
```
