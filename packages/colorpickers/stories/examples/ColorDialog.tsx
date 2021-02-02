/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ColorDialog, IRGBColor } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

export const Default: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  placement
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [color, setColor] = useState<string | IRGBColor>({
    red: 23,
    green: 73,
    blue: 77,
    alpha: 100
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorDialog color={color} labels={labels} onClose={setColor} placement={placement} />
    </div>
  );
};

Default.args = {
  placement: 'bottom',
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A'
};

Default.argTypes = {
  color: { control: { disable: true } },
  alphaSlider: {
    control: 'text',
    name: 'Alpha slider label',
    description: 'A label for the alpha slider'
  },
  hueSlider: {
    control: 'text',
    name: 'Hue slider label',
    description: 'A label for the hue slider'
  },
  hex: { control: 'text', name: 'Hex input label', description: 'A label for the hex input' },
  red: { control: 'text', name: 'Red input label', description: 'A label for the red input' },
  green: { control: 'text', name: 'Green input label', description: 'A label for the green input' },
  blue: { control: 'text', name: 'Blue input label', description: 'A label for the blue input' },
  alpha: { control: 'text', name: 'Alpha input label', description: 'A label for the alpha input' },
  placement: {
    labels: { control: 'object' },
    control: {
      type: 'select',
      options: [
        'auto',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'end',
        'end-top',
        'end-bottom',
        'start',
        'start-top',
        'start-bottom'
      ]
    }
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The \`ColorDialog\` component reveals a color picker when a user selects the dialog button.
      `
    }
  }
};
