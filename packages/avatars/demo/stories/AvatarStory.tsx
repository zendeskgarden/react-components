/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import IconUser from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import IconSystem from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar, IAvatarProps } from '@zendeskgarden/react-avatars';

import { TYPE } from './types';

interface IArgs extends IAvatarProps {
  type: TYPE;
}

export const AvatarStory: Story<IArgs> = ({ children, type, ...args }) => (
  <Avatar
    {...args}
    backgroundColor={args.backgroundColor || (type === 'image' ? undefined : PALETTE.kale[800])}
  >
    {
      {
        icon: args.isSystem ? <IconSystem /> : <IconUser />,
        image: <img alt="user" src={`images/avatars/${args.isSystem ? 'system' : 'user'}.png`} />,
        text: <Avatar.Text>{children || (args.isSystem ? 'ZD' : 'G')}</Avatar.Text>
      }[type || 'image']
    }
  </Avatar>
);
