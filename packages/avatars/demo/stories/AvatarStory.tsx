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
import Clock from '@zendeskgarden/svg-icons/src/12/clock-stroke.svg';
import ArrowLeft from '@zendeskgarden/svg-icons/src/12/arrow-left-stroke.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar, IAvatarProps } from '@zendeskgarden/react-avatars';

import { TYPE } from './types';
import { BADGE_TYPE } from './data';

interface IArgs extends IAvatarProps {
  type: TYPE;
  badgeType: typeof BADGE_TYPE[number];
  badgeChildren: IAvatarProps['badge'];
  badgeForegroundColor: IAvatarProps['foregroundColor'];
  badgeBackgroundColor: IAvatarProps['backgroundColor'];
  badgeSurfaceColor: IAvatarProps['surfaceColor'];
}

export const AvatarStory: Story<IArgs> = ({
  children,
  type,
  badge,
  badgeType,
  badgeChildren,
  ...args
}) => {
  const child = {
    icon: args.isSystem ? <IconSystem /> : <IconUser />,
    image: <img alt="" src={`images/avatars/${args.isSystem ? 'system' : 'user'}.png`} />,
    text: <Avatar.Text>{children || (args.isSystem ? 'ZD' : 'G')}</Avatar.Text>
  }[type || 'image'];

  const currentBadge = {
    icon: <Clock />,
    arrow: <ArrowLeft />,
    children: badge || badgeChildren,
    none: null
  }[badgeType || 'children'];

  return (
    <Avatar
      {...args}
      badge={currentBadge}
      backgroundColor={args.backgroundColor || (type === 'image' ? undefined : PALETTE.kale[800])}
    >
      {child}
    </Avatar>
  );
};
