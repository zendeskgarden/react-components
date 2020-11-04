/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Code } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Anchor } from '@zendeskgarden/react-buttons';

export default {
  title: 'Components/Typography/Code',
  component: Code
} as Meta;

export const Default: Story = ({ hue, size }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Code hue={hue} size={size}>
          Veggies es bonus vobis
        </Code>
      </Col>
      <Col textAlign="center">
        <Anchor href="#">
          <Code hue={hue} size={size}>
            Anchor &gt; Code
          </Code>
        </Anchor>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  hue: {
    control: { type: 'select', options: ['grey', 'red', 'green', 'yellow'] }
  },
  size: {
    control: { type: 'select', options: ['inherit', 'small', 'medium', 'large'] }
  }
};
