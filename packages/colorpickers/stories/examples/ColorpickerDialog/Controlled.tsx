/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { IColor, ColorpickerDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

export const Controlled: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  placement,
  disabled,
  hasArrow,
  isAnimated
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [color, setColor] = useState<string | IColor>('rgba(22,73,77,1)');

  return (
    <Grid>
      <Row>
        <Col textAlign="end">
          <ColorpickerDialog
            color={color}
            labels={labels}
            onChange={setColor}
            placement={placement}
            disabled={disabled}
            hasArrow={hasArrow}
            isAnimated={isAnimated}
          />
        </Col>
        <Col>
          <Button disabled={disabled} onClick={() => setColor('#CE9A')}>
            Set to #CE9A
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

Controlled.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A',
  disabled: false,
  hasArrow: false,
  isAnimated: true
};

Controlled.argTypes = {
  color: { control: false },
  defaultColor: { control: false },
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

Controlled.parameters = {
  docs: {
    description: {
      story: `
The \`ColorpickerDialog\` component can be controlled with a \`color\` prop.
`
    }
  }
};
