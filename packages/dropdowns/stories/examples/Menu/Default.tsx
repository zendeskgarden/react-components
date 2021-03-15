/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Dropdown, Menu, Trigger, Item } from '@zendeskgarden/react-dropdowns';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
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
}

export const Default: Story<IStoryProps> = ({
  hasArrow,
  isAnimated,
  isCompact,
  placement,
  isDisabled
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 200 }}>
        <Col textAlign="center">
          {/* eslint-disable-next-line no-alert */}
          <Dropdown onSelect={item => alert(item)}>
            <Trigger>
              <Button>Default Menu</Button>
            </Trigger>
            <Menu
              hasArrow={hasArrow}
              isAnimated={isAnimated}
              isCompact={isCompact}
              placement={placement}
            >
              <Item disabled={isDisabled} value="option-1">
                Option 1
              </Item>
              <Item disabled={isDisabled} value="option-2">
                Option 2
              </Item>
              <Item disabled={isDisabled} value="option-3">
                Option 3
              </Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col textAlign="center">
          {/* eslint-disable-next-line no-alert */}
          <Dropdown onSelect={item => alert(item)}>
            <Trigger>
              <IconButton aria-label="Settings" title="Settings">
                <SettingsIcon />
              </IconButton>
            </Trigger>
            <Menu
              hasArrow={hasArrow}
              isAnimated={isAnimated}
              isCompact={isCompact}
              placement={placement}
            >
              <Item disabled={isDisabled} value="option-1">
                Option 1
              </Item>
              <Item disabled={isDisabled} value="option-2">
                Option 2
              </Item>
              <Item disabled={isDisabled} value="option-3">
                Option 3
              </Item>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  hasArrow: { name: 'hasArrow', control: 'boolean' },
  isAnimated: { name: 'isAnimated', control: 'boolean' },
  isCompact: { name: 'isCompact', control: 'boolean' },
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
  isDisabled: { name: 'Disabled items', control: 'boolean' }
};

Default.args = {
  placement: 'bottom-start',
  isAnimated: true
};
