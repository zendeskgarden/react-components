/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { Tiles } from '../../src/index';
import { TILES } from './stories/data';
import { TilesStory } from './stories/TilesStory';
type Story = StoryObj<typeof TilesStory>;

export default {
  title: 'Components/Forms/Tiles',
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
    hasDescription: true,
    hasIcon: true
  },
  argTypes: {
    tiles: { name: 'children' },
    hasDescription: {
      name: 'Tiles.Description',
      table: { category: 'Story' }
    },
    hasIcon: {
      name: 'Tiles.Icon',
      table: { category: 'Story' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/design/KC44NTRKbICRYrQGbzALRr?node-id=5262-110529'
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
  args: { value: TILES[0]!.value }
};
