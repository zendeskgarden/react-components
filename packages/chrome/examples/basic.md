### Basic Usage

Due to the wide variety of routing strategies within React, the `Chrome` component doesn't
provide any opinionated navigation solutions. The `NavItem` and `SubNavItem` components are
`button` elements that accept all native attributes and events. If you are using a routing
library like [react-router](https://github.com/ReactTraining/react-router),
you can programmatically trigger navigation with the `onClick` events.

#### Custom Nav Colors

By default, the `Nav` and `SubNav` components are styled with a Zendesk
branded palette. For white-labeling purposes a custom `hue` prop may be
applied. The `Chrome` component uses the
[PolishedJS readableColor()](https://polished.js.org/docs/#readablecolor)
utility to modify colors to maintain accessible contrast levels.

```jsx
const { getLuminance } = require('polished');
const { Button, Anchor } = require('@zendeskgarden/react-buttons/src');
const { Field, Toggle, Label, Input } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Field: DropdownField,
  Label: DropdownLabel,
  Select,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { Well, Alert, Title } = require('@zendeskgarden/react-notifications/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const GuideIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-guide.svg').default;
const SupportIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-support.svg').default;
const ChatIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-chat.svg').default;
const ConnectIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-connect.svg').default;
const ExploreIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-explore.svg').default;
const MessageIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-message.svg').default;
const TalkIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-talk.svg').default;
const HomeIcon = require('@zendeskgarden/svg-icons/src/26/home-fill.svg').default;
const ListsIcon = require('@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg').default;
const EmailIcon = require('@zendeskgarden/svg-icons/src/26/email-fill.svg').default;
const SettingsIcon = require('@zendeskgarden/svg-icons/src/26/settings-fill.svg').default;
const ZendeskIcon = require('@zendeskgarden/svg-icons/src/26/zendesk.svg').default;
const PlusIcon = require('@zendeskgarden/svg-icons/src/16/plus-stroke.svg').default;
const MenuTrayIcon = require('@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg').default;
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;

const PRODUCTS = ['guide', 'support', 'chat', 'connect', 'explore', 'message', 'talk'];

const ProductIcon = ({ product }) => {
  if (product === 'guide') {
    return <GuideIcon />;
  } else if (product === 'support') {
    return <SupportIcon />;
  } else if (product === 'chat') {
    return <ChatIcon />;
  } else if (product === 'connect') {
    return <ConnectIcon />;
  } else if (product === 'explore') {
    return <ExploreIcon />;
  } else if (product === 'message') {
    return <MessageIcon />;
  } else if (product === 'talk') {
    return <TalkIcon />;
  }

  return <ZendeskIcon />;
};

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

<State
  initialState={{
    currentNavItem: 'home',
    currentSubnavItem: 'item-1',
    expanded: false,
    subnav: true,
    sidebar: false,
    showCollapsed: false,
    product: PRODUCTS[0],
    hue: PALETTE.kale[700]
  }}
>
  {(state, setState) => (
    <Grid>
      <Well isRecessed>
        <Row>
          <Col md={6} alignSelf="start">
            <Dropdown selectedItem={state.product} onSelect={product => setState({ product })}>
              <DropdownField>
                <DropdownLabel>Product</DropdownLabel>
                <Select isCompact>{state.product}</Select>
              </DropdownField>
              <Menu isCompact>
                {PRODUCTS.map(product => (
                  <Item key={product} value={product}>
                    {product}
                  </Item>
                ))}
              </Menu>
            </Dropdown>
            <StyledSpacer />
            <Row>
              <Col alignSelf="start">
                <Field>
                  <Toggle
                    checked={state.expanded}
                    onChange={event => setState({ expanded: event.target.checked })}
                  >
                    <Label>Expanded</Label>
                  </Toggle>
                </Field>
              </Col>
              <Col alignSelf="start">
                <Field>
                  <Toggle
                    checked={state.subnav}
                    onChange={event => setState({ subnav: event.target.checked })}
                  >
                    <Label>Show subnav</Label>
                  </Toggle>
                </Field>
                <StyledSpacer />
                <Field>
                  <Toggle
                    checked={state.sidebar}
                    onChange={event => setState({ sidebar: event.target.checked })}
                  >
                    <Label>Show sidebar</Label>
                  </Toggle>
                </Field>
              </Col>
            </Row>
          </Col>
          <Col md={6} alignSelf="start">
            <Field>
              <Label>Hue</Label>
              <Input
                type="color"
                value={state.hue}
                isCompact
                onChange={e =>
                  setState({
                    hue: e.target.value
                  })
                }
              />
            </Field>
            <StyledSpacer />
            <Button size="small" onClick={() => setState({ hue: PALETTE.kale[700] })}>
              Reset hue
            </Button>
          </Col>
        </Row>
      </Well>
      <StyledSpacer />
      <Row>
        <Col>
          <Chrome
            isFluid
            style={{ height: 500 }}
            hue={state.hue === PALETTE.kale[700] ? undefined : state.hue}
          >
            <Nav isExpanded={state.expanded}>
              <NavItem hasLogo product={state.product} title="Zendesk">
                <NavItemIcon>
                  <ProductIcon product={state.product} />
                </NavItemIcon>
                <NavItemText>Zendesk Connect</NavItemText>
              </NavItem>
              <NavItem
                title="Home"
                isCurrent={state.currentNavItem === 'home'}
                onClick={() => setState({ currentNavItem: 'home' })}
              >
                <NavItemIcon>
                  <HomeIcon />
                </NavItemIcon>
                <NavItemText>Home</NavItemText>
              </NavItem>
              <NavItem
                title="Segment"
                isCurrent={state.currentNavItem === 'segment'}
                onClick={() => setState({ currentNavItem: 'segment' })}
              >
                <NavItemIcon>
                  <ListsIcon />
                </NavItemIcon>
                <NavItemText>Segment</NavItemText>
              </NavItem>
              <NavItem
                title="Campaigns"
                isCurrent={state.currentNavItem === 'campaigns'}
                onClick={() => setState({ currentNavItem: 'campaigns' })}
              >
                <NavItemIcon>
                  <EmailIcon />
                </NavItemIcon>
                <NavItemText>Campaigns</NavItemText>
              </NavItem>
              <NavItem
                title="Settings"
                isCurrent={state.currentNavItem === 'settings'}
                onClick={() => setState({ currentNavItem: 'settings' })}
              >
                <NavItemIcon>
                  <SettingsIcon />
                </NavItemIcon>
                <NavItemText>Settings</NavItemText>
              </NavItem>
              <NavItem hasBrandmark title="Zendesk">
                <NavItemIcon>
                  <ZendeskIcon />
                </NavItemIcon>
                <NavItemText>&copy;Zendesk</NavItemText>
              </NavItem>
            </Nav>
            {state.subnav && (
              <SubNav>
                <SubNavItem
                  isCurrent={state.currentSubnavItem === 'item-1'}
                  onClick={() => setState({ currentSubnavItem: 'item-1' })}
                  href="#/"
                >
                  <SubNavItemText>Subnav 1</SubNavItemText>
                </SubNavItem>
                <SubNavItem
                  isCurrent={state.currentSubnavItem === 'item-2'}
                  onClick={() => setState({ currentSubnavItem: 'item-2' })}
                  href="#/"
                >
                  <SubNavItemText>Subnav 2</SubNavItemText>
                </SubNavItem>
                <CollapsibleSubNavItem
                  header="Collapsible Item"
                  isExpanded={state.showCollapsed}
                  onChange={showCollapsed => setState({ showCollapsed })}
                >
                  <SubNavItem
                    isCurrent={state.currentSubnavItem === 'collapsed-item-1'}
                    onClick={() => setState({ currentSubnavItem: 'collapsed-item-1' })}
                    href="#/"
                  >
                    <SubNavItemText>Item 1</SubNavItemText>
                  </SubNavItem>
                  <SubNavItem
                    isCurrent={state.currentSubnavItem === 'collapsed-item-2'}
                    onClick={() => setState({ currentSubnavItem: 'collapsed-item-2' })}
                    href="#/"
                  >
                    <SubNavItemText>Item 2</SubNavItemText>
                  </SubNavItem>
                  <SubNavItem
                    isCurrent={state.currentSubnavItem === 'collapsed-item-3'}
                    onClick={() => setState({ currentSubnavItem: 'collapsed-item-3' })}
                    href="#/"
                  >
                    <SubNavItemText>Item 3</SubNavItemText>
                  </SubNavItem>
                </CollapsibleSubNavItem>
                <SubNavItem
                  isCurrent={state.currentSubnavItem === 'item-3'}
                  onClick={() => setState({ currentSubnavItem: 'item-3' })}
                  href="#/"
                >
                  <SubNavItemText>Subnav 3</SubNavItemText>
                </SubNavItem>
              </SubNav>
            )}
            <Body hasFooter>
              <Header>
                <HeaderItem>
                  <HeaderItemIcon>
                    <MenuTrayIcon />
                  </HeaderItemIcon>
                  <HeaderItemText isClipped>Products</HeaderItemText>
                </HeaderItem>
                <HeaderItem isRound>
                  <HeaderItemIcon>
                    <PersonIcon />
                  </HeaderItemIcon>
                  <HeaderItemText isClipped>User</HeaderItemText>
                </HeaderItem>
              </Header>
              <Content>
                {state.sidebar && (
                  <Sidebar style={{ padding: 28 }}>
                    <h2>Example Sidebar</h2>
                    <p>
                      Beetroot water spinach okra water chestnut ricebean pea catsear courgette
                      summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush
                      tomato kale radicchio turnip chicory salsify pea sprouts fava bean.
                    </p>
                    <p>
                      Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip
                      greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli
                      arugula.
                    </p>
                  </Sidebar>
                )}
                <Main style={{ padding: 28 }}>
                  <h2>Main Content</h2>
                  <p>
                    Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
                    purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato
                    kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini
                    burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut
                    soybean radish artichoke wattle seed endive groundnut broccoli arugula.
                  </p>
                  <p>
                    Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                    azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard
                    greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet
                    watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane
                    coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer
                    purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum
                    komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet
                    rock melon radish asparagus spinach.
                  </p>
                  <p>
                    Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
                    garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed
                    kombu beetroot horseradish carrot squash brussels sprout chard.
                  </p>
                </Main>
              </Content>
              <Footer>
                <FooterItem>
                  <Button isBasic>Cancel</Button>
                </FooterItem>
                <FooterItem>
                  <Button isPrimary>Save</Button>
                </FooterItem>
              </Footer>
            </Body>
          </Chrome>
        </Col>
      </Row>
    </Grid>
  )}
</State>;
```
