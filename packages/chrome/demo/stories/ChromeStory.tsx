/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler, ReactElement, useState } from 'react';
import { Story } from '@storybook/react';
import ChatIcon from '@zendeskgarden/svg-icons/src/26/relationshape-chat.svg';
import ConnectIcon from '@zendeskgarden/svg-icons/src/26/relationshape-connect.svg';
import ExploreIcon from '@zendeskgarden/svg-icons/src/26/relationshape-explore.svg';
import GuideIcon from '@zendeskgarden/svg-icons/src/26/relationshape-guide.svg';
import MessageIcon from '@zendeskgarden/svg-icons/src/26/relationshape-message.svg';
import SupportIcon from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
import TalkIcon from '@zendeskgarden/svg-icons/src/26/relationshape-talk.svg';
import ProductIcon from '@zendeskgarden/svg-icons/src/26/garden.svg';
import BrandmarkIcon from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import NavIcon from '@zendeskgarden/svg-icons/src/26/app.svg';
import NavIcon1 from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import NavIcon2 from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import NavIcon3 from '@zendeskgarden/svg-icons/src/26/customer-lists-fill.svg';
import NavIcon4 from '@zendeskgarden/svg-icons/src/26/chat.svg';
import NavIcon5 from '@zendeskgarden/svg-icons/src/26/dashboard.svg';
import NavIcon6 from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import HeaderIcon from '@zendeskgarden/svg-icons/src/16/box-3d-stroke.svg';
import HeaderIcon1 from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import HeaderIcon2 from '@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg';
import HeaderIcon3 from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import HeaderIcon4 from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {
  Body,
  Chrome,
  CollapsibleSubNavItem,
  Content,
  Footer,
  FooterItem,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  HeaderItemWrapper,
  IChromeProps,
  INavItemProps,
  Main,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Sidebar,
  SkipNav,
  SubNav,
  SubNavItem,
  SubNavItemText
} from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import { IFooterItem, IHeaderItem, INavItem, ISubNavItem } from './types';
import { SheetComponent } from './SheetStory';
import { Product } from '../../src/types';

const HEADER_ICONS = [
  <HeaderIcon1 key={1} />,
  <HeaderIcon2 key={2} />,
  <HeaderIcon3 key={3} />,
  <HeaderIcon4 key={4} />
];

const NAV_ICONS = [
  <NavIcon1 key={1} />,
  <NavIcon2 key={2} />,
  <NavIcon3 key={3} />,
  <NavIcon4 key={4} />,
  <NavIcon5 key={5} />,
  <NavIcon6 key={6} />
];

const PRODUCT_ICONS: Record<Product, ReactElement<SVGElement>> = {
  chat: <ChatIcon />,
  connect: <ConnectIcon />,
  explore: <ExploreIcon />,
  guide: <GuideIcon />,
  message: <MessageIcon />,
  support: <SupportIcon />,
  talk: <TalkIcon />
};

interface IArgs extends IChromeProps {
  product: INavItemProps['product'];
  skipNav: string;
  hasNav: boolean;
  navItems: INavItem[];
  onNavClick: ({ hasSubNav, hasSidebar }: Record<string, boolean | undefined>) => void;
  hasLogo: boolean;
  hasBrandmark: boolean;
  hasSubNav: boolean;
  subNavItems: ISubNavItem[];
  subNavMaxWidth: number;
  hasHeader: boolean;
  headerItems: IHeaderItem[];
  hasSidebar: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  isExpanded: boolean;
  isWrapped: boolean;
  sidebar: string;
  main: string;
  isSheetOpen: boolean;
  isSheetCompact: boolean;
  sheetBody: string;
  sheetTitle: string;
  sheetDescription: string;
  onSheetClick: MouseEventHandler<HTMLButtonElement>;
}

