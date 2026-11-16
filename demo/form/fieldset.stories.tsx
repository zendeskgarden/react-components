/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { Fieldset } from '../../src/index';
import {
  hintArgs,
  hintArgTypes,
  messageArgs,
  messageArgTypes,
  fieldSubcomponents
} from './stories/common';
import { FIELDSET_FIELDS as FIELDS } from './stories/data';
import { FieldsetStory } from './stories/FieldsetStory';
type Story = StoryObj<typeof FieldsetStory>;

export default {
  title: 'Components/Forms/Fieldset',
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
    fields: { name: 'children' },
    legend: {
      name: 'children',
      table: { category: 'Legend' }
    },

    ...hintArgTypes,
    ...messageArgTypes
  }
};

export const Checkbox: Story = {
  render: args => <FieldsetStory {...args} type="checkbox" />
};

export const Radio: Story = {
  render: args => <FieldsetStory {...args} type="radio" />
};

export const Toggle: Story = {
  render: args => <FieldsetStory {...args} type="toggle" />
};
