/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import GuideIcon from '@zendeskgarden/svg-icons/src/26/relationshape-guide.svg';
import SupportIcon from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
import ChatIcon from '@zendeskgarden/svg-icons/src/26/relationshape-chat.svg';
import ConnectIcon from '@zendeskgarden/svg-icons/src/26/relationshape-connect.svg';
import ExploreIcon from '@zendeskgarden/svg-icons/src/26/relationshape-explore.svg';
import MessageIcon from '@zendeskgarden/svg-icons/src/26/relationshape-message.svg';
import TalkIcon from '@zendeskgarden/svg-icons/src/26/relationshape-talk.svg';
import HomeIcon from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import ListsIcon from '@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg';
import EmailIcon from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import SettingsIcon from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import ZendeskIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import MenuTrayIcon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import PersonIcon from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import {
  Body,
  SkipNav,
  Chrome,
  CollapsibleSubNavItem,
  Content,
  Footer,
  FooterItem,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Main,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Sidebar,
  SubNav,
  SubNavItem,
  SubNavItemText
} from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';

type PRODUCT = 'chat' | 'connect' | 'explore' | 'guide' | 'message' | 'support' | 'talk';

const ProductIcon: React.FC<{ product: PRODUCT }> = ({ product }) => {
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

interface IDefaultStoryProps {
  product: PRODUCT;
  isExpanded: boolean;
  showSubnav: boolean;
  showSidebar: boolean;
  hueColor?: string;
  itemCount: number;
}

export const Default: Story<IDefaultStoryProps> = ({
  product,
  isExpanded,
  showSubnav,
  showSidebar,
  hueColor,
  itemCount
}) => {
  const [currentNavItem, setCurrentNavItem] = useState('home');
  const [currentSubnavItem, setCurrentSubnavItem] = useState('item-1');
  const [showCollapsed, setShowCollapsed] = useState(false);
  const subNavItems = Array(itemCount)
    .fill(undefined)
    .map((s, i) => i);

  return (
    <Chrome isFluid style={{ height: 500 }} hue={hueColor}>
      <SkipNav targetId="main-content">Skip to main content</SkipNav>
      <Nav isExpanded={isExpanded}>
        <NavItem hasLogo product={product} title="Zendesk">
          <NavItemIcon>
            <ProductIcon product={product} />
          </NavItemIcon>
          <NavItemText>Zendesk Connect</NavItemText>
        </NavItem>
        <NavItem
          title="Home"
          isCurrent={currentNavItem === 'home'}
          onClick={() => setCurrentNavItem('home')}
        >
          <NavItemIcon>
            <HomeIcon />
          </NavItemIcon>
          <NavItemText>Home</NavItemText>
        </NavItem>
        <NavItem
          title="Segment"
          isCurrent={currentNavItem === 'segment'}
          onClick={() => setCurrentNavItem('segment')}
        >
          <NavItemIcon>
            <ListsIcon />
          </NavItemIcon>
          <NavItemText>Segment</NavItemText>
        </NavItem>
        <NavItem
          title="Campaigns"
          isCurrent={currentNavItem === 'campaigns'}
          onClick={() => setCurrentNavItem('campaigns')}
        >
          <NavItemIcon>
            <EmailIcon />
          </NavItemIcon>
          <NavItemText>Campaigns</NavItemText>
        </NavItem>
        <NavItem
          title="Settings"
          isCurrent={currentNavItem === 'settings'}
          onClick={() => setCurrentNavItem('settings')}
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
      {showSubnav && (
        <SubNav aria-label="Subnav">
          <SubNavItem
            isCurrent={currentSubnavItem === 'item-1'}
            onClick={() => setCurrentSubnavItem('item-1')}
          >
            <SubNavItemText>Subnav 1</SubNavItemText>
          </SubNavItem>
          <SubNavItem
            isCurrent={currentSubnavItem === 'item-2'}
            onClick={() => setCurrentSubnavItem('item-2')}
          >
            <SubNavItemText>Subnav 2</SubNavItemText>
          </SubNavItem>
          <CollapsibleSubNavItem
            header="Collapsible Item"
            isExpanded={showCollapsed}
            onChange={setShowCollapsed}
          >
            {subNavItems.map(item => (
              <SubNavItem
                key={item}
                isCurrent={currentSubnavItem === `collapsed-item-${item}`}
                onClick={() => setCurrentSubnavItem(`collapsed-item-${item}`)}
              >
                <SubNavItemText>Item {item + 1}</SubNavItemText>
              </SubNavItem>
            ))}
          </CollapsibleSubNavItem>
          <SubNavItem
            isCurrent={currentSubnavItem === 'item-3'}
            onClick={() => setCurrentSubnavItem('item-3')}
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
        <Content id="main-content">
          {showSidebar && (
            <Sidebar style={{ padding: 28 }}>
              <h2>Example Sidebar</h2>
              <p>
                Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
                purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale
                radicchio turnip chicory salsify pea sprouts fava bean.
              </p>
              <p>
                Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens
                tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.
              </p>
            </Sidebar>
          )}
          <Main style={{ padding: 28 }}>
            <h2>Main Content</h2>
            <p>
              Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
              purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale
              radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock
              yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish
              artichoke wattle seed endive groundnut broccoli arugula.
            </p>
            <p>
              Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki
              bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado
              quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut
              corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper
              radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring
              onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini
              gourd winter purslane silver beet rock melon radish asparagus spinach.
            </p>
            <p>
              Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
              gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu
              beetroot horseradish carrot squash brussels sprout chard.
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
  );
};

Default.args = {
  product: 'guide',
  isExpanded: false,
  showSubnav: true,
  showSidebar: false,
  hueColor: undefined,
  itemCount: 3
};

Default.argTypes = {
  product: {
    name: 'Product',
    control: {
      type: 'select',
      options: ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk']
    }
  },
  isExpanded: {
    name: 'Expanded'
  },
  showSubnav: {
    name: 'Show subnav'
  },
  showSidebar: {
    name: 'Show sidebar'
  },
  hueColor: { name: 'Hue', control: 'color' },
  itemCount: {
    name: 'Item count',
    control: { type: 'range', min: 1, max: 8, step: 1 }
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
  Due to the wide variety of routing strategies within React,
  the \`Chrome\` component doesn't provide any opinionated
  navigation solutions. The \`NavItem\` and \`SubNavItem\`
  components are \`button\` elements that accept all native
  attributes and events. If you are using a routing library
  like [react-router](https://github.com/ReactTraining/react-router),
  you can programmatically trigger navigation with the \`onClick\`
  events.

  #### Custom Nav Colors

  By default, the \`Nav\` and \`SubNav\` components are styled with a Zendesk
  branded palette. For white-labeling purposes a custom \`hue\` prop may be
  applied. The \`Chrome\` component uses the
  [PolishedJS readableColor()](https://polished.js.org/docs/#readablecolor)
  utility to modify colors to maintain accessible contrast levels.
`
    }
  }
};
