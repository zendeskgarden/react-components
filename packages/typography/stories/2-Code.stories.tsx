/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Code, SM, MD, LG } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Anchor } from '@zendeskgarden/react-buttons';

export default {
  title: 'Components/Typography/Code',
  component: Code
} as Meta;

const Typography: React.FC<{ size: 'small' | 'medium' | 'large' }> = ({ children, size }) => {
  switch (size) {
    case 'small':
      return <SM>{children}</SM>;
    case 'large':
      return <LG>{children}</LG>;
    case 'medium':
    default:
      return <MD>{children}</MD>;
  }
};

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
      <Col textAlign="center">
        <Code hue={hue} size={size}>
          Code &gt; <Anchor href="#">Anchor</Anchor>
        </Code>
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col style={{ marginTop: 20 }} md={5}>
        <Typography size={size}>
          Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
          chicory{' '}
          <Code hue={hue} size={size}>
            salsify
          </Code>{' '}
          pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel
          courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut
          broccoli arugula.
        </Typography>
      </Col>
    </Row>
  </Grid>
);
