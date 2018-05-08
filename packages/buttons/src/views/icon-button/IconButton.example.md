```jsx
const SettingsIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/settings.svg');
const AttachmentIcon = require('svg-react-loader?name=Attachment!@zendeskgarden/svg-icons/src/14/attachment.svg');

<Grid columns={6} stretched>
  <IconButton size="small">
    <Icon>
      <SettingsIcon />
    </Icon>
  </IconButton>
  <IconButton>
    <Icon>
      <SettingsIcon />
    </Icon>
  </IconButton>
  <IconButton size="large">
    <Icon>
      <SettingsIcon />
    </Icon>
  </IconButton>
  <IconButton size="small" pill={false}>
    <Icon>
      <AttachmentIcon />
    </Icon>
  </IconButton>
  <IconButton pill={false}>
    <Icon>
      <AttachmentIcon />
    </Icon>
  </IconButton>
  <IconButton size="large" pill={false}>
    <Icon>
      <AttachmentIcon />
    </Icon>
  </IconButton>
</Grid>;
```
