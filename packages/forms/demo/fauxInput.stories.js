import { FauxInput } from '@zendeskgarden/react-forms';
import { FauxInputStory } from './stories/FauxInputStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/FauxInput',
  component: FauxInput,

  subcomponents: {
    'FauxInput.EndIcon': FauxInput.EndIcon,
    'FauxInput.StartIcon': FauxInput.StartIcon,
    ...fieldSubcomponents
  }
};

export const FauxInput = {
  render: args => <FauxInputStory {...args} />,
  name: 'FauxInput',

  args: {
    children: '',
    hasEndIcon: false,
    hasStartIcon: false,
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `FauxInput` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },

    isEndIconRotated: {
      name: 'isRotated',
      control: 'boolean',

      table: {
        category: 'FauxInput.EndIcon'
      }
    },

    isStartIconRotated: {
      name: 'isRotated',
      control: 'boolean',

      table: {
        category: 'FauxInput.StartIcon'
      }
    },

    hasStartIcon: {
      name: 'FauxInput.StartIcon',

      table: {
        category: 'Story'
      }
    },

    hasEndIcon: {
      name: 'FauxInput.EndIcon',

      table: {
        category: 'Story'
      }
    },

    placeholder: {
      control: 'text'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20266'
    }
  }
};
