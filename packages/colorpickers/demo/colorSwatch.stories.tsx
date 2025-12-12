/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';

import { useArgs } from '@storybook/preview-api';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';
import { COLOR_SWATCH_COLORS as COLORS } from './stories/data';

export default {
  title: 'Packages/Colorpickers/ColorSwatch',
  component: ColorSwatch,

  args: {
    colors: COLORS,
    name: 'name'
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=4102%3A31570'
    }
  }
};

export const Uncontrolled: StoryObj<typeof ColorSwatch> = {
  render: args => <ColorSwatch {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    selectedColIndex: {
      control: false
    },

    selectedRowIndex: {
      control: false
    }
  }
};

export const Controlled: StoryObj<typeof ColorSwatch> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleSelect = (selectedRowIndex: any, selectedColIndex: any) =>
      updateArgs({
        selectedRowIndex,
        selectedColIndex
      });

    return <ColorSwatch {...args} onSelect={handleSelect} />;
  },

  name: 'Controlled',

  args: {
    selectedRowIndex: 0,
    selectedColIndex: 5
  },

  argTypes: {
    defaultSelectedColIndex: {
      control: false
    },

    defaultSelectedRowIndex: {
      control: false
    },

    selectedColIndex: {
      control: {
        type: 'number'
      }
    },

    selectedRowIndex: {
      control: {
        type: 'number'
      }
    }
  }
};
