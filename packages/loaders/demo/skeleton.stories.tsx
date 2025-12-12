/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-webpack5';
import { Skeleton } from '@zendeskgarden/react-loaders';
import { SkeletonStory } from './stories/SkeletonStory';
import { TYPE_SCALE_OPTIONS } from './stories/data';

export default {
  title: 'Packages/Loaders/Skeleton',
  component: Skeleton
};

export const Example: StoryObj<typeof SkeletonStory> = {
  render: args => <SkeletonStory {...args} />,
  name: 'Skeleton',
  args: {
    count: 1
  },

  argTypes: {
    backgroundColor: {
      control: 'color',

      table: {
        category: 'Story'
      }
    },

    count: {
      control: {
        type: 'range',
        min: 1,
        max: 20
      },

      table: {
        category: 'Story'
      }
    },

    typescale: {
      control: 'radio',
      options: TYPE_SCALE_OPTIONS,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1502%3A141'
    }
  }
};
