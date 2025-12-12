/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Blockquote } from '@zendeskgarden/react-typography';
import { BlockquoteStory } from './stories/BlockquoteStory';
import { BLOCKQUOTE_CHILDREN as CHILDREN } from './stories/data';

export default {
  title: 'Packages/Typography/Blockquote',
  component: Blockquote
};

export const Default: StoryObj<typeof BlockquoteStory> = {
  render: (args: any) => <BlockquoteStory {...args} />,
  name: 'Blockquote',
  args: {
    children: CHILDREN
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39345'
    }
  }
};
