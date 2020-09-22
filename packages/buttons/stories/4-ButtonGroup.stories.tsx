/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonGroup } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup
} as Meta;

export const Default: Story = () => {
  const [selectedItem, setSelectedItem] = useState('button-1');

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <ButtonGroup selectedItem={selectedItem} onSelect={setSelectedItem}>
            <Button value="button-1">Item 1</Button>
            <Button value="button-2">Item 2</Button>
            <Button value="button-3">Item 3</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Grid>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
The \`ButtonGroup\` component requires the following structure. \`Button\` components
require a unique value. All components accept attributes and events for their
native DOM elements.
      `
    }
  }
};
