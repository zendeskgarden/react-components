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
  Content,
  Footer,
  Header,
  IChromeProps,
  INavItemProps,
  Main,
  Nav,
  SkipNav,
  SubNav
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
  onNavClick: ({ hasSubNav }: Record<string, boolean | undefined>) => void;
  hasLogo: boolean;
  hasBrandmark: boolean;
  hasSubNav: boolean;
  subNavItems: ISubNavItem[];
  subNavMaxWidth: number;
  hasHeader: boolean;
  headerItems: IHeaderItem[];
  hasFooter: boolean;
  footerItems: IFooterItem[];
  isExpanded: boolean;
  isWrapped: boolean;
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
  hasFooter,
  footerItems,
  isExpanded,
  isWrapped,
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
            <Nav.Item hasLogo product={product}>
              <Nav.ItemIcon>{product ? PRODUCT_ICONS[product] : <ProductIcon />}</Nav.ItemIcon>
              <Nav.ItemText>Nav Logo</Nav.ItemText>
            </Nav.Item>
          )}
          <Nav.List>
            {navItems.map((item, index) => (
              <Nav.Item
                key={index}
                isCurrent={currentNav === index}
                onClick={() => {
                  setCurrentNav(index);
                  setCurrentSubNav(0);
                  onNavClick({ hasSubNav: item.hasSubNav });
                }}
              >
                <Nav.ItemIcon>{NAV_ICONS[index] || <NavIcon />}</Nav.ItemIcon>
                <Nav.ItemText isWrapped={isWrapped}>{item.text}</Nav.ItemText>
              </Nav.Item>
            ))}
          </Nav.List>
          {hasBrandmark && (
            <Nav.Item hasBrandmark>
              <Nav.ItemIcon>
                <BrandmarkIcon />
              </Nav.ItemIcon>
              <Nav.ItemText>Brandmark</Nav.ItemText>
            </Nav.Item>
          )}
        </Nav>
      )}
      {hasSubNav && (
        <SubNav style={{ maxWidth: subNavMaxWidth }}>
          {subNavItems.map((item, index) =>
            item.items ? (
              <SubNav.CollapsibleItem key={index} header={item.text}>
                {item.items.map((subItem, subIndex) => (
                  <SubNav.Item
                    key={subIndex}
                    isCurrent={currentSubNav === parseFloat(`${index}.${subIndex}`)}
                    onClick={() => setCurrentSubNav(parseFloat(`${index}.${subIndex}`))}
                  >
                    <SubNav.ItemText isWrapped={isWrapped}>{subItem}</SubNav.ItemText>
                  </SubNav.Item>
                ))}
              </SubNav.CollapsibleItem>
            ) : (
              <SubNav.Item
                key={index}
                isCurrent={currentSubNav === index}
                onClick={() => setCurrentSubNav(index)}
              >
                <SubNav.ItemText isWrapped={isWrapped}>{item.text}</SubNav.ItemText>
              </SubNav.Item>
            )
          )}
        </SubNav>
      )}
      <Body>
        {hasHeader && (
          <Header isStandalone={!(hasNav || hasSubNav)}>
            {hasLogo && (
              <Header.Item hasLogo product={product}>
                <Header.ItemIcon>
                  <SupportIcon />
                </Header.ItemIcon>
                <Header.ItemText>Header Logo</Header.ItemText>
              </Header.Item>
            )}
            {headerItems.map((item, index) =>
              item.isWrapper ? (
                <Header.ItemWrapper
                  key={index}
                  maxX={item.maxX}
                  maxY={item.maxY}
                  isRound={item.isRound}
                >
                  {item.hasIcon && (
                    <Header.ItemIcon>
                      {HEADER_ICONS[HEADER_ICONS.length - headerItems.length + index] || (
                        <HeaderIcon />
                      )}
                    </Header.ItemIcon>
                  )}
                  <Header.ItemText isClipped={item.isClipped}>{item.text}</Header.ItemText>
                </Header.ItemWrapper>
              ) : (
                <Header.Item key={index} maxX={item.maxX} maxY={item.maxY} isRound={item.isRound}>
                  {item.hasIcon && (
                    <Header.ItemIcon>
                      {HEADER_ICONS[HEADER_ICONS.length - headerItems.length + index] || (
                        <HeaderIcon />
                      )}
                    </Header.ItemIcon>
                  )}
                  <Header.ItemText isClipped={item.isClipped}>{item.text}</Header.ItemText>
                </Header.Item>
              )
            )}
          </Header>
        )}
        <Content id="main-content">
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
                <Footer.Item key={index}>
                  <Button isBasic={type === 'basic'} isPrimary={type === 'primary'}>
                    {text}
                  </Button>
                </Footer.Item>
              ))}
          </Footer>
        )}
      </Body>
    </Chrome>
  );
};
