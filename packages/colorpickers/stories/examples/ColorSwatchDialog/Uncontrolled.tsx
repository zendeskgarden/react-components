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

export default {
  title: 'Components/Colorpickers/ColorSwatchDialog',
  component: ColorSwatchDialog
} as Meta;

export const colors = [
  { label: 'Green-800', value: '#0b3b29' },
  { label: 'Green-700', value: '#186146' },
  { label: 'Green-600', value: '#038153' },
  { label: 'Green-500', value: '#228f67' },
  { label: 'Green-400', value: '#5eae91' },
  { label: 'Green-300', value: '#aecfc2' },
  { label: 'Green-200', value: '#d1e8df' },
  { label: 'Red-800', value: '#681219' },
  { label: 'Red-700', value: '#8c232c' },
  { label: 'Red-600', value: '#cc3340' },
  { label: 'Red-500', value: '#d93f4c' },
  { label: 'Red-400', value: '#e35b66' },
  { label: 'Red-300', value: '#f5b5ba' },
  { label: 'Red-200', value: '#f5d5d8' },
  { label: 'Blue-800', value: '#0f3554' },
  { label: 'Blue-700', value: '#144a75' },
  { label: 'Blue-600', value: '#1f73b7' },
  { label: 'Blue-500', value: '#337fbd' },
  { label: 'Blue-400', value: '#5293c7' },
  { label: 'Blue-300', value: '#adcce4' },
  { label: 'Blue-200', value: '#cee2f2' },
  { label: 'Yellow-800', value: '#703b15' },
  { label: 'Yellow-700', value: '#ad5e18' },
  { label: 'Yellow-600', value: '#ed961c' },
  { label: 'Yellow-500', value: '#f5a133' },
  { label: 'Yellow-400', value: '#ffb648' },
  { label: 'Yellow-300', value: '#fcdba9' },
  { label: 'Yellow-200', value: '#fff0db' }
];

export const Uncontrolled: Story = ({
  alpha,
  isWrapped,
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
            isWrapped={isWrapped}
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
  isWrapped: false,
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
