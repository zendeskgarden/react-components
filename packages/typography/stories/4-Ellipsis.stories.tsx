/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Ellipsis } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/Ellipsis',
  component: Ellipsis
} as Meta;

const TITLE = 'Veggies es bonus vobis, proinde vos postulo essum magis.';

export const Default: Story = ({ title, tag }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Ellipsis title={title || TITLE} tag={tag} style={{ width: 150, display: 'inline-block' }}>
          Veggies es bonus vobis, proinde vos postulo essum magis.
        </Ellipsis>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  title: TITLE
};

Default.argTypes = {
  title: {
    control: 'text'
  },
  tag: {
    control: { type: 'select', options: ['div', 'span', 'p', 'pre', 'strong', 'em'] }
  }
};
