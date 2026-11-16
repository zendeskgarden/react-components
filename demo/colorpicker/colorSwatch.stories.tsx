/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { ColorSwatch } from '../../src/index';
import { COLOR_SWATCH_COLORS as COLORS } from './stories/data';

export default {
  title: 'Components/Colorpickers/ColorSwatch',
  component: ColorSwatch,
  args: {
    colors: COLORS,
    name: 'name'
  }
};

export const Uncontrolled: StoryObj<typeof ColorSwatch> = {
  render: args => <ColorSwatch {...args} />,
  argTypes: {
    selectedColIndex: { control: false },
    selectedRowIndex: { control: false }
  }
};

export const Controlled: StoryObj<typeof ColorSwatch> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleSelect = (selectedRowIndex: any, selectedColIndex: any) =>
      updateArgs({
        selectedRowIndex,
        selectedColIndex
      });

    return <ColorSwatch {...args} onSelect={handleSelect} />;
  },
  args: {
    selectedRowIndex: 0,
    selectedColIndex: 5
  },
  argTypes: {
    defaultSelectedColIndex: { control: false },
    defaultSelectedRowIndex: { control: false },
    selectedColIndex: { control: { type: 'number' } },
    selectedRowIndex: { control: { type: 'number' } }
  }
};
