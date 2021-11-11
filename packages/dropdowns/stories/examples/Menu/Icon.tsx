/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Dropdown, Menu, Trigger, Item } from '@zendeskgarden/react-dropdowns';
import { IconButton } from '@zendeskgarden/react-buttons';
import SettingsIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

interface IStoryProps {
  placement:
    | 'auto'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'end'
    | 'end-top'
    | 'end-bottom'
    | 'start'
    | 'start-top'
    | 'start-bottom';
  hasArrow: boolean;
  isAnimated: boolean;
  isCompact: boolean;
  isDisabled: boolean;
  isDanger: boolean;
  isOpen: boolean;
}

export const Icon: Story<IStoryProps> = ({
  hasArrow,
  isAnimated,
  isCompact,
  placement,
  isDisabled,
  isDanger,
  isOpen
}) => {
  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 200 }}>
        <Col textAlign="center">
          {/* eslint-disable-next-line no-alert */}
          <Dropdown onSelect={item => alert(item)} isOpen={isOpen || undefined}>
            <Trigger>
              <IconButton
                aria-label="Settings"
                title="Settings"
                size={isCompact ? 'small' : 'medium'}
              >
                <SettingsIcon />
              </IconButton>
            </Trigger>
            <Menu
              hasArrow={hasArrow}
              isAnimated={isAnimated}
              isCompact={isCompact}
              placement={placement}
            >
              <Item disabled={isDisabled} isDanger={isDanger} value="option-1">
                Option 1
              </Item>
              <Item disabled={isDisabled} isDanger={isDanger} value="option-2">
                Option 2
              </Item>
              <Item disabled={isDisabled} isDanger={isDanger} value="option-3">
                Option 3
              </Item>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Icon.argTypes = {
  hasArrow: { name: 'hasArrow', control: 'boolean' },
  isAnimated: { name: 'isAnimated', control: 'boolean' },
  isCompact: { name: 'isCompact', control: 'boolean' },
  isDanger: { name: 'isDanger', control: 'boolean' },
  placement: {
    name: 'Placement',
    control: {
      type: 'select',
      options: [
        'auto',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'end',
        'end-top',
        'end-bottom',
        'start',
        'start-top',
        'start-bottom'
      ]
    }
  },
  isDisabled: { name: 'Disabled items', control: 'boolean' },
  isOpen: { control: 'boolean' }
};

Icon.args = {
  placement: 'end',
  isAnimated: true,
  hasArrow: true
};
