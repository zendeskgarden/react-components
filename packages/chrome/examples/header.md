```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Field, Toggle, Label } = require('@zendeskgarden/react-forms/src');
const SupportIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-support.svg').default;
const HelpIcon = require('@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg').default;
const MenuTrayIcon = require('@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg').default;
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;

initialState = {
  standalone: true
};

<>
  <Well isRecessed>
    <Field>
      <Toggle
        checked={state.standalone}
        onChange={event => setState({ standalone: event.target.checked })}
      >
        <Label>Standalone</Label>
      </Toggle>
    </Field>
  </Well>
  <br />
  <Chrome isFluid style={{ height: 200 }}>
    <Body>
      <Header isStandalone={state.standalone}>
        <HeaderItem hasLogo product="support">
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
          <HeaderItemText isClipped>Products</HeaderItemText>
        </HeaderItem>
        <HeaderItem isRound>
          <HeaderItemIcon>
            <img alt="User avatar" src="images/avatar-30.png" />
          </HeaderItemIcon>
          <HeaderItemText isClipped>User</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content>
        <Main />
      </Content>
    </Body>
  </Chrome>
</>;
```
