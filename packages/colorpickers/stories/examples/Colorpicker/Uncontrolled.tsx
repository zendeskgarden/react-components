/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Colorpicker } from '@zendeskgarden/react-colorpickers';
export default {
  title: 'Components/Colorpicker',
  component: Colorpicker
} as Meta;

export const Uncontrolled: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  isOpaque
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Colorpicker
        labels={labels}
        isOpaque={isOpaque}
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
 The \`Colorpicker\` component is used to select a color.
      `
    }
  }
};
