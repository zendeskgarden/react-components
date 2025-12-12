/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { Avatar } from '@zendeskgarden/react-avatars';
import { AvatarStory } from './stories/AvatarStory';
import { AVATAR_TYPE as TYPE } from './stories/data';

export default {
  title: 'Packages/Avatars/Avatar',
  component: Avatar,

  subcomponents: {
    'Avatar.Text': Avatar.Text
  }
};

export const Example: StoryObj<typeof AvatarStory> = {
  render: args => <AvatarStory {...args} />,
  name: 'Avatar',
  args: {
    type: TYPE[1]
  },

  argTypes: {
    'aria-hidden': {
      control: 'boolean'
    },

    backgroundColor: {
      control: 'color'
    },

    badge: {
      control: 'text'
    },

    foregroundColor: {
      control: 'color'
    },

    children: {
      control: 'text',

      table: {
        category: 'Avatar.Text'
      }
    },

    type: {
      control: 'radio',
      options: TYPE,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A110'
    }
  }
};
