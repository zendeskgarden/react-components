/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { ColorPicker } from '@zendeskgarden/react-colorpickers';
import { PALETTE } from '@zendeskgarden/react-theming';
import React from 'react';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Packages/Colorpickers/ColorPicker',
  component: ColorPicker,
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=2178%3A344'
    }
  }
};

export const Uncontrolled: StoryObj<typeof ColorPicker> = {
  render: args => <ColorPicker {...args} />,
  argTypes: {
    color: { control: false }
  }
};

export const Controlled: StoryObj<typeof ColorPicker> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = (color: any) =>
      updateArgs({
        color
      });

    return <ColorPicker {...args} onChange={handleChange} />;
  },
  args: { color: PALETTE.blue[600] },
  argTypes: {
    defaultColor: { control: false }
  }
};
