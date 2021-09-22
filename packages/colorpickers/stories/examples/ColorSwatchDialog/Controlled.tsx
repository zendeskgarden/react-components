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

const matrix = convertToMatrix(colors, 7);

export const Controlled: Story = ({
  isWrapped,
  placement,
  disabled,
  zIndex,
  hasArrow,
  isAnimated,
  popperModifiers
}) => {
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const [selectedColIndex, setSelectedColIndex] = useState(0);
  const onChange = (rowIdx: number, colIdx: number) => {
    setRowIndex(rowIdx);
    setColIndex(colIdx);
  };
  const onSelect = (rowIdx: number, colIdx: number) => {
    setSelectedRowIndex(rowIdx);
    setSelectedColIndex(colIdx);
  };

  return (
    <Grid>
      <Row style={{ minHeight: 470 }}>
        <Col textAlign="end">
          <ColorSwatchDialog
            colors={matrix}
            isWrapped={isWrapped}
            onChange={onChange}
            onSelect={onSelect}
            rowIndex={rowIndex}
            colIndex={colIndex}
            selectedRowIndex={selectedRowIndex}
            selectedColIndex={selectedColIndex}
            zIndex={zIndex}
            hasArrow={hasArrow}
            disabled={disabled}
            placement={placement}
            isAnimated={isAnimated}
            popperModifiers={popperModifiers}
            buttonProps={{ 'aria-label': 'select your favorite color' }}
          />
        </Col>
        <Col>
          <Button
            disabled={disabled}
            onClick={() => {
              onChange(2, 2);
              onSelect(2, 2);
            }}
          >
            Set to {matrix[2][2].label}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

Controlled.args = {
  isWrapped: true,
  disabled: false,
  hasArrow: false,
  isAnimated: true
};

Controlled.argTypes = {
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

Controlled.parameters = {
  docs: {
    description: {
      component: `
 The \`ColorSwatchDialog\` component reveals a color swatch when a user selects the dialog button.
       `
    }
  }
};
