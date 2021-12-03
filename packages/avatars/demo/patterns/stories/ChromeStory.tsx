/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { Chrome, Body, Header, HeaderItem, HeaderItemIcon } from '@zendeskgarden/react-chrome';
import { Avatar } from '@zendeskgarden/react-avatars';

export const ChromeStory: Story = () => (
  <Chrome isFluid style={{ height: 'auto' }}>
    <Body>
      <Header>
        <HeaderItem aria-label="Products">
          <HeaderItemIcon>
            <Icon />
          </HeaderItemIcon>
        </HeaderItem>
        <HeaderItem isRound aria-label="User profile">
          <Avatar size="extrasmall">
            <img alt="Example User" src="images/avatars/chrome.png" />
          </Avatar>
        </HeaderItem>
      </Header>
    </Body>
  </Chrome>
);
