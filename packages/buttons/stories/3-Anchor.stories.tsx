/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/Anchor',
  component: Anchor
} as Meta;

export const Default: Story = ({ anchorText, isExternal, isDanger }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Anchor isDanger={isDanger} isExternal={isExternal}>
          {anchorText}
        </Anchor>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  anchorText: 'Test Anchor'
};

Default.argTypes = {
  anchorText: {
    control: 'text'
  },
  isExternal: {
    control: 'boolean'
  },
  isDanger: {
    control: 'boolean'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The Anchor component is a styled \`<a>\` tag. It accepts all standard anchor props
and should only be used for navigating to a resource. If you need a \`<button>\`
that has anchor styling, use the \`<Button isLink>anchor-styled button</Button>\` component.
      `
    }
  }
};
