import { useArgs } from '@storybook/client-api';
import { Checkbox } from '@zendeskgarden/react-forms';
import { CheckboxStory } from './stories/CheckboxStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Checkbox',
  component: Checkbox,

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
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20261'
    }
  }
};

export const Uncontrolled = {
  render: args => <CheckboxStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        checked: !args.checked
      });

    return <CheckboxStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    checked: false
  }
};
