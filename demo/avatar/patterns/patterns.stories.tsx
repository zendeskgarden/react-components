/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Avatar } from '../../../src/index';
import { MenuStory } from './stories/MenuStory';
import { StatusMenuStory } from './stories/StatusMenuStory';

export default {
  title: 'Components/Avatars/Avatar',
  component: Avatar
};

export const Menu: StoryObj<typeof MenuStory> = {
  render: args => <MenuStory {...args} />,
  parameters: {
    controls: { include: ['isCompact'] }
  },
  args: { isCompact: false },
  argTypes: { isCompact: { control: 'boolean' } }
};

export const StatusMenu: StoryObj<typeof StatusMenuStory> = {
  render: args => <StatusMenuStory {...args} />,
  name: 'StatusMenu',
  parameters: {
    controls: { include: ['isCompact'] }
  },
  args: {
    isCompact: false,
    type: 'available'
  },
  argTypes: { isCompact: { control: 'boolean' } }
};
