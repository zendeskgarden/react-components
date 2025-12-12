import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ColorPickerDialog } from '@zendeskgarden/react-colorpickers';
import { ColorPickerDialogStory } from './stories/ColorPickerDialogStory';
import README from '../README.md';

export default {
  title: 'Packages/Colorpickers/ColorPickerDialog',
  component: ColorPickerDialog,

  args: {
    buttonProps: {
      'aria-label': 'Label'
    },

    'aria-label': 'Title',
    isAnimated: true
  },

  argTypes: {
    focusInset: {
      control: 'boolean'
    },

    hasArrow: {
      control: 'boolean'
    },

    isOpaque: {
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
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A1097'
    }
  }
};

export const Uncontrolled = {
  render: args => <ColorPickerDialogStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    color: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleDialogChange = ({ isOpen }) => {
      action('onDialogChange')({
        isOpen
      });

      updateArgs({
        isOpen
      });
    };

    const handleChange = color => {
      action('onChange')(color);

      updateArgs({
        color
      });
    };

    return (
      <ColorPickerDialogStory
        {...args}
        onDialogChange={handleDialogChange}
        onChange={handleChange}
      />
    );
  },

  name: 'Controlled',

  args: {
    color: PALETTE.blue[600],
    isOpen: false
  },

  argTypes: {
    defaultColor: {
      control: false
    }
  }
};
