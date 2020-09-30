/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ChevronButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/ChevronButton',
  component: ChevronButton
} as Meta;

export const Default: Story = ({
  isDanger,
  size,
  isPrimary,
  isBasic,
  isPill,
  focusInset,
  isRotated,
  disabled
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ChevronButton
          isPrimary={isPrimary}
          isDanger={isDanger}
          isBasic={isBasic}
          isPill={isPill}
          focusInset={focusInset}
          isRotated={isRotated}
          disabled={disabled}
          size={size}
          aria-label="Chevron"
        />
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isPrimary: {
    control: 'boolean'
  },
  isDanger: {
    control: 'boolean'
  },
  isBasic: {
    control: 'boolean'
  },
  isPill: {
    control: 'boolean'
  },
  focusInset: {
    control: 'boolean'
  },
  isRotated: {
    control: 'boolean'
  },
  disabled: {
    control: 'boolean'
  },
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  }
};
