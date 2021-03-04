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
import { IColor, ColorpickerDialog } from '@zendeskgarden/react-colorpickers';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { getColor } from '@zendeskgarden/react-theming';

export default {
  title: 'Components/ColorpickerDialog',
  component: ColorpickerDialog
} as Meta;

const validHex = /^#(?<hex>[0-9A-F]{3}){1,2}$/iu;

const StyledField = styled(Field)`
  margin: auto;
  width: ${props => props.theme.space.base * 41.25}px;
`;

const StyledInput = styled(Input)`
  /* stylelint-disable-next-line declaration-no-important */
  width: ${props => props.theme.space.base * 23.25}px !important;
`;

const StyledColorpickerDialog = styled(ColorpickerDialog)`
  border-color: ${props => getColor('primaryHue', 600, props.theme)};

  &:disabled {
    /* stylelint-disable declaration-no-important */
    border-top-width: 1px !important;
    border-bottom-width: 1px !important;
    /* stylelint-disable-next-line property-no-unknown, property-case */
    border-${props => (props.theme.rtl ? 'right' : 'left')}-width: 0 !important;
    /* stylelint-enable declaration-no-important */
    border-color: ${props => getColor('neutralHue', 200, props.theme)};
    background-color: ${props => getColor('neutralHue', 200, props.theme)};
  }
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
  const [color, setColor] = useState<string | IColor>('rgba(23, 73, 77, 1)');

  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 680 }}>
        <Col>
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
                <StyledColorpickerDialog
                  focusInset
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
  isAnimated: true
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
