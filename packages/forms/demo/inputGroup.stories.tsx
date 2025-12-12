/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { InputGroup, Input, VALIDATION } from '@zendeskgarden/react-forms';
import { InputGroupStory } from './stories/InputGroupStory';
import { INPUT_GROUP_ITEMS as ITEMS } from './stories/data';
import { commonArgs, commonArgTypes, fieldSubcomponents } from './stories/common';

export default {
  title: 'Packages/Forms/InputGroup',
  component: InputGroup,

  subcomponents: {
    Input,
    ...fieldSubcomponents
  }
};

export const Example: StoryObj<typeof InputGroupStory> = {
  render: args => <InputGroupStory {...args} />,
  name: 'InputGroup',
  args: {
    ...commonArgs,
    items: ITEMS,
    isNeutral: true
  },

  argTypes: {
    items: {
      name: 'children'
    },

    ...commonArgTypes,

    disabled: {
      control: 'boolean',

      table: {
        category: 'Story'
      }
    },

    isNeutral: {
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

    isDanger: {
      control: 'boolean',

      table: {
        category: 'Button'
      }
    },

    isToggle: {
      control: 'boolean',
      name: 'ToggleButton',

      table: {
        category: 'Button'
      }
    },

    readOnly: {
      control: 'boolean',

      table: {
        category: 'Input'
      }
    },

    inputValidation: {
      control: 'radio',
      name: 'validation',
      options: VALIDATION,

      table: {
        category: 'Input'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A20265'
    }
  }
};
