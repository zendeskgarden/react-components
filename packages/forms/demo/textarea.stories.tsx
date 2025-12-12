import { useArgs } from '@storybook/client-api';
import { Textarea } from '@zendeskgarden/react-forms';
import { TextareaStory } from './stories/TextareaStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Textarea',
  component: Textarea,

  subcomponents: {
    ...fieldSubcomponents
  },

  args: {
    ...commonArgs
  },

  /* ensures the `validation` story arg for the `Textarea` component is not overriden */
  argTypes: {
    ...{
      ...commonArgTypes,
      validation: {}
    },

    disabled: {
      control: 'boolean'
    },

    readOnly: {
      control: 'boolean'
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

export const Uncontrolled = {
  render: args => <TextareaStory {...args} />,
  name: 'Uncontrolled',

  args: {
    placeholder: 'Placeholder'
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = event =>
      updateArgs({
        value: event.target.value
      });

    return <TextareaStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    value: 'Value'
  }
};
