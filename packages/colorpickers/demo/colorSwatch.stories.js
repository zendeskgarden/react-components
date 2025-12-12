import { useArgs } from '@storybook/client-api';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';
import { COLOR_SWATCH_COLORS as COLORS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Colorpickers/ColorSwatch',
  component: ColorSwatch,

  args: {
    colors: COLORS,
    name: 'name'
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=4102%3A31570'
    }
  }
};

export const Uncontrolled = {
  render: args => <ColorSwatch {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    selectedColIndex: {
      control: false
    },

    selectedRowIndex: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleSelect = (selectedRowIndex, selectedColIndex) =>
      updateArgs({
        selectedRowIndex,
        selectedColIndex
      });

    return <ColorSwatch {...args} onSelect={handleSelect} />;
  },

  name: 'Controlled',

  args: {
    selectedRowIndex: 0,
    selectedColIndex: 5
  },

  argTypes: {
    defaultSelectedColIndex: {
      control: false
    },

    defaultSelectedRowIndex: {
      control: false
    },

    selectedColIndex: {
      control: {
        type: 'number'
      }
    },

    selectedRowIndex: {
      control: {
        type: 'number'
      }
    }
  }
};
