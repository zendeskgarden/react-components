/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paragraph } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph
} as Meta;

export const Default: Story = ({ size }) => (
  <Grid>
    <Row>
      <Col textAlign="start">
        <Paragraph size={size}>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
          amaranth tatsoi tomatillo melon azuki bean garlic. Parsley shallot courgette tatsoi pea
          sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut
          pea peanut soko zucchini.
        </Paragraph>
        <Paragraph size={size}>
          Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
          lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory
          garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi
          rutabaga tigernut.
        </Paragraph>
      </Col>
    </Row>
  </Grid>
);
