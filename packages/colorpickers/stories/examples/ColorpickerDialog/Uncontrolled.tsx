/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorpickerDialog } from '@zendeskgarden/react-colorpickers';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export default {
  title: 'Components/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

export const Uncontrolled: Story = ({
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  placement,
  disabled,
  zIndex,
  hasArrow,
  isAnimated,
  popperModifiers
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };

  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 640 }}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ColorpickerDialog
              zIndex={zIndex}
              labels={labels}
              disabled={disabled}
              placement={placement}
              hasArrow={hasArrow}
              isAnimated={isAnimated}
              onChange={action('onChange')}
              popperModifiers={popperModifiers}
              defaultColor={DEFAULT_THEME.palette.kale[700]}
            />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

Uncontrolled.args = {
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

Uncontrolled.argTypes = {
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

Uncontrolled.parameters = {
  docs: {
    description: {
      component: `
The \`ColorpickerDialog\` component reveals a color picker when a user selects the dialog button.
      `
    }
  }
};
