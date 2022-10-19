/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Avatar, IStatusIndicatorProps, StatusIndicator } from '@zendeskgarden/react-avatars';

export const StatusMenuStory: Story = ({ isCompact }) => {
  const [selectedType, setSelectedType] = useState<IStatusIndicatorProps['type']>();

  return (
    <Grid>
      <Row style={{ height: 'calc(100vh - 80px)' }}>
        <Col textAlign="center" alignSelf="center">
          <Dropdown selectedItem={selectedType} onSelect={value => setSelectedType(value)}>
            <Trigger>
              <Avatar status={selectedType} size={isCompact ? 'small' : 'medium'}>
                <img alt="Example User" src="images/avatars/chrome.png" />
              </Avatar>
            </Trigger>
            <Menu isCompact={isCompact}>
              <Item value="offline">
                <StatusIndicator isCompact={isCompact} type="offline">
                  Offline
                </StatusIndicator>
              </Item>
              <Item value="available">
                <StatusIndicator isCompact={isCompact} type="available">
                  Online
                </StatusIndicator>
              </Item>
              <Item value="transfers">
                <StatusIndicator isCompact={isCompact} type="transfers">
                  Transfers only
                </StatusIndicator>
              </Item>
              <Item value="away">
                <StatusIndicator isCompact={isCompact} type="away">
                  Away
                </StatusIndicator>
              </Item>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};
