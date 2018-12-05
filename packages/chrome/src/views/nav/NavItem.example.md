### Products

All product color schemes can be applied with their associated `NavItem` property.

```jsx
const SupportIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-support.svg').default;
const ChatIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-chat.svg').default;
const ConnectIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-connect.svg').default;
const GuideIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-guide.svg').default;
const TalkIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-talk.svg').default;
const ExploreIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-explore.svg').default;
const HomeIcon = require('@zendeskgarden/svg-icons/src/26/home-fill.svg').default;
const ListsIcon = require('@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg').default;
const EmailIcon = require('@zendeskgarden/svg-icons/src/26/email-fill.svg').default;
const SettingsIcon = require('@zendeskgarden/svg-icons/src/26/settings-fill.svg').default;
const PlusIcon = require('@zendeskgarden/svg-icons/src/14/plus.svg').default;
const MenuTrayIcon = require('@zendeskgarden/svg-icons/src/14/menu-tray.svg').default;
const PersonIcon = require('@zendeskgarden/svg-icons/src/14/person.svg').default;

const ProductNav = ({ title, icon, ...other }) => (
  <Nav>
    <NavItem logo title={title} {...other}>
      <NavItemIcon>{icon}</NavItemIcon>
      <NavItemText>{title}</NavItemText>
    </NavItem>
    <NavItem title="Home">
      <NavItemIcon>
        <HomeIcon />
      </NavItemIcon>
      <NavItemText>Home</NavItemText>
    </NavItem>
    <NavItem title="Segment">
      <NavItemIcon>
        <ListsIcon />
      </NavItemIcon>
      <NavItemText>Segment</NavItemText>
    </NavItem>
    <NavItem title="Campaigns">
      <NavItemIcon>
        <EmailIcon />
      </NavItemIcon>
      <NavItemText>Campaigns</NavItemText>
    </NavItem>
    <NavItem title="Settings">
      <NavItemIcon>
        <SettingsIcon />
      </NavItemIcon>
      <NavItemText>Settings</NavItemText>
    </NavItem>
  </Nav>
);

<Grid>
  <Row>
    <Col>
      <ProductNav title="Zendesk Support" icon={<SupportIcon />} product="support" />
    </Col>
    <Col>
      <ProductNav title="Zendesk Chat" icon={<ChatIcon />} product="chat" />
    </Col>
    <Col>
      <ProductNav title="Zendesk Connect" icon={<ConnectIcon />} product="connect" />
    </Col>
    <Col>
      <ProductNav title="Zendesk Guide" icon={<GuideIcon />} product="guide" />
    </Col>
    <Col>
      <ProductNav title="Zendesk Talk" icon={<TalkIcon />} product="talk" />
    </Col>
    <Col>
      <ProductNav title="Zendesk Explore" icon={<ExploreIcon />} product="explore" />
    </Col>
  </Row>
</Grid>;
```

### States

```jsx
<Nav expanded>
  <NavItem>
    <NavItemText>default</NavItemText>
  </NavItem>
  <NavItem focused>
    <NavItemText>focused</NavItemText>
  </NavItem>
  <NavItem hovered>
    <NavItemText>hovered</NavItemText>
  </NavItem>
  <NavItem current>
    <NavItemText>current</NavItemText>
  </NavItem>
</Nav>
```
