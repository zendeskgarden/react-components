/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { ColorPicker, IColor } from '@zendeskgarden/react-colorpickers';
export default {
  title: 'Components/ColorPicker',
  component: ColorPicker
} as Meta;

export const ControlledColorPicker: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <Button onClick={() => setColor('#CE9FB7')}>Control to #CE9FB7</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ColorPicker color={color} onChange={setColor} labels={labels} />
      </div>
    </>
  );
};

ControlledColorPicker.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A'
};

ControlledColorPicker.argTypes = {
  color: { control: 'disable' },
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
  alpha: { control: 'text', name: 'Alpha input label', description: 'A label for the alpha input' }
};

ControlledColorPicker.parameters = {
  docs: {
    description: {
      component: `
 The \`ColorPicker\` component is used to select a color.
      `
    }
  }
};
