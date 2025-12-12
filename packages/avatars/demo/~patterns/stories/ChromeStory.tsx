/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { Chrome, Body, Header } from '@zendeskgarden/react-chrome';
import { Avatar, IAvatarProps } from '@zendeskgarden/react-avatars';

interface IArgs extends Omit<IAvatarProps, 'badge'> {
  badge?: boolean;
}

export const ChromeStory: StoryFn<IArgs> = ({ badge, ...args }) => (
  <Chrome isFluid style={{ height: 'auto' }}>
    <Body>
      <Header>
        <Header.Item aria-label="Products">
          <Header.ItemIcon>
            <Icon />
          </Header.ItemIcon>
        </Header.Item>
        <Header.Item isRound aria-label="User profile">
          <Avatar {...args} badge={badge ? 1 : undefined} size="extrasmall">
            <img alt="Example User" src="images/avatars/chrome.png" />
          </Avatar>
        </Header.Item>
      </Header>
    </Body>
  </Chrome>
);
