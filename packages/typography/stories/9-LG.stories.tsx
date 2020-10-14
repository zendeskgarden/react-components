/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LG } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/LG',
  component: LG
} as Meta;

export const Default: Story = ({ isBold, isMonospace, tag }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <LG isBold={isBold} isMonospace={isMonospace} tag={tag}>
          Veggies es bonus vobis, proinde vos postulo essum magis.
        </LG>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isBold: {
    control: 'boolean'
  },
  isMonospace: {
    control: 'boolean'
  },
  tag: {
    control: { type: 'select', options: ['div', 'span', 'p'] }
  }
};
