### Basic Usage

Due to the wide variety of routing strategies within React, the `Chrome` component doesn't
provide any opinionated navigation solutions.

The `NavItem` and `SubNavItem` components are `button` elements that accept all native attributes
and events. If you are using a routing library like [react-router](https://github.com/ReactTraining/react-router),
you can programmatically trigger navigation with the `onClick` events.

#### Custom Nav Colors

The default `Nav` component is styled with a Zendesk branded palette. For white-labeling purposes
a custom `background-color` style may be applied along with the `isLight` or `isDark` props.

This demo uses the [PolishedJS getLuminance()](https://polished.js.org/docs/#getluminance)
utility to determine which props to enable.

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

const StyledNav = styled(Nav).attrs(props => ({
  style: {
    backgroundColor: props.backgroundColor
  }
}))``;

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

<State
  initialState={{
    currentNavItem: 'home',
    currentSubnavItem: 'item-1',
    expanded: true,
    showCollapsed: false,
    product: PRODUCTS[0],
    color: PALETTE.kale[700],
    isLight: false,
    isDark: false
  }}
>
  {(state, setState) => (
    <Grid>
      <Row>
        <Col md={6} alignSelf="start">
          <Well recessed>
            <Dropdown selectedItem={state.product} onSelect={product => setState({ product })}>
              <DropdownField>
                <DropdownLabel>Product</DropdownLabel>
                <Select>{state.product}</Select>
              </DropdownField>
              <Menu>
                {PRODUCTS.map(product => (
                  <Item key={product} value={product}>
                    {product}
                  </Item>
                ))}
              </Menu>
            </Dropdown>
            <StyledSpacer />
            <Field>
              <Toggle
                checked={state.expanded}
                onChange={event => setState({ expanded: event.target.checked })}
              >
                <Label>Expanded</Label>
              </Toggle>
            </Field>
          </Well>
        </Col>
        <Col md={6}>
          <Well recessed>
            <Field>
              <Label>Custom Color </Label>
              <Input
                type="color"
                value={state.color}
                onChange={e => {
                  const colorLuminance = e.target.value ? getLuminance(e.target.value) : undefined;

                  let isLight = state.isLight;
                  let isDark = state.isDark;

                  if (colorLuminance) {
                    if (colorLuminance >= 0.25) {
                      isLight = true;
                      isDark = false;
                    } else {
                      isLight = false;
                      isDark = true;
                    }
                  }

                  setState({
                    color: e.target.value,
                    isLight,
                    isDark
                  });
                }}
              />
            </Field>
            <StyledSpacer />
            <Field>
              <Toggle
                checked={state.isLight}
                onChange={event => setState({ isLight: event.target.checked })}
              >
                <Label style={{ marginTop: 8 }}>Light nav</Label>
              </Toggle>
            </Field>
            <StyledSpacer />
            <Field>
              <Toggle
                checked={state.isDark}
                onChange={event => setState({ isDark: event.target.checked })}
              >
                <Label style={{ marginTop: 8 }}>Dark nav</Label>
              </Toggle>
            </Field>
            <StyledSpacer />
            <Button
              onClick={() => setState({ color: PALETTE.kale[700], isLight: false, isDark: false })}
            >
              Reset colors
            </Button>
          </Well>
        </Col>
      </Row>
      <Row>
        <Col>
          <Chrome style={{ height: 500 }}>
            <StyledNav
              isExpanded={state.expanded}
              backgroundColor={state.color}
              isDark={state.isDark}
              isLight={state.isLight}
            >
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
            </StyledNav>
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
                <Main style={{ padding: 28 }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet. Cum
                    sociis natoque penatibus et magnis. Semper auctor neque vitae tempus. Id cursus
                    metus aliquam eleifend mi. Nibh cras pulvinar mattis nunc sed. Semper quis
                    lectus nulla at volutpat diam. Sit amet mauris commodo quis imperdiet massa
                    tincidunt nunc pulvinar. Sollicitudin aliquam ultrices sagittis orci. Id nibh
                    tortor id aliquet lectus proin nibh nisl condimentum. Sagittis aliquam malesuada
                    bibendum arcu. Risus commodo viverra maecenas accumsan lacus vel. Mauris in
                    aliquam sem fringilla ut morbi tincidunt. Lacus suspendisse faucibus interdum
                    posuere lorem ipsum dolor sit. Eget dolor morbi non arcu risus quis.
                  </p>
                  <p>
                    Mauris in aliquam sem fringilla ut morbi. Sit amet est placerat in egestas erat
                    imperdiet. Amet venenatis urna cursus eget nunc. Gravida in fermentum et
                    sollicitudin ac orci phasellus egestas tellus. Vitae tortor condimentum lacinia
                    quis vel eros. Eget lorem dolor sed viverra ipsum nunc. Orci a scelerisque purus
                    semper eget. Nisl pretium fusce id velit ut tortor pretium viverra. Scelerisque
                    felis imperdiet proin fermentum leo vel. Facilisis volutpat est velit egestas
                    dui id. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Malesuada
                    fames ac turpis egestas integer eget aliquet. Nisl pretium fusce id velit ut
                    tortor. Convallis convallis tellus id interdum. Ultrices sagittis orci a
                    scelerisque purus semper.
                  </p>
                  <p>
                    Dignissim convallis aenean et tortor. Diam maecenas sed enim ut sem viverra
                    aliquet. Dolor purus non enim praesent elementum facilisis. Porttitor eget dolor
                    morbi non arcu risus quis varius. Feugiat pretium nibh ipsum consequat nisl vel
                    pretium lectus quam. Cursus euismod quis viverra nibh. Orci eu lobortis
                    elementum nibh tellus molestie nunc non blandit. Velit sed ullamcorper morbi
                    tincidunt. Aliquam id diam maecenas ultricies mi. Suspendisse potenti nullam ac
                    tortor vitae purus faucibus ornare suspendisse. Blandit aliquam etiam erat velit
                    scelerisque in dictum non consectetur. Tempor nec feugiat nisl pretium. Ac orci
                    phasellus egestas tellus rutrum tellus. Viverra maecenas accumsan lacus vel
                    facilisis volutpat est.
                  </p>
                </Main>
              </Content>
              <Footer>
                <FooterItem>
                  <Button basic>Cancel</Button>
                </FooterItem>
                <FooterItem>
                  <Button primary>Save</Button>
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
