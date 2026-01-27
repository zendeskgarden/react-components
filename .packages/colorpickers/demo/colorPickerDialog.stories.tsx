/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { ColorPickerDialog } from '@zendeskgarden/react-colorpickers';
import { PALETTE } from '@zendeskgarden/react-theming';
import React from 'react';
import { action } from 'storybook/actions';
import { useArgs } from 'storybook/preview-api';

import { ColorPickerDialogStory } from './stories/ColorPickerDialogStory';
type Story = StoryObj<typeof ColorPickerDialogStory>;

export default {
  title: 'Packages/Colorpickers/ColorPickerDialog',
  component: ColorPickerDialog,
  args: {
    buttonProps: {
      'aria-label': 'Label'
    },

    'aria-label': 'Title',
    isAnimated: true
  },
  argTypes: {
    focusInset: { control: 'boolean' },
    hasArrow: { control: 'boolean' },
    isOpaque: { control: 'boolean' },
    zIndex: { control: 'number' }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A1097'
    }
  }
};

export const Uncontrolled: Story = {
  render: args => <ColorPickerDialogStory {...args} />,
  argTypes: {
    color: { control: false }
  }
};

export const Controlled: Story = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleDialogChange = ({ isOpen }: any) => {
      action('onDialogChange')({
        isOpen
      });

      updateArgs({
        isOpen
      });
    };

    const handleChange = (color: any) => {
      action('onChange')(color);

      updateArgs({
        color
      });
    };

    return (
      <ColorPickerDialogStory
        {...args}
        onDialogChange={handleDialogChange}
        onChange={handleChange}
      />
    );
  },
  args: {
    color: PALETTE.blue[600],
    isOpen: false
  },
  argTypes: {
    defaultColor: { control: false }
  }
};
