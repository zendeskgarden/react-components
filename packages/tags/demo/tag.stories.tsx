/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Tag } from '@zendeskgarden/react-tags';
import { TagStory } from './stories/TagStory';

export default {
  title: 'Packages/Tags/Tag',
  component: Tag,

  subcomponents: {
    'Tag.Avatar': Tag.Avatar,
    'Tag.Close': Tag.Close
  }
};

export const Example: StoryObj<typeof TagStory> = {
  render: args => <TagStory {...args} />,
  name: 'Tag',
  args: {
    children: 'Tag',
    hasAvatar: false,
    hasClose: false,
    closeAriaLabel: 'Label'
  },

  argTypes: {
    hue: {
      control: 'color'
    },

    hasAvatar: {
      name: 'Tag.Avatar',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Tag.Close',

      table: {
        category: 'Story'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'Tag.Close'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A118'
    }
  }
};
