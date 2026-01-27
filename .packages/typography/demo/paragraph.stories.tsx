/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Paragraph } from '@zendeskgarden/react-typography';
import React from 'react';

import { PARAGRAPH_CHILDREN as CHILDREN } from './stories/data';
import { ParagraphStory } from './stories/ParagraphStory';

export default {
  title: 'Packages/Typography/Paragraph',
  component: Paragraph
};

export const Example: StoryObj<typeof ParagraphStory> = {
  render: args => <ParagraphStory {...args} />,
  name: 'Paragraph',
  args: { children: CHILDREN }
};
