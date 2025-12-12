import { useArgs } from '@storybook/client-api';
import { Tiles } from '@zendeskgarden/react-forms';
import { TilesStory } from './stories/TilesStory';
import { TILES } from './stories/data';
import README from '../README.md';

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
    tiles: {
      name: 'children'
    },

    hasDescription: {
      name: 'Tiles.Description',

      table: {
        category: 'Story'
      }
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

export const Uncontrolled = {
  render: args => <TilesStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    value: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        value: event.target.value
      });

    return <TilesStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: TILES[0].value
  }
};
