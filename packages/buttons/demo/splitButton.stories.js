import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { SplitButtonStory } from './stories/SplitButtonStory';
import README from '../README.md';

export default {
  title: 'Packages/Buttons/SplitButton',
  component: SplitButton,

  subcomponents: {
    Button,
    ChevronButton
  }
};

export const SplitButton = {
  render: args => <SplitButtonStory {...args} />,
  name: 'SplitButton',

  args: {
    'aria-label': 'Label',
    children: 'Text'
  },

  argTypes: {
    children: {
      table: {
        category: 'Button'
      }
    },

    disabled: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isBasic: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isDanger: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isNeutral: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isPill: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isPrimary: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],

      table: {
        category: 'Button'
      }
    },

    'aria-label': {
      table: {
        category: 'ChevronButton'
      }
    },

    isRotated: {
      control: 'boolean',

      table: {
        category: 'ChevronButton'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1496%3A28676'
    }
  }
};
