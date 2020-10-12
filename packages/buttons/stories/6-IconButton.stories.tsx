/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import SettingsIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import AttachmentIcon from '@zendeskgarden/svg-icons/src/16/paperclip.svg';
import EmailIcon from '@zendeskgarden/svg-icons/src/16/email-stroke.svg';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton
} as Meta;

export const Default: Story = ({
  isPrimary,
  isDanger,
  focusInset,
  isBasic,
  isPill,
  isRotated,
  disabled,
  size
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <IconButton
          title="Gear"
          aria-label="Gear"
          isPrimary={isPrimary}
          isDanger={isDanger}
          focusInset={focusInset}
          isBasic={isBasic}
          isPill={isPill}
          isRotated={isRotated}
          disabled={disabled}
          size={size}
        >
          <SettingsIcon />
        </IconButton>
      </Col>
      <Col textAlign="center">
        <IconButton
          title="Paperclip"
          aria-label="Paperclip"
          isPrimary={isPrimary}
          isDanger={isDanger}
          focusInset={focusInset}
          isBasic={isBasic}
          isPill={isPill}
          isRotated={isRotated}
          disabled={disabled}
          size={size}
        >
          <AttachmentIcon />
        </IconButton>
      </Col>
      <Col textAlign="center">
        <IconButton
          title="Email"
          aria-label="Email"
          isPrimary={isPrimary}
          isDanger={isDanger}
          focusInset={focusInset}
          size={size}
          isBasic={isBasic}
          isPill={isPill}
          isRotated={isRotated}
          disabled={disabled}
        >
          <EmailIcon />
        </IconButton>
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
  focusInset: {
    control: 'boolean'
  },
  isBasic: {
    control: 'boolean'
  },
  isPill: {
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
