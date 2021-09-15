/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import PaletteIcon from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';

export default {
  title: 'Components/ColorSwatchDialog',
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

interface IPaletteIconButton {
  iconColor: string;
}

const PaletteIconButton = React.forwardRef(
  (
    props: IPaletteIconButton & React.ComponentPropsWithoutRef<'button'>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <Tooltip content="Palette">
      <IconButton
        aria-label="palette"
        ref={ref}
        style={{ color: props.disabled ? undefined : props.iconColor }}
        {...props}
      >
        <PaletteIcon />
      </IconButton>
    </Tooltip>
  )
);

PaletteIconButton.displayName = 'PaletteIconButton';

const matrix = convertToMatrix(colors, 7);

export const WithIconButton: Story = ({ placement, disabled, hasArrow, isAnimated }) => {
  const [selectedColor, setSelectedColor] = useState<string>(matrix[0][0].value);

  return (
    <Grid>
      <Row style={{ minHeight: 470 }}>
        <Col textAlign="center">
          <ColorSwatchDialog
            colors={matrix}
            hasArrow={hasArrow}
            placement={placement}
            isAnimated={isAnimated}
            onSelect={(rowIndex, colIndex) => setSelectedColor(matrix[rowIndex][colIndex].value)}
          >
            <PaletteIconButton iconColor={selectedColor} disabled={disabled} />
          </ColorSwatchDialog>
        </Col>
      </Row>
    </Grid>
  );
};

WithIconButton.args = {
  disabled: false,
  hasArrow: true,
  isAnimated: true,
  placement: 'bottom'
};

WithIconButton.argTypes = {
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
