import { Fieldset } from '@zendeskgarden/react-forms';
import { FieldsetStory } from './stories/FieldsetStory';
import { FIELDSET_FIELDS as FIELDS } from './stories/data';
import {
  hintArgs,
  hintArgTypes,
  messageArgs,
  messageArgTypes,
  fieldSubcomponents
} from './stories/common';
import README from '../README.md';

export default {
  title: 'Packages/Forms/Fieldset',
  component: Fieldset,

  subcomponents: {
    'Fieldset.Legend': Fieldset.Legend,
    ...fieldSubcomponents
  },

  args: {
    legend: 'Legend',
    fields: FIELDS,
    ...hintArgs,
    ...messageArgs
  },

  argTypes: {
    fields: {
      name: 'children'
    },

    legend: {
      name: 'children',

      table: {
        category: 'Legend'
      }
    },

    ...hintArgTypes,
    ...messageArgTypes
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1083%3A29244'
    }
  }
};

export const Checkbox = {
  render: args => <FieldsetStory type="checkbox" {...args} />,
  name: 'Checkbox'
};

export const Radio = {
  render: args => <FieldsetStory type="radio" {...args} />,
  name: 'Radio'
};

export const Toggle = {
  render: args => <FieldsetStory type="toggle" {...args} />,
  name: 'Toggle'
};
