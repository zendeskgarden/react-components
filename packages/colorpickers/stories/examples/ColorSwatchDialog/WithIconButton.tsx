/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import PaletteIcon from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { labeledColors } from '../utils';

export default {
  title: 'Components/ColorSwatchDialog',
  component: ColorSwatchDialog
} as Meta;

export const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600']
);

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

const matrix = convertToMatrix(colors, 5);

export const WithIconButton: Story = ({ placement, disabled, hasArrow, isAnimated }) => {
  const [rowIndex, setRowIndex] = useState(-1);
  const [colIndex, setColIndex] = useState(-1);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [selectedColIndex, setSelectedColIndex] = useState(-1);

  const onChange = (rowIdx: number, colIdx: number) => {
    setRowIndex(rowIdx);
    setColIndex(colIdx);
  };

  const onSelect = (rowIdx: number, colIdx: number) => {
    setSelectedRowIndex(rowIdx);
    setSelectedColIndex(colIdx);
  };

  const clearSelection = () => {
    onChange(-1, -1);
    onSelect(-1, -1);
  };

  let selectedColor: string;

  if (selectedColIndex === -1 && selectedRowIndex === -1) {
    selectedColor = DEFAULT_THEME.palette.black as string;
  } else {
    selectedColor = matrix[selectedRowIndex][selectedColIndex].value;
  }

  return (
    <Grid>
      <Row style={{ minHeight: 470 }}>
        <Col textAlign="end">
          <ColorSwatchDialog
            rowIndex={rowIndex}
            colIndex={colIndex}
            selectedRowIndex={selectedRowIndex}
            selectedColIndex={selectedColIndex}
            colors={matrix}
            hasArrow={hasArrow}
            placement={placement}
            isAnimated={isAnimated}
            onChange={onChange}
            onSelect={onSelect}
          >
            <PaletteIconButton iconColor={selectedColor} disabled={disabled} />
          </ColorSwatchDialog>
        </Col>
        <Col>
          <div
            style={{
              width: 320,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              disabled={disabled}
              onClick={() => {
                onChange(2, 2);
                onSelect(2, 2);
              }}
            >
              Set to {matrix[2][2].label}
            </Button>
            <Button onClick={clearSelection}>Clear color selection</Button>
          </div>
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
