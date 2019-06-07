```jsx
const { Field, Toggle, Label } = require('@zendeskgarden/react-forms/src');
const SupportIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-support.svg').default;
const HelpIcon = require('@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg').default;
const MenuTrayIcon = require('@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg').default;
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;

initialState = {
  standalone: true
};

<div>
  <Field>
    <Toggle
      checked={state.standalone}
      onChange={event => setState({ standalone: event.target.checked })}
    >
      <Label style={{ marginBottom: 8 }}>Enable Standalone Mode</Label>
    </Toggle>
  </Field>
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
