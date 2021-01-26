/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ColorDialog, IRGBColor } from '@zendeskgarden/react-colorpicker';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

export const Default: Story = ({ labels, placement }) => {
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
  labels: {
    alphaSlider: 'Alpha Slider',
    hueSlider: 'Hue Slider',
    hex: 'Hex',
    red: 'R',
    green: 'G',
    blue: 'B',
    alpha: 'A'
  }
};

Default.argTypes = {
  color: { control: { disable: true } },
  labels: { control: 'object' },
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
The \`ColorDialog\` component reveals a ColorPicker when a user selects the dialog button.
      `
    }
  }
};
