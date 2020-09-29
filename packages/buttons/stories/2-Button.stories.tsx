/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/Button',
  component: Button
} as Meta;

export const Default: Story = ({
  isDanger,
  size,
  isStretched,
  isPrimary,
  isBasic,
  isLink,
  isPill,
  focusInset,
  disabled,
  buttonText
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Button
          isDanger={isDanger}
          size={size}
          isStretched={isStretched}
          isPrimary={isPrimary}
          isBasic={isBasic}
          isLink={isLink}
          isPill={isPill}
          focusInset={focusInset}
          disabled={disabled}
        >
          {buttonText}
        </Button>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  buttonText: 'Test Button'
};

Default.argTypes = {
  buttonText: {
    control: 'text'
  },
  isDanger: {
    control: 'boolean'
  },
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  },
  isStretched: {
    control: 'boolean'
  },
  isPrimary: {
    control: 'boolean'
  },
  isBasic: {
    control: 'boolean'
  },
  isLink: {
    control: 'boolean'
  },
  isPill: {
    control: 'boolean'
  },
  focusInset: {
    control: 'boolean'
  },
  disabled: {
    control: 'boolean'
  }
};
