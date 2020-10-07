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
import IconStroke from '@zendeskgarden/svg-icons/src/16/thumbs-up-stroke.svg';
import IconFill from '@zendeskgarden/svg-icons/src/16/thumbs-up-fill.svg';

export default {
  title: 'Components/Buttons/ToggleIconButton',
  component: ToggleIconButton
} as Meta;

export const Default: Story = ({
  isPrimary,
  isDanger,
  isBasic,
  isPill,
  focusInset,
  isRotated,
  isPressed,
  disabled,
  size
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="See more"
          isPrimary={isPrimary}
          isDanger={isDanger}
          isBasic={isBasic}
          isPill={isPill}
          focusInset={focusInset}
          isRotated={isRotated}
          isPressed={isPressed}
          disabled={disabled}
          size={size}
        >
          <svg>
            <IconFill style={{ opacity: isPressed ? 1 : 0 }} />
            <IconStroke style={{ opacity: isPressed ? 0 : 1 }} />
          </svg>
        </ToggleIconButton>
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
  isPressed: {
    control: 'boolean'
  },
  disabled: {
    control: 'boolean'
  },
  size: {
    control: { type: 'select', options: ['small', 'medium', 'large'] }
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
