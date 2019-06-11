### Simple Usage

Due to the wide variety of routing strategies within React, the `Chrome` component doesn't
provide any opinionated navigation solutions.

All `NavItem` and `SubNavItem` components are `button` elements that accept all native props.
If you are using a routing library like [react-router](https://github.com/ReactTraining/react-router),
you can programmatically trigger navigation with the `onClick` events.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Field, Toggle, Label } = require('@zendeskgarden/react-forms/src');
const ConnectIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-connect.svg').default;
const HomeIcon = require('@zendeskgarden/svg-icons/src/26/home-fill.svg').default;
const ListsIcon = require('@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg').default;
const EmailIcon = require('@zendeskgarden/svg-icons/src/26/email-fill.svg').default;
const SettingsIcon = require('@zendeskgarden/svg-icons/src/26/settings-fill.svg').default;
const ZendeskIcon = require('@zendeskgarden/svg-icons/src/26/zendesk.svg').default;
const PlusIcon = require('@zendeskgarden/svg-icons/src/16/plus-stroke.svg').default;
const MenuTrayIcon = require('@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg').default;
const PersonIcon = require('@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg').default;

initialState = {
  currentNavItem: 'home',
  currentSubnavItem: 'item-1',
  expanded: true,
  showCollapsed: false
};

<div>
  <Field>
    <Toggle
      checked={state.expanded}
      onChange={event => setState({ expanded: event.target.checked })}
    >
      <Label style={{ marginBottom: 8 }}>Expand Navigation</Label>
    </Toggle>
  </Field>
  <Chrome style={{ height: 500 }}>
    <Nav expanded={state.expanded}>
      <NavItem logo product="connect" title="Zendesk Connect">
        <NavItemIcon>
          <ConnectIcon />
        </NavItemIcon>
        <NavItemText>Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem
        title="Home"
        current={state.currentNavItem === 'home'}
        onClick={() => setState({ currentNavItem: 'home' })}
      >
        <NavItemIcon>
          <HomeIcon />
        </NavItemIcon>
        <NavItemText>Home</NavItemText>
      </NavItem>
      <NavItem
        title="Segment"
        current={state.currentNavItem === 'segment'}
        onClick={() => setState({ currentNavItem: 'segment' })}
      >
        <NavItemIcon>
          <ListsIcon />
        </NavItemIcon>
        <NavItemText>Segment</NavItemText>
      </NavItem>
      <NavItem
        title="Campaigns"
        current={state.currentNavItem === 'campaigns'}
        onClick={() => setState({ currentNavItem: 'campaigns' })}
      >
        <NavItemIcon>
          <EmailIcon />
        </NavItemIcon>
        <NavItemText>Campaigns</NavItemText>
      </NavItem>
      <NavItem
        title="Settings"
        current={state.currentNavItem === 'settings'}
        onClick={() => setState({ currentNavItem: 'settings' })}
      >
        <NavItemIcon>
          <SettingsIcon />
        </NavItemIcon>
        <NavItemText>Settings</NavItemText>
      </NavItem>
      <NavItem brandmark title="Zendesk">
        <NavItemIcon>
          <ZendeskIcon />
        </NavItemIcon>
        <NavItemText>&copy;Zendesk</NavItemText>
      </NavItem>
    </Nav>
    <SubNav>
      <SubNavItem
        current={state.currentSubnavItem === 'item-1'}
        onClick={() => setState({ currentSubnavItem: 'item-1' })}
        href="#/"
      >
        <SubNavItemText>Subnav 1</SubNavItemText>
      </SubNavItem>
      <SubNavItem
        current={state.currentSubnavItem === 'item-2'}
        onClick={() => setState({ currentSubnavItem: 'item-2' })}
        href="#/"
      >
        <SubNavItemText>Subnav 2</SubNavItemText>
      </SubNavItem>
      <CollapsibleSubNavItem
        header="Collapsible Item"
        expanded={state.showCollapsed}
        onChange={showCollapsed => setState({ showCollapsed })}
      >
        <SubNavItem
          current={state.currentSubnavItem === 'collapsed-item-1'}
          onClick={() => setState({ currentSubnavItem: 'collapsed-item-1' })}
          href="#/"
        >
          <SubNavItemText>Item 1</SubNavItemText>
        </SubNavItem>
        <SubNavItem
          current={state.currentSubnavItem === 'collapsed-item-2'}
          onClick={() => setState({ currentSubnavItem: 'collapsed-item-2' })}
          href="#/"
        >
          <SubNavItemText>Item 2</SubNavItemText>
        </SubNavItem>
        <SubNavItem
          current={state.currentSubnavItem === 'collapsed-item-3'}
          onClick={() => setState({ currentSubnavItem: 'collapsed-item-3' })}
          href="#/"
        >
          <SubNavItemText>Item 3</SubNavItemText>
        </SubNavItem>
      </CollapsibleSubNavItem>
      <SubNavItem
        current={state.currentSubnavItem === 'item-3'}
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
          <HeaderItemText clipped>Products</HeaderItemText>
        </HeaderItem>
        <HeaderItem round>
          <HeaderItemIcon>
            <PersonIcon />
          </HeaderItemIcon>
          <HeaderItemText clipped>User</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content>
        <Main style={{ padding: 28 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet. Cum sociis
            natoque penatibus et magnis. Semper auctor neque vitae tempus. Id cursus metus aliquam
            eleifend mi. Nibh cras pulvinar mattis nunc sed. Semper quis lectus nulla at volutpat
            diam. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sollicitudin
            aliquam ultrices sagittis orci. Id nibh tortor id aliquet lectus proin nibh nisl
            condimentum. Sagittis aliquam malesuada bibendum arcu. Risus commodo viverra maecenas
            accumsan lacus vel. Mauris in aliquam sem fringilla ut morbi tincidunt. Lacus
            suspendisse faucibus interdum posuere lorem ipsum dolor sit. Eget dolor morbi non arcu
            risus quis.
          </p>
          <p>
            Mauris in aliquam sem fringilla ut morbi. Sit amet est placerat in egestas erat
            imperdiet. Amet venenatis urna cursus eget nunc. Gravida in fermentum et sollicitudin ac
            orci phasellus egestas tellus. Vitae tortor condimentum lacinia quis vel eros. Eget
            lorem dolor sed viverra ipsum nunc. Orci a scelerisque purus semper eget. Nisl pretium
            fusce id velit ut tortor pretium viverra. Scelerisque felis imperdiet proin fermentum
            leo vel. Facilisis volutpat est velit egestas dui id. Dolor sed viverra ipsum nunc
            aliquet bibendum enim facilisis. Malesuada fames ac turpis egestas integer eget aliquet.
            Nisl pretium fusce id velit ut tortor. Convallis convallis tellus id interdum. Ultrices
            sagittis orci a scelerisque purus semper.
          </p>
          <p>
            Dignissim convallis aenean et tortor. Diam maecenas sed enim ut sem viverra aliquet.
            Dolor purus non enim praesent elementum facilisis. Porttitor eget dolor morbi non arcu
            risus quis varius. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.
            Cursus euismod quis viverra nibh. Orci eu lobortis elementum nibh tellus molestie nunc
            non blandit. Velit sed ullamcorper morbi tincidunt. Aliquam id diam maecenas ultricies
            mi. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
            Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor nec
            feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum tellus. Viverra maecenas
            accumsan lacus vel facilisis volutpat est.
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
</div>;
```
