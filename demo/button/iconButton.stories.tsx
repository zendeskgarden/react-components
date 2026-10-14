/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import Icon from 'svg-icons-legacy/src/16/smiley-stroke.svg';

import { IconButton } from '../../src/index';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton
};

export const Example: StoryObj<typeof IconButton> = {
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
  argTypes: { disabled: { control: 'boolean' } },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A11'
    }
  }
};
