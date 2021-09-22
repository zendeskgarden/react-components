/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Story, Meta } from '@storybook/react';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { labeledColors } from '../utils';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch
} as Meta;

export const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
);

const matrix = convertToMatrix(colors, 7);

export const Controlled: Story = ({ isWrapped }) => {
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
    <>
      <div
        style={{
          width: 350,
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0 auto 12px auto'
        }}
      >
        <Button
          onClick={() => {
            onChange(1, 1);
            onSelect(1, 1);
          }}
        >
          Control to {matrix[1][1].label}
        </Button>
        <Button
          onClick={() => {
            onChange(2, 1);
            onSelect(2, 1);
          }}
        >
          Control to {matrix[2][1].label}
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ColorSwatch
          colors={matrix}
          isWrapped={isWrapped}
          onChange={onChange}
          onSelect={onSelect}
          rowIndex={rowIndex}
          colIndex={colIndex}
          selectedRowIndex={selectedRowIndex}
          selectedColIndex={selectedColIndex}
        />
      </div>
    </>
  );
};

Controlled.args = {
  isWrapped: true
};

Controlled.argTypes = {
  colors: { control: { disable: true } },
  rowIndex: { control: { disable: true } },
  colIndex: { control: { disable: true } },
  selectedRowIndex: { control: { disable: true } },
  selectedColIndex: { control: { disable: true } },
  defaultRowIndex: { control: { disable: true } },
  defaultColIndex: { control: { disable: true } },
  defaultSelectedRowIndex: { control: { disable: true } },
  defaultSelectedColIndex: { control: { disable: true } }
};

Controlled.parameters = {
  docs: {
    description: {
      component: `
    The \`ColorSwatch\` component is used to select a color from a color swatch
        `
    }
  }
};
