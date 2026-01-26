/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Tiles } from '@zendeskgarden/react-forms';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

import { TILES } from './stories/data';
import { TilesStory } from './stories/TilesStory';
type Story = StoryObj<typeof TilesStory>;

export default {
  title: 'Packages/Forms/Tiles',
  component: Tiles,
  subcomponents: {
    'Tiles.Description': Tiles.Description,
    'Tiles.Icon': Tiles.Icon,
    'Tiles.Label': Tiles.Label,
    'Tiles.Tile': Tiles.Tile
  },
  args: {
    tiles: TILES,
    isCentered: true,
    name: 'name',
    hasDescription: true
  },
  argTypes: {
    tiles: { name: 'children' },
    hasDescription: {
      name: 'Tiles.Description',
      table: { category: 'Story' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A37165'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <TilesStory {...args} />,
  argTypes: {
    value: { control: false }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (event: any) => updateArgs({ value: event.target.value });

    return <TilesStory {...args} onChange={handleChange} />;
  },
  args: { value: TILES[0].value }
};
