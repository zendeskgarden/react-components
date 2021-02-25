/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ColorPicker } from '@zendeskgarden/react-colorpickers';
export default {
  title: 'Components/ColorPicker',
  component: ColorPicker
} as Meta;

export const Uncontrolled: Story = ({ alphaSlider, hueSlider, hex, red, green, blue, alpha }) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorPicker
        labels={labels}
        onChange={action('onChange')}
        defaultColor="rgba(23, 73, 77, 1)"
      />
    </div>
  );
};

Uncontrolled.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A'
};

Uncontrolled.argTypes = {
  color: { control: { disable: true } },
  defaultColor: { control: { disable: true } },
  labels: { control: false }
};

Uncontrolled.parameters = {
  docs: {
    description: {
      component: `
 The \`ColorPicker\` component is used to select a color.
      `
    }
  }
};
