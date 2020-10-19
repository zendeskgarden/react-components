/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { UnorderedList } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/UnorderedList',
  subcomponents: {
    UnorderedList,
    'UnorderedList.Item': UnorderedList.Item
  }
} as Meta;

export const Default: Story = ({ size, type }) => (
  <Grid>
    <Row justifyContent="center">
      <Col size={2}>
        <UnorderedList size={size} type={type}>
          <UnorderedList.Item>Plant</UnorderedList.Item>
          <UnorderedList.Item>Water</UnorderedList.Item>
          <UnorderedList.Item>Harvest</UnorderedList.Item>
        </UnorderedList>
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
      options: ['disc', 'circle', 'square']
    }
  }
};
