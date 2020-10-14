/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OrderedList } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/OrderedList',
  subcomponents: {
    OrderedList,
    'OrderedList.Item': OrderedList.Item
  }
} as Meta;

export const Default: Story = ({ size, type }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <OrderedList size={size} type={type} style={{ display: 'inline-block' }}>
          <OrderedList.Item>Garden trowel</OrderedList.Item>
          <OrderedList.Item>Pruning shears</OrderedList.Item>
          <OrderedList.Item>Hand cultivator</OrderedList.Item>
        </OrderedList>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  },
  type: {
    control: {
      type: 'select',
      options: [
        'decimal',
        'decimal-leading-zero',
        'lower-alpha',
        'lower-roman',
        'upper-alpha',
        'upper-roman'
      ]
    }
  }
};
