/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Field, Label, Input, InputGroup } from '@zendeskgarden/react-forms';
import { IColor, ColorpickerDialog } from '@zendeskgarden/react-colorpickers';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { parseToRgb, toColorString } from 'polished';

export default {
  title: 'Components/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

const validHex = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;

const StyledField = styled(Field)`
  display: inline-block;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
`;

const StyledInput = styled(Input)`
  max-width: ${props => props.theme.space.base * 26}px;
`;

export const WithFormInput: Story = ({
  placement,
  alphaSlider,
  hueSlider,
  hex,
  red,
  green,
  blue,
  alpha,
  disabled,
  hasArrow,
  isAnimated
}) => {
  const labels = { alphaSlider, hueSlider, hex, red, green, blue, alpha };
  const [input, setInput] = useState('#17494d99');
  const [color, setColor] = useState<string | IColor>('rgba(23, 73, 77, .6)');

  const toHex = (selectedColor: IColor) => {
    let colorHex = selectedColor.hex;

    if (selectedColor.alpha === 100) {
      return colorHex;
    }

    let alphaHex = Math.round((selectedColor.alpha / 100) * 255).toString(16);

    if (alphaHex.length === 1) {
      alphaHex = `0${alphaHex}`;
    }

    if (colorHex.length === 4) {
      if (alphaHex.charAt(0) === alphaHex.charAt(1)) {
        alphaHex = alphaHex.charAt(0);
      } else {
        colorHex = `#${colorHex.charAt(1)}${colorHex.charAt(1)}${colorHex.charAt(
          2
        )}${colorHex.charAt(2)}${colorHex.charAt(3)}${colorHex.charAt(3)}`;
      }
    }

    return `${colorHex}${alphaHex}`;
  };

  return (
    <Grid>
      <Row style={{ minHeight: 470 }}>
        <Col textAlign="center">
          <StyledField>
            <Label>Favorite color</Label>
            <InputGroup>
              <StyledInput
                isCompact
                maxLength={9}
                value={input}
                disabled={disabled}
                onChange={e => {
                  setInput(e.target.value);
                  if (validHex.test(e.target.value)) {
                    setColor(toColorString(parseToRgb(e.target.value)));
                  }
                }}
              />
              <ColorpickerDialog
                focusInset
                color={color}
                labels={labels}
                placement={placement}
                onChange={selectedColor => {
                  setColor(selectedColor);
                  setInput(toHex(selectedColor));
                }}
                disabled={disabled}
                hasArrow={hasArrow}
                isAnimated={isAnimated}
                onDialogChange={action('onDialogChange')}
              />
            </InputGroup>
          </StyledField>
        </Col>
      </Row>
    </Grid>
  );
};

WithFormInput.args = {
  alphaSlider: 'Alpha slider',
  hueSlider: 'Hue slider',
  hex: 'Hex',
  red: 'R',
  green: 'G',
  blue: 'B',
  alpha: 'A',
  disabled: false,
  hasArrow: false,
  isAnimated: true,
  placement: 'bottom-end'
};

WithFormInput.argTypes = {
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

WithFormInput.parameters = {
  docs: {
    description: {
      story: `
  The color dialog can share controlled color state with form inputs.
  This example demonstrates using a color dialog with an input group.
`
    }
  }
};

WithFormInput.storyName = 'Form input';
