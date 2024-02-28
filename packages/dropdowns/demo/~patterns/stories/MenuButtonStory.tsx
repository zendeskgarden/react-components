/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Item, Menu } from '@zendeskgarden/react-dropdowns';
import { IconButton } from '@zendeskgarden/react-buttons';

export const MenuButtonStory: StoryFn = () => {
  return (
    <Grid>
      <Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Col alignSelf="center" textAlign="center">
          <div style={{ display: 'inline-block', position: 'relative', width: 300 }}>
            <Menu
              hasArrow
              button={props => (
                <IconButton {...props} aria-label="Menu">
                  <LeafIcon />
                </IconButton>
              )}
              minHeight="fit-content"
            >
              <Item value="One" />
              <Item value="Two" />
              <Item value="Three" />
            </Menu>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
