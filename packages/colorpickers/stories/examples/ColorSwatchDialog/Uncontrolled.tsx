/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { parseToRgb, rgbToColorString } from 'polished';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { labeledColors } from '../utils';

export default {
  title: 'Components/Colorpickers/ColorSwatchDialog',
  component: ColorSwatchDialog
} as Meta;

export const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
);

export const Uncontrolled: Story = ({
  alpha,
  placement,
  disabled,
  zIndex,
  hasArrow,
  isAnimated,
  popperModifiers
}) => {
  const alphaColors = colors.map(labeledColor => ({
    ...labeledColor,
    value: rgbToColorString({ ...parseToRgb(labeledColor.value), alpha })
  }));

  const matrix = alpha === 1 ? convertToMatrix(colors, 7) : convertToMatrix(alphaColors, 7);

  return (
    <Grid>
      <Row style={{ minHeight: 470 }}>
        <Col textAlign="center">
          <ColorSwatchDialog
            colors={matrix}
            zIndex={zIndex}
            disabled={disabled}
            hasArrow={hasArrow}
            placement={placement}
            isAnimated={isAnimated}
            onChange={action('onChange')}
            popperModifiers={popperModifiers}
            buttonProps={{ 'aria-label': 'select your favorite color' }}
          />
        </Col>
      </Row>
    </Grid>
  );
};

Uncontrolled.args = {
  alpha: 1,
  disabled: false,
  hasArrow: false,
  isAnimated: true
};

Uncontrolled.argTypes = {
  alpha: {
    name: 'alpha',
    control: { type: 'range', min: 0, max: 1, step: 0.1 }
  },
  colors: { control: { disable: true } },
  zIndex: { control: { disable: true } },
  popperModifiers: { control: { disable: true } },
  selectedRowIndex: { control: { disable: true } },
  selectedColIndex: { control: { disable: true } },
  defaultRowIndex: { control: { disable: true } },
  defaultColIndex: { control: { disable: true } },
  defaultSelectedRowIndex: { control: { disable: true } },
  defaultSelectedColIndex: { control: { disable: true } },
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
 The \`ColorSwatchDialog\` component reveals a color swatch when a user selects the dialog button.
       `
    }
  }
};
