```jsx
const { Toggle, Label } = require('@zendeskgarden/react-toggles/src');
const SupportIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-support.svg');
const HelpIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/support.svg');
const MenuTrayIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/menu-tray.svg');
const PersonIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/person.svg');

initialState = {
  standalone: true
};

<div>
  <Toggle
    checked={state.standalone}
    onChange={event => setState({ standalone: event.target.checked })}
  >
    <Label style={{ marginBottom: 8 }}>Enable Standalone Mode</Label>
  </Toggle>
  <Chrome style={{ height: 200 }}>
    <Body>
      <Header standalone={state.standalone}>
        <HeaderItem logo product="support">
          <HeaderItemIcon>
            <SupportIcon />
          </HeaderItemIcon>
          <HeaderItemText>Zendesk Support</HeaderItemText>
        </HeaderItem>
        <HeaderItemWrapper maxX>
          <span>Example flex-grow content</span>
        </HeaderItemWrapper>
        <HeaderItem>
          <HeaderItemIcon>
            <HelpIcon />
          </HeaderItemIcon>
          <HeaderItemText>Help Center</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemIcon>
            <MenuTrayIcon />
          </HeaderItemIcon>
          <HeaderItemText clipped>Products</HeaderItemText>
        </HeaderItem>
        <HeaderItem round>
          <HeaderItemIcon>
            <PersonIcon />
          </HeaderItemIcon>
          <HeaderItemText clipped>User</HeaderItemText>
        </HeaderItem>
      </Header>
    </Body>
  </Chrome>
</div>;
```
