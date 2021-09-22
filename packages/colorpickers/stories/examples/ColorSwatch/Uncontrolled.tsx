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

export const Uncontrolled: Story = ({ alpha }) => {
  const alphaColors = colors.map(labeledColor => ({
    ...labeledColor,
    value: rgbToColorString({ ...parseToRgb(labeledColor.value), alpha })
  }));

  const matrix = alpha === 1 ? convertToMatrix(colors, 7) : convertToMatrix(alphaColors, 7);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ColorSwatch colors={matrix} onChange={action('onChange')} onSelect={action('onSelect')} />
    </div>
  );
};

Uncontrolled.args = {
  alpha: 1
};

Uncontrolled.argTypes = {
  colors: { control: { disable: true } },
  rowIndex: { control: { disable: true } },
  colIndex: { control: { disable: true } },
  selectedRowIndex: { control: { disable: true } },
  selectedColIndex: { control: { disable: true } },
  defaultRowIndex: { control: { disable: true } },
  defaultColIndex: { control: { disable: true } },
  defaultSelectedRowIndex: { control: { disable: true } },
  defaultSelectedColIndex: { control: { disable: true } },
  alpha: {
    name: 'alpha',
    control: { type: 'range', min: 0, max: 1, step: 0.1 }
  }
};

Uncontrolled.parameters = {
  docs: {
    description: {
      component: `
  The \`ColorSwatch\` component is used to select a color from a color swatch.
       `
    }
  }
};
