/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ColorPicker } from '@zendeskgarden/react-colorpickers';

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
  name: 'Uncontrolled',

  argTypes: {
    color: {
      control: false
    }
  }
};

export const Controlled: StoryObj<typeof ColorPicker> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = (color: any) =>
      updateArgs({
        color
      });

    return <ColorPicker {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    color: PALETTE.blue[600]
  },

  argTypes: {
    defaultColor: {
      control: false
    }
  }
};
