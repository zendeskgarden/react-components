import React from 'react';
import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { ColorSwatchDialogStory } from './stories/ColorSwatchDialogStory';
import { COLOR_SWATCH_COLORS as COLORS } from './stories/data';
type Story = StoryObj<typeof ColorSwatchDialogStory>;

export default {
  title: 'Packages/Colorpickers/ColorSwatchDialog',
  component: ColorSwatchDialog,

  args: {
    buttonProps: {
      'aria-label': 'Label'
    },

    'aria-label': 'Title',
    colors: COLORS,
    isAnimated: true,
    name: 'name'
  },

  argTypes: {
    focusInset: {
      control: 'boolean'
    },

    hasArrow: {
      control: 'boolean'
    },

    zIndex: {
      control: 'number'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=4102%3A31515'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <ColorSwatchDialogStory {...args} />,
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

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = ({ isOpen }) => {
      action('onDialogChange')({
        isOpen
      });

      updateArgs({
        isOpen
      });
    };

    const handleSelect = (selectedRowIndex, selectedColIndex) => {
      action('onSelect')(selectedRowIndex, selectedColIndex);

      updateArgs({
        selectedRowIndex,
        selectedColIndex
      });
    };

    return (
      <ColorSwatchDialogStory {...args} onDialogChange={handleChange} onSelect={handleSelect} />
    );
  },

  name: 'Controlled',

  args: {
    isOpen: false,
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
