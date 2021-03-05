/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { Colorpicker, IColor } from '@zendeskgarden/react-colorpickers';
export default {
  title: 'Components/Colorpicker',
  component: Colorpicker
} as Meta;

export const Controlled: Story = ({ alphaSlider, hueSlider, hex, red, green, blue, alpha }) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [color, setColor] = useState<string | IColor>('rgb(23,73,77)');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <Button onClick={() => setColor('#CE9FB777')}>Control to #CE9FB777</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Colorpicker color={color} onChange={setColor} labels={labels} />
      </div>
    </>
  );
};

Controlled.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A'
};

Controlled.argTypes = {
  color: { control: { disable: true } },
  defaultColor: { control: { disable: true } },
  labels: { control: false }
};

Controlled.parameters = {
  docs: {
    description: {
      story: `
The \`Colorpicker\` component can be controlled with a \`color\` prop.
`
    }
  }
};
