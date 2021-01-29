/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorPicker } from '@zendeskgarden/react-colorpickers';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
export default {
  title: 'Components/ColorPicker',
  component: ColorPicker
} as Meta;

export const Default: Story = ({ labels }) => {
  const [color] = useState(DEFAULT_THEME.palette.kale[600]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorPicker color={color} onChange={action('onChange')} labels={labels} />
    </div>
  );
};

Default.args = {
  labels: {
    alphaSlider: 'Alpha slider',
    hueSlider: 'Hue slider',
    hex: 'Hex',
    red: 'R',
    green: 'G',
    blue: 'B',
    alpha: 'A'
  }
};

Default.argTypes = {
  color: { control: 'disable' },
  labels: { control: 'object' }
};

Default.parameters = {
  docs: {
    description: {
      component: `
 The \`ColorPicker\` component is used to select a color.
      `
    }
  }
};
