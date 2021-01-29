/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ColorDialog, IRGBColor, IColorPickerState } from '@zendeskgarden/react-colorpickers';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

export const WithIconButton: Story = ({ labels, placement }) => {
  const [color, setColor] = useState<IColorPickerState | IRGBColor>({
    red: 23,
    green: 73,
    blue: 77,
    alpha: 100
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorDialog
        color={color}
        labels={labels}
        onClose={selectedColor => {
          setColor(selectedColor as IColorPickerState);
        }}
        placement={placement}
      >
        <IconButton
          style={{
            color: `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`
          }}
          aria-label="leaf"
        >
          <LeafIcon />
        </IconButton>
      </ColorDialog>
    </div>
  );
};

WithIconButton.args = {
  placement: 'top',
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

WithIconButton.argTypes = {
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

WithIconButton.parameters = {
  docs: {
    description: {
      story: `
  The color dialog can use a custom trigger element for the dialog button.
  This example demonstrates using a \`IconButton\` as the color dialog 
  trigger element.
`
    }
  }
};

WithIconButton.storyName = 'Custom trigger';
