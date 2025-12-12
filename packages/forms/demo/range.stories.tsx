import { useArgs } from '@storybook/client-api';
import { Range } from '@zendeskgarden/react-forms';
import { RangeStory } from './stories/RangeStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Range',
  component: Range,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    ...commonArgs
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    min: {
      control: 'number'
    },

    max: {
      control: 'number'
    },

    step: {
      control: 'number'
    },

    ...commonArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20263'
    }
  }
};

export const Uncontrolled = {
  render: args => <RangeStory {...args} />,
  name: 'Uncontrolled'
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        value: event.target.value
      });

    return <RangeStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: '0'
  }
};
