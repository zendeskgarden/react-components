/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ToggleButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Buttons/ToggleButton',
  component: ToggleButton
} as Meta;

export const Default: Story = ({
  isNeutral,
  isPrimary,
  isDanger,
  isPill,
  isBasic,
  focusInset,
  isLink,
  isStretched,
  isPressed,
  disabled,
  size
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ToggleButton
          isNeutral={isNeutral}
          isPrimary={isPrimary}
          isDanger={isDanger}
          isPill={isPill}
          isBasic={isBasic}
          focusInset={focusInset}
          isLink={isLink}
          isStretched={isStretched}
          isPressed={isPressed}
          disabled={disabled}
          size={size}
        >
          Toggle button
        </ToggleButton>
      </Col>
    </Row>
  </Grid>
);

Default.argTypes = {
  isPressed: {
    control: 'boolean'
  },
  disabled: {
    control: 'boolean'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The following example demonstrates a [toggle button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Toggle_buttons).
Either click or use the keyboard to toggle each button's pressed state.
      `
    }
  }
};
