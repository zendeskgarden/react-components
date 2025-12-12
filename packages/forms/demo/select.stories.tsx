import { useArgs } from '@storybook/client-api';
import { Select } from '@zendeskgarden/react-forms';
import { SelectStory } from './stories/SelectStory';
import { SELECT_OPTIONS as OPTIONS } from './stories/data';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Select',
  component: Select,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    options: OPTIONS,
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `Select` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },

    options: {
      name: 'children'
    },

    disabled: {
      control: 'boolean'
    }
  }
};

export const Uncontrolled = {
  render: args => <SelectStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        value: event.target.value
      });

    return <SelectStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: OPTIONS.length - 1
  }
};
