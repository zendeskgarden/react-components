/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import PaletteIcon from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';

export default {
  title: 'Components/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

export const WithIconButton: Story = ({
  placement,
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  disabled,
  hasArrow,
  isAnimated
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [color, setColor] = useState<string | IColor>('rgba(23, 73, 77, 1)');
  const [selectedColor, setSelectedColor] = useState<string | IColor>('rgba(23, 73, 77, 100)');
  const iconColor =
    typeof selectedColor === 'string'
      ? selectedColor
      : `rgba(${selectedColor.red}, ${selectedColor.green}, ${selectedColor.blue}, ${selectedColor.alpha})`;

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <ColorpickerDialog
            color={color}
            labels={labels}
            onChange={setColor}
            hasArrow={hasArrow}
            placement={placement}
            isAnimated={isAnimated}
            onClose={setSelectedColor}
          >
            <IconButton
              aria-label="palette"
              disabled={disabled}
              style={{ color: disabled ? undefined : iconColor }}
            >
              <PaletteIcon />
            </IconButton>
          </ColorpickerDialog>
        </Col>
      </Row>
    </Grid>
  );
};

WithIconButton.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A',
  disabled: false,
  hasArrow: true,
  isAnimated: true,
  placement: 'bottom'
};

WithIconButton.argTypes = {
  color: { control: { disable: true } },
  defaultColor: { control: { disable: true } },
  labels: { control: false },
  zIndex: { control: { disable: true } },
  popperModifiers: { control: { disable: true } },
  placement: {
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
