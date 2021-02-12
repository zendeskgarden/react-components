/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { IColor, ColorDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

export const Controlled: Story = ({
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
  const [color, setColor] = useState<string | IColor>('rgba(22,73,77,100)');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '212px' }}>
        <ColorDialog color={color} labels={labels} onChange={setColor} placement={placement} />
        <Button onClick={() => setColor('#CE9FB7')}>Set to #CE9FB7</Button>
      </div>
    </div>
  );
};

Controlled.args = {
  placement: 'bottom',
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A'
};

Controlled.parameters = {
  docs: {
    description: {
      story: `
The \`ColorDialog\` component can be controlled with a \`color\` prop.
`
    }
  }
};
