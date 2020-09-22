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
  isRotated
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ChevronButton
          aria-label="Other Options"
          isDanger={isDanger}
          size={size}
          isPrimary={isPrimary}
          isBasic={isBasic}
          isPill={isPill}
          focusInset={focusInset}
          isRotated={isRotated}
        />
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isDanger: {
    control: {
      type: 'boolean'
    }
  },
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  },
  isPrimary: {
    control: {
      type: 'boolean'
    }
  },
  isBasic: {
    control: {
      type: 'boolean'
    }
  },
  isPill: {
    control: {
      type: 'boolean'
    }
  },
  focusInset: {
    control: {
      type: 'boolean'
    }
  },
  isRotated: {
    control: {
      type: 'boolean'
    }
  }
};
