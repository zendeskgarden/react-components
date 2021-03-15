/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Dropdown, Menu, Item, Select, Field, Label, Hint } from '@zendeskgarden/react-dropdowns';
import styled from 'styled-components';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { PALETTE } from '@zendeskgarden/react-theming';

interface IStoryProps {
  placement:
    | 'auto'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'end'
    | 'end-top'
    | 'end-bottom'
    | 'start'
    | 'start-top'
    | 'start-bottom';
  hasArrow: boolean;
  isAnimated: boolean;
  isCompact: boolean;
  disabled: boolean;
  focusInset: boolean;
  isBare: boolean;
}

const options = [
  { label: 'Support Green', value: PALETTE.product.support },
  { label: 'Message Green', value: PALETTE.product.message },
  { label: 'Explore Blue', value: PALETTE.product.explore },
  { label: 'Guide Pink', value: PALETTE.product.guide },
  { label: 'Connect Red', value: PALETTE.product.connect },
  { label: 'Chat Orange', value: PALETTE.product.chat },
  { label: 'Talk Yellow', value: PALETTE.product.talk },
  { label: 'Sell Gold', value: PALETTE.product.sell }
];

const ColorSampleSquare = styled.div`
  background-color: ${props => props.color};
  width: 1em;
  height: 1em;
`;

const ColorSamplePreview = styled.div`
  display: inline-block;
  cursor: default;
`;

const InlineItem = styled.div`
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
`;

const Color = ({ name, color, includeSample }: any) =>
  includeSample ? (
    <div>
      <InlineItem>
        <ColorSampleSquare color={color} />
      </InlineItem>
      <InlineItem>{name}</InlineItem>
      <InlineItem>({color})</InlineItem>
    </div>
  ) : (
    <ColorSamplePreview>
      {name} (<span style={{ color }}>{color}</span>)
    </ColorSamplePreview>
  );

export const Advanced: Story<IStoryProps> = ({
  isAnimated,
  isCompact,
  placement,
  disabled,
  focusInset,
  isBare
}) => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  return (
    <Grid>
      <Row justifyContent="center" style={{ minHeight: 600 }}>
        <Col md={6}>
          <Dropdown
            selectedItem={selectedItem}
            onSelect={item => setSelectedItem(item)}
            downshiftProps={{ itemToString: (item: any) => item && item.label }}
          >
            <Field>
              <Label>Product Color</Label>
              <Hint>The branded colors for the Zendesk products</Hint>
              <Select
                disabled={disabled}
                focusInset={focusInset}
                isBare={isBare}
                isCompact={isCompact}
              >
                <Color color={selectedItem.value} name={selectedItem.label} />
              </Select>
            </Field>
            <Menu isAnimated={isAnimated} isCompact={isCompact} placement={placement}>
              {options.map(option => (
                <Item key={`${option.label}-${option.value}`} value={option}>
                  <Color color={option.value} name={option.label} includeSample />
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Advanced.argTypes = {
  isAnimated: { name: 'isAnimated', control: 'boolean' },
  isCompact: { name: 'isCompact', control: 'boolean' },
  placement: {
    name: 'Placement',
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

Advanced.args = {
  placement: 'bottom'
};
