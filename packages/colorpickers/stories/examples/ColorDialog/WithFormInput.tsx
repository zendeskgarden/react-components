/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.space.base}px;
`;

export const WithFormInput: Story = ({ labels, placement }) => {
  const [input, setInput] = useState(DEFAULT_THEME.colors.background);
  const [color, setColor] = useState<string | IColor>(DEFAULT_THEME.colors.background);

  return (
    <StyledField>
      <Label>Favorite color</Label>
      <StyledContainer>
        <ColorDialog
          color={color}
          labels={labels}
          placement={placement}
          onChange={selectedColor => {
            setColor(selectedColor);
            setInput(selectedColor.hex);
          }}
        />
        <StyledInput
          isCompact
          maxLength={7}
          value={input}
          onChange={e => {
            setInput(e.target.value);
            if (validHex.test(e.target.value)) {
              setColor(e.target.value);
            }
          }}
        />
      </StyledContainer>
    </StyledField>
  );
};

WithFormInput.args = {
  placement: 'top',
  labels: {
    alphaSlider: 'Alpha slider',
    hueSlider: 'Hue slider',
    hex: 'Hex',
    red: 'R',
    green: 'G',
    blue: 'B',
    alpha: 'A'
  }
};

WithFormInput.argTypes = {
  color: { control: { disable: true } },
  labels: { control: 'object' },
  placement: {
    labels: { control: 'object' },
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
  The color dialog can use a custom trigger element for the dialog button.
  This example demonstrates using a \`IconButton\` as the color dialog 
  trigger element.
`
    }
  }
};

WithFormInput.storyName = 'Form input';
