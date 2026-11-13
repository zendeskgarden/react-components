/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Skeleton } from '../../src/index';
import { TYPE_SCALE_OPTIONS } from './stories/data';
import { SkeletonStory } from './stories/SkeletonStory';

export default {
  title: 'Components/Loaders/Skeleton',
  component: Skeleton
};

export const Example: StoryObj<typeof SkeletonStory> = {
  render: args => <SkeletonStory {...args} />,
  name: 'Skeleton',
  args: { count: 1 },
  argTypes: {
    backgroundColor: {
      control: 'color',
      table: { category: 'Story' }
    },
    count: {
      control: {
        type: 'range',
        min: 1,
        max: 20
      },
      table: { category: 'Story' }
    },
    typescale: {
      control: 'radio',
      options: TYPE_SCALE_OPTIONS,
      table: { category: 'Story' }
    }
  }
};
