/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import Icon from '@zendeskgarden/svg-icons/src/16/smiley-stroke.svg';
import { IconButton } from '@zendeskgarden/react-buttons';

export default {
  title: 'Packages/Buttons/IconButton',
  component: IconButton
};

export const Default: StoryObj<typeof IconButton> = {
  render: args => (
    <IconButton {...args}>
      <Icon />
    </IconButton>
  ),

  name: 'IconButton',

  args: {
    'aria-label': 'Label',
    isBasic: true,
    isPill: true
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A11'
    }
  }
};
