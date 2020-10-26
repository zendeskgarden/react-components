/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Notification, Title, Close } from '@zendeskgarden/react-notifications';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Notifications/Notification',
  component: Notification
} as Meta;

export const Default: Story = ({ type, isRegular }) => (
  <Grid>
    <Row>
      <Col>
        <Notification type={type}>
          <Title isRegular={isRegular}>Turnip greens</Title>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
          water
          <Close aria-label="Close Alert" />
        </Notification>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  type: 'success'
};

Default.argTypes = {
  isRegular: {
    control: 'boolean'
  },
  type: {
    control: { type: 'select', options: ['success', 'warning', 'error', 'info'] }
  }
};