export const ChromeStory: Story<IArgs> = ({
  product,
  skipNav,
  hasNav,
  navItems,
  onNavClick,
  hasLogo,
  hasBrandmark,
  hasSubNav,
  subNavItems,
  subNavMaxWidth,
  hasHeader,
  headerItems,
  hasSidebar,
  hasFooter,
  footerItems,
  isExpanded,
  isWrapped,
  sidebar,
  main,
  isSheetOpen,
  isSheetCompact,
  sheetBody,
  sheetTitle,
  sheetDescription,
  onSheetClick,
  ...args
}) => {
  const [currentNav, setCurrentNav] = useState(0);
  const [currentSubNav, setCurrentSubNav] = useState(0);

  return (
    <Chrome {...args} style={{ margin: `-${DEFAULT_THEME.space.xl}` }}>
      <SkipNav targetId="main-content">{skipNav}</SkipNav>
      {hasNav && (
        <Nav isExpanded={isExpanded} aria-label="Nav">
          {hasLogo && (
            <NavItem hasLogo product={product}>
              <NavItemIcon>{product ? PRODUCT_ICONS[product] : <ProductIcon />}</NavItemIcon>
              <NavItemText>Nav Logo</NavItemText>
            </NavItem>
          )}
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              isCurrent={currentNav === index}
              onClick={() => {
                setCurrentNav(index);
                setCurrentSubNav(0);
                onNavClick({ hasSubNav: item.hasSubNav, hasSidebar: item.hasSidebar });
              }}
            >
              <NavItemIcon>{NAV_ICONS[index] || <NavIcon />}</NavItemIcon>
              <NavItemText isWrapped={isWrapped}>{item.text}</NavItemText>
            </NavItem>
          ))}
          {hasBrandmark && (
            <NavItem hasBrandmark>
              <NavItemIcon>
                <BrandmarkIcon />
              </NavItemIcon>
              <NavItemText>Brandmark</NavItemText>
            </NavItem>
          )}
        </Nav>
      )}
      {hasSubNav && (
        <SubNav style={{ maxWidth: subNavMaxWidth }}>
          {subNavItems.map((item, index) =>
            item.items ? (
              <CollapsibleSubNavItem key={index} header={item.text}>
                {item.items.map((subItem, subIndex) => (
                  <SubNavItem
                    key={subIndex}
                    isCurrent={currentSubNav === parseFloat(`${index}.${subIndex}`)}
                    onClick={() => setCurrentSubNav(parseFloat(`${index}.${subIndex}`))}
                  >
                    <SubNavItemText isWrapped={isWrapped}>{subItem}</SubNavItemText>
                  </SubNavItem>
                ))}
              </CollapsibleSubNavItem>
            ) : (
              <SubNavItem
                key={index}
                isCurrent={currentSubNav === index}
                onClick={() => setCurrentSubNav(index)}
              >
                <SubNavItemText isWrapped={isWrapped}>{item.text}</SubNavItemText>
              </SubNavItem>
            )
          )}
        </SubNav>
      )}
      <Body hasFooter={hasFooter}>
        {hasHeader && (
          <Header isStandalone={!(hasNav || hasSubNav)}>
            {hasLogo && (
              <HeaderItem hasLogo product={product}>
                <HeaderItemIcon>
                  <SupportIcon />
                </HeaderItemIcon>
                <HeaderItemText>Header Logo</HeaderItemText>
              </HeaderItem>
            )}
            {headerItems.map((item, index) =>
              item.isWrapper ? (
                <HeaderItemWrapper
                  key={index}
                  maxX={item.maxX}
                  maxY={item.maxY}
                  isRound={item.isRound}
                >
                  {item.hasIcon && (
                    <HeaderItemIcon>
                      {HEADER_ICONS[HEADER_ICONS.length - headerItems.length + index] || (
                        <HeaderIcon />
                      )}
                    </HeaderItemIcon>
                  )}
                  <HeaderItemText isClipped={item.isClipped}>{item.text}</HeaderItemText>
                </HeaderItemWrapper>
              ) : (
                <HeaderItem key={index} maxX={item.maxX} maxY={item.maxY} isRound={item.isRound}>
                  {item.hasIcon && (
                    <HeaderItemIcon>
                      {HEADER_ICONS[HEADER_ICONS.length - headerItems.length + index] || (
                        <HeaderIcon />
                      )}
                    </HeaderItemIcon>
                  )}
                  <HeaderItemText isClipped={item.isClipped}>{item.text}</HeaderItemText>
                </HeaderItem>
              )
            )}
          </Header>
        )}
        <Content id="main-content">
          {hasSidebar && <Sidebar>{sidebar}</Sidebar>}
          <Main>{main}</Main>
          <SheetComponent
            hasHeader
            hasBody
            hasFooter
            hasClose
            isOpen={isSheetOpen}
            isCompact={isSheetCompact}
            title={sheetTitle}
            description={sheetDescription}
            body={sheetBody}
            footerItems={[{ text: 'Close', type: hasFooter ? undefined : 'primary' }]}
            onClick={onSheetClick}
            {...args}
          />
        </Content>
        {hasFooter && (
          <Footer>
            {footerItems &&
              footerItems.map(({ text, type }, index) => (
                <FooterItem key={index}>
                  <Button isBasic={type === 'basic'} isPrimary={type === 'primary'}>
                    {text}
                  </Button>
                </FooterItem>
              ))}
          </Footer>
        )}
      </Body>
    </Chrome>
  );
};
