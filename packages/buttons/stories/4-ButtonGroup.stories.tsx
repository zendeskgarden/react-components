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

export const Default: Story = ({ disabled, isNeutral, isPrimary, isDanger, size, isPill }) => {
  const [selectedItem, setSelectedItem] = useState('button-1');

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <ButtonGroup selectedItem={selectedItem} onSelect={setSelectedItem}>
            <Button
              value="button-1"
              isNeutral={isNeutral}
              isPrimary={isPrimary}
              isDanger={isDanger}
              isPill={isPill}
              disabled={disabled}
              size={size}
            >
              Item 1
            </Button>
            <Button
              value="button-2"
              isNeutral={isNeutral}
              isPrimary={isPrimary}
              isDanger={isDanger}
              isPill={isPill}
              disabled={disabled}
              size={size}
            >
              Item 2
            </Button>
            <Button
              value="button-3"
              isNeutral={isNeutral}
              isPrimary={isPrimary}
              isDanger={isDanger}
              isPill={isPill}
              disabled={disabled}
              size={size}
            >
              Item 3
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  disabled: {
    control: 'boolean'
  },
  isNeutral: {
    control: 'boolean'
  },
  isPrimary: {
    control: 'boolean'
  },
  isDanger: {
    control: 'boolean'
  },
  size: {
    control: { type: 'radio', options: ['small', 'medium', 'large'] }
  },
  isPill: {
    control: 'boolean'
  }
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
