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

export const Default: Story = ({ size }) => (
  <Grid>
    <Row>
      <Col>
        <Blockquote size={size}>This is a single line blockquote</Blockquote>
      </Col>
      <Col>
        <Blockquote size={size}>
          This a multiline blockquote. I wanted to let you know, that turnip greens yarrow ricebean
          rutabaga endive cauliflower sear lettuce kohlrabi amaranth water spinach avacado daikon
          napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin
          horseradish spinach carrot soko.
        </Blockquote>
      </Col>
      <Col>
        <Blockquote size={size}>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
          water spinach avocado daikon napa cabbage asparagus winter purslane kale.
        </Blockquote>
        <Blockquote size={size}>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
          nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
        </Blockquote>
        <Blockquote size={size}>
          Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea
          sierra leone bologi leek soko chicory celtuce parsley jicama salsify.
        </Blockquote>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  }
};
