/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';

import SupportIcon from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
import HelpIcon from '@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg';
import MenuTrayIcon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import {
  Body,
  Chrome,
  Content,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  HeaderItemWrapper,
  Main,
  SkipNav
} from '@zendeskgarden/react-chrome';

interface IStandaloneHeaderStoryProps {
  isStandalone: boolean;
}

export const StandaloneHeader: Story<IStandaloneHeaderStoryProps> = ({ isStandalone }) => {
  return (
    <Chrome isFluid style={{ height: 200 }}>
      <SkipNav linkId="standalone-header">Skip to main content</SkipNav>
      <Body>
        <Header isStandalone={isStandalone}>
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
  );
};

StandaloneHeader.storyName = 'Standalone header';

StandaloneHeader.args = {
  isStandalone: true
};

StandaloneHeader.argTypes = {
  isStandalone: {
    name: 'Standalone'
  }
};
