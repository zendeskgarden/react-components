/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { Anchor } from '@zendeskgarden/react-buttons';

export default {
  title: 'Packages/Buttons/Anchor',
  component: Anchor
};

export const Example: StoryObj<typeof Anchor> = {
  render: args => <Anchor href="#" {...args} />,
  args: {
    children: 'Text',
    isUnderlined: true
  },
  name: 'Anchor',
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A0'
    }
  }
};
