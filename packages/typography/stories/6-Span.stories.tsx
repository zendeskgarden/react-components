/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Span } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import AsteriskIcon from '@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg';
import CircleIcon from '@zendeskgarden/svg-icons/src/16/circle-full-stroke.svg';
import DashedCircleIcon from '@zendeskgarden/svg-icons/src/16/circle-stroke.svg';

export default {
  title: 'Components/Typography/Span',
  component: Span
} as Meta;

export const Default: Story = ({ hue, isBold, isMonospace, tag, icon, startIcon }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Span hue={hue} isBold={isBold} isMonospace={isMonospace} tag={tag}>
          Veggies es bonus vobis, proinde vos postulo essum magis.
        </Span>
      </Col>
    </Row>
    <Row>
      <Col textAlign="center">
        <Span hue={hue} isBold={isBold} isMonospace={isMonospace}>
          {startIcon && (
            <Span.StartIcon>
              <DashedCircleIcon />
            </Span.StartIcon>
          )}
          Veggies es{' '}
          {icon && (
            <Span.Icon>
              <AsteriskIcon />
            </Span.Icon>
          )}{' '}
          bonus vobis{' '}
          {icon && (
            <Span.Icon>
              <CircleIcon />
            </Span.Icon>
          )}
        </Span>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  hue: {
    control: { type: 'select', options: ['grey', 'red', 'green', 'yellow'] }
  },
  isBold: {
    control: 'boolean'
  },
  isMonospace: {
    control: 'boolean'
  },
  tag: {
    control: { type: 'select', options: ['div', 'span', 'p'] }
  },
  icon: {
    control: 'boolean'
  },
  startIcon: {
    control: 'boolean'
  }
};
