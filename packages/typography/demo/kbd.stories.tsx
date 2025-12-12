/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Kbd } from '@zendeskgarden/react-typography';
import { KbdStory } from './stories/KbdStory';

export default {
  title: 'Packages/Typography/Kbd',
  component: Kbd
};

export const Default: StoryObj<typeof KbdStory> = {
  render: args => <KbdStory {...args} />,
  name: 'Kbd',
  args: {
    children: '⇧ ⌃ ⌥ /',
    size: 'inherit'
  }
};
