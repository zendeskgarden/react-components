/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { ButtonStory } from './stories/ButtonStory';

export default {
  title: 'Packages/Buttons/Button',
  component: Button,

  subcomponents: {
    'Button.StartIcon': Button.StartIcon,
    'Button.EndIcon': Button.EndIcon
  }
};

export const Example: StoryObj<typeof ButtonStory> = {
  render: args => <ButtonStory {...args} />,
  name: 'Button',
  args: {
    children: 'Text',
    hasStartIcon: false,
    hasEndIcon: false
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    isEndIconRotated: {
      name: 'isRotated',
      control: 'boolean',

      table: {
        category: 'Button.EndIcon'
      }
    },

    isStartIconRotated: {
      name: 'isRotated',
      control: 'boolean',

      table: {
        category: 'Button.StartIcon'
      }
    },

    hasStartIcon: {
      name: 'Button.StartIcon',

      table: {
        category: 'Story'
      }
    },

    hasEndIcon: {
      name: 'Button.EndIcon',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1494%3A1'
    }
  }
};
