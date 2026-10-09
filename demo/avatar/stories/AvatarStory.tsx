/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import IconUser from 'svg-icons-legacy/src/16/user-solo-stroke.svg';
import IconSystem from 'svg-icons-legacy/src/26/zendesk.svg';

import { Avatar, IAvatarProps } from '../../../src/index';
import { TYPE } from './types';

interface IArgs extends IAvatarProps {
  type: TYPE;
}

export const AvatarStory: StoryFn<IArgs> = ({
  children,
  type,
  backgroundColor,
  foregroundColor,
  ...args
}) => (
  <Avatar
    {...args}
    backgroundColor={backgroundColor || (type === 'image' ? undefined : 'background.emphasis')}
    foregroundColor={foregroundColor || (type === 'image' ? undefined : 'foreground.onEmphasis')}
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
