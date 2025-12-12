/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { FauxInput } from '@zendeskgarden/react-forms';
import { FauxInputStory } from './stories/FauxInputStory';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';

export default {
  title: 'Packages/Forms/FauxInput',
  component: FauxInput,

  subcomponents: {
    'FauxInput.EndIcon': FauxInput.EndIcon,
    'FauxInput.StartIcon': FauxInput.StartIcon,
    ...fieldSubcomponents
  }
};

export const Default: StoryObj<typeof FauxInputStory> = {
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
    ...commonArgTypes,

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
