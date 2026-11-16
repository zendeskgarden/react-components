/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Blockquote } from '../../src/index';
import { BlockquoteStory } from './stories/BlockquoteStory';
import { BLOCKQUOTE_CHILDREN as CHILDREN } from './stories/data';

export default {
  title: 'Components/Typography/Blockquote',
  component: Blockquote
};

export const Example: StoryObj<typeof BlockquoteStory> = {
  render: args => <BlockquoteStory {...args} />,
  name: 'Blockquote',
  args: { children: CHILDREN }
};
