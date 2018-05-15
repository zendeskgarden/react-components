### Products

All product color schemes can be applied with their associated `NavItem` property.

```jsx
const SupportIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-support.svg');
const ChatIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-chat.svg');
const ConnectIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-connect.svg');
const GuideIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-guide.svg');
const TalkIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-talk.svg');
const ExploreIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/relationshape-explore.svg');
const HomeIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/home-fill.svg');
const ListsIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg');
const EmailIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/email-fill.svg');
const SettingsIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/26/settings-fill.svg');
const PlusIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/plus.svg');
const MenuTrayIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/menu-tray.svg');
const PersonIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/14/person.svg');

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
