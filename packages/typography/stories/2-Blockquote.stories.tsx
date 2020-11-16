/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Blockquote } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/Blockquote',
  component: Blockquote
} as Meta;

export const Default: Story = () => (
  <Grid>
    <Row>
      <Col>
        <Blockquote>This is a single line blockquote</Blockquote>
      </Col>
      <Col>
        <Blockquote>
          This a multiline blockquote. I wanted to let you know, that turnip greens yarrow ricebean
          rutabaga endive cauliflower sear lettuce kohlrabi amaranth water spinach avacado daikon
          napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin
          horseradish spinach carrot soko.
        </Blockquote>
      </Col>
    </Row>
  </Grid>
);
