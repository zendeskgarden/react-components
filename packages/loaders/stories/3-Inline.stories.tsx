/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Inline, IInlineProps } from '@zendeskgarden/react-loaders';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Loaders/Inline',
  component: Inline
} as Meta;

export const Default: Story<IInlineProps> = ({ color, size }) => {
  return (
    <Grid aria-busy="true" aria-live="polite">
      <Row>
        <Col md textAlign="center">
          <Inline size={size} color={color} />
        </Col>
        <Col md textAlign="center">
          <Inline size={size} color={color} />
        </Col>
        <Col md textAlign="center">
          <Inline size={size} color={color} />
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  size: {
    control: { type: 'range', min: 4, max: 160, step: 4 }
  },
  color: { control: 'color' }
};

Default.args = {
  size: 32
};

Default.parameters = {
  docs: {
    description: {
      component: `
  All areas that contain these loaders must include the
  \`[aria-busy="true",aria-live="polite"]\` attributes for
  [an accessible experience](https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy).
`
    }
  }
};
