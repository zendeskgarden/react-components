/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import CircleIcon from '@zendeskgarden/svg-icons/src/16/circle-stroke.svg';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

export default {
  title: 'Components/Buttons/Button',
  component: Button
} as Meta;

export const Default: Story = ({
  buttonText,
  isNeutral,
  isPrimary,
  isDanger,
  isPill,
  isBasic,
  focusInset,
  isLink,
  isStretched,
  disabled,
  startIcon,
  endIcon,
  size
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Button
          isNeutral={isNeutral}
          isPrimary={isPrimary}
          isDanger={isDanger}
          isPill={isPill}
          isBasic={isBasic}
          focusInset={focusInset}
          isLink={isLink}
          isStretched={isStretched}
          disabled={disabled}
          size={size}
        >
          {startIcon && (
            <Button.StartIcon>
              <CircleIcon />
            </Button.StartIcon>
          )}
          {buttonText}
          {endIcon && (
            <Button.EndIcon>
              <ChevronDownIcon />
            </Button.EndIcon>
          )}
        </Button>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  buttonText: 'Test Button'
};

Default.argTypes = {
  buttonText: {
    control: 'text'
  },
  disabled: {
    control: 'boolean'
  },
  startIcon: {
    control: 'boolean'
  },
  endIcon: {
    control: 'boolean'
  }
};
