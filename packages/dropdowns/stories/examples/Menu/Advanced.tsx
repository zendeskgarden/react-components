/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  Menu,
  Trigger,
  Item,
  AddItem,
  HeaderItem,
  MediaItem,
  MediaFigure,
  HeaderIcon,
  MediaBody,
  ItemMeta,
  Separator
} from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import GroupIcon from '@zendeskgarden/svg-icons/src/16/user-group-stroke.svg';
import ClipboardIcon from '@zendeskgarden/svg-icons/src/16/clipboard-list-stroke.svg';

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

export const Advanced: Story<IStoryProps> = ({
  hasArrow,
  isAnimated,
  isCompact,
  placement,
  isDisabled
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid>
      <Row style={{ minHeight: 400 }}>
        <Col textAlign="center">
          <Dropdown
            isOpen={isOpen}
            onStateChange={changes => {
              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                setIsOpen(changes.isOpen === true);
              }
            }}
          >
            <Trigger>
              <Button size={isCompact ? 'small' : 'medium'}>Advanced Layout</Button>
            </Trigger>
            <Menu
              placement={placement}
              hasArrow={hasArrow}
              isCompact={isCompact}
              isAnimated={isAnimated}
            >
              <HeaderItem hasIcon>
                <HeaderIcon>
                  <ClipboardIcon />
                </HeaderIcon>
                Header Item
              </HeaderItem>
              <Item value="profile" disabled={isDisabled}>
                Option 1
              </Item>
              <Item value="settings" disabled={isDisabled}>
                Option 2<ItemMeta>Optional meta</ItemMeta>
              </Item>
              <Separator />
              <MediaItem value="image" disabled={isDisabled}>
                <MediaFigure>
                  <img src="images/dropdowns/media.png" alt="Example Media" />
                </MediaFigure>
                <MediaBody>
                  Image Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="icon" disabled={isDisabled}>
                <MediaFigure>
                  <GroupIcon />
                </MediaFigure>
                <MediaBody>
                  Icon Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="avatar" disabled={isDisabled}>
                <MediaFigure>
                  <Avatar size="extraextrasmall" status="available">
                    <img alt="Sage" src="images/dropdowns/avatar.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Sage
                  <ItemMeta>sage@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <Separator />
              <AddItem value="add-item" disabled={isDisabled}>
                Add Item
              </AddItem>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

Advanced.argTypes = {
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

Advanced.args = {
  placement: 'bottom-start',
  isAnimated: true
};
