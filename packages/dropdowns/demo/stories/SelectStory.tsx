/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Dropdown,
  Field,
  Hint,
  IDropdownProps,
  ILabelProps,
  ISelectProps,
  Item,
  Label,
  Menu,
  Message,
  Select
} from '@zendeskgarden/react-dropdowns';

interface IArgs extends ISelectProps {
  selectedItem: IDropdownProps['selectedItem'];
  isRegular?: ILabelProps['isRegular'];
  hidden?: ILabelProps['hidden'];
  label?: string;
  hint?: string;
  message?: string;
  items: string[];
}

export const SelectStory: Story<IArgs> = ({
  label,
  hidden,
  isRegular,
  hint,
  message,
  selectedItem,
  onSelect,
  items,
  ...args
}) => (
  <Grid>
    <Row justifyContent="center" style={{ height: 'calc(100vh - 112px)' }}>
      <Col sm={5} lg={2} alignSelf="center">
        <Dropdown selectedItem={selectedItem} onSelect={onSelect}>
          <Field>
            {label && (
              <Label isRegular={isRegular} hidden={hidden}>
                {label}
              </Label>
            )}
            {hint && <Hint>{hint}</Hint>}
            <Select {...args}>{items[selectedItem - 1]}</Select>
            {message && <Message validation={args.validation}>{message}</Message>}
          </Field>
          <Menu>
            {items.map((item, index) => (
              <Item key={index} value={index + 1}>
                {item}
              </Item>
            ))}
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  </Grid>
);
