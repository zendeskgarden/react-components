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
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { labeledColors } from '../utils';

export default {
  title: 'Components/ColorSwatchDialog',
  component: ColorSwatchDialog
} as Meta;

export const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
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
