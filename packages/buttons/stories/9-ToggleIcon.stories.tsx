/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import Icon from '@zendeskgarden/svg-icons/src/16/eye-stroke.svg';

export default {
  title: 'Components/Buttons/ToggleIconButton',
  component: ToggleIconButton
} as Meta;

export const Default: Story = ({
  isDanger,
  size,
  isPrimary,
  isBasic,
  isPill,
  focusInset,
  isRotated,
  isPressed
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="See more"
          isDanger={isDanger}
          size={size}
          isPrimary={isPrimary}
          isBasic={isBasic}
          isPill={isPill}
          focusInset={focusInset}
          isRotated={isRotated}
          isPressed={isPressed}
        >
          <Icon />
        </ToggleIconButton>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isDanger: {
    control: { type: 'boolean' }
  },
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
  },
  isPrimary: {
    control: { type: 'boolean' }
  },
  isBasic: {
    control: { type: 'boolean' }
  },
  isPill: {
    control: { type: 'boolean' }
  },
  focusInset: {
    control: { type: 'boolean' }
  },
  isRotated: {
    control: { type: 'boolean' }
  },
  isPressed: {
    control: { type: 'boolean' }
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
A \`IconButton\` with the [ARIA attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Toggle_buttons) to indicate a pressed state.
      `
    }
  }
};
