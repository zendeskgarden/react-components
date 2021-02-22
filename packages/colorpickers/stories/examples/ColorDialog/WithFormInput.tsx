/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Field, Label, Input, InputGroup } from '@zendeskgarden/react-forms';
import { IColor, ColorDialog } from '@zendeskgarden/react-colorpickers';

export default {
  title: 'Components/ColorDialog',
  component: ColorDialog
} as Meta;

const validHex = /^#(?<hex>[0-9A-F]{3}){1,2}$/iu;

const StyledField = styled(Field)`
  margin: auto;
  width: ${props => props.theme.space.base * 41.25}px;
`;

const StyledInput = styled(Input)`
  width: ${props => props.theme.space.base * 23.25}px;
`;

const StyledColorDialog = styled(ColorDialog)`
  padding: 0 ${props => props.theme.space.base * 8}px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.space.base}px;
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
  const [input, setInput] = useState('#17494d');
  const [color, setColor] = useState<string | IColor>('rgba(23, 73, 77, 100)');

  return (
    <StyledField>
      <Label>Favorite color</Label>
      <StyledContainer>
        <InputGroup>
          <StyledInput
            isCompact
            maxLength={7}
            value={input}
            disabled={disabled}
            onChange={e => {
              setInput(e.target.value);
              if (validHex.test(e.target.value)) {
                setColor(e.target.value);
              }
            }}
          />
          <StyledColorDialog
            color={color}
            labels={labels}
            placement={placement}
            onChange={selectedColor => {
              setColor(selectedColor);
              setInput(selectedColor.hex);
            }}
            disabled={disabled}
            hasArrow={hasArrow}
            isAnimated={isAnimated}
          />
        </InputGroup>
      </StyledContainer>
    </StyledField>
  );
};

WithFormInput.args = {
  placement: 'bottom',
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

WithFormInput.argTypes = {
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
