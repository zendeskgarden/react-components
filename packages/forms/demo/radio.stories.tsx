import { useArgs } from '@storybook/client-api';
import { Radio } from '@zendeskgarden/react-forms';
import { RadioStory } from './stories/RadioStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Radio',
  component: Radio,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    ...commonArgs,
    hasHint: false
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    ...commonArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20262'
    }
  }
};

export const Uncontrolled = {
  render: args => <RadioStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        checked: true
      });

    return <RadioStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    checked: false
  }
};
