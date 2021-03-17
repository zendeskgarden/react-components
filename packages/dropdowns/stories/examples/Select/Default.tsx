/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  Menu,
  Select,
  Field,
  Label,
  Hint,
  Item,
  Message
} from '@zendeskgarden/react-dropdowns';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { VALIDATION } from '../../../src/utils/validation';
import StarStrokeIcon from '@zendeskgarden/svg-icons/src/12/star-stroke.svg';

interface IStoryProps {
  hasArrow: boolean;
  isCompact: boolean;
  validation: VALIDATION;
  isBare: boolean;
  disabled: boolean;
  focusInset: boolean;
  showMessage: boolean;
  showStartIcon: boolean;
}

const options = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' }
];

export const Default: Story<IStoryProps> = ({
  isCompact,
  validation,
  isBare,
  disabled,
  focusInset,
  showMessage,
  showStartIcon
}) => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  return (
    <Grid>
      <Row justifyContent="center" style={{ minHeight: 250 }}>
        <Col md={3}>
          <Dropdown
            selectedItem={selectedItem}
            onSelect={item => setSelectedItem(item)}
            downshiftProps={{ itemToString: (item: any) => item && item.label }}
          >
            <Field>
              <Label>Default Layout</Label>
              <Hint>This is a basic Select</Hint>
              <Select
                isBare={isBare}
                validation={validation}
                isCompact={isCompact}
                disabled={disabled}
                focusInset={focusInset}
                start={showStartIcon && <StarStrokeIcon />}
              >
                {selectedItem.label}
              </Select>
              {showMessage && <Message validation={validation}>Message</Message>}
            </Field>
            <Menu isCompact={isCompact}>
              {options.map(option => (
                <Item key={option.value} value={option}>
                  {option.label}
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  showMessage: {
    name: 'Message',
    control: 'boolean'
  },
  isOpen: { name: 'isOpen', control: 'disabled' },
  isCompact: { name: 'isCompact', control: 'boolean' },
  showStartIcon: { name: 'Show start icon', control: 'boolean' }
};

Default.args = {
  showMessage: true
};
