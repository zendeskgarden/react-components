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
}

export const Advanced: Story<IStoryProps> = ({ hasArrow, isAnimated, isCompact, placement }) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>();

  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 650 }}>
        <Col textAlign="center">
          <Dropdown
            isOpen={isOpen}
            onStateChange={changes => {
              if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
                setIsOpen(changes.isOpen);
              }
            }}
          >
            <Trigger>
              <Button>Advanced Layout</Button>
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
              <Item value="profile" disabled={false}>
                Option 1
              </Item>
              <Item value="settings" disabled={false}>
                Option 2<ItemMeta>Optional meta</ItemMeta>
              </Item>
              <Separator />
              <MediaItem value="image" disabled={false}>
                <MediaFigure>
                  <img src="images/amir.png" alt="Example Avatar" />
                </MediaFigure>
                <MediaBody>
                  Image Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="icon" disabled={false}>
                <MediaFigure>
                  <GroupIcon />
                </MediaFigure>
                <MediaBody>
                  Icon Media Item
                  <ItemMeta>Meta info</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="avatar" disabled={false}>
                <MediaFigure>
                  <Avatar size="extraextrasmall" status="available">
                    <img alt="Sage" src="images/avatar-48.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Sage
                  <ItemMeta>sage@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <Separator />
              <AddItem value="add-item" disabled={false}>
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
  }
};

Advanced.args = {
  placement: 'bottom'
};

Advanced.parameters = {
  docs: {
    description: {
      component: `
When building a table with the \`react-tables\` package follow the
[MDN Table Accessibility Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
guidelines to ensure your implementation is accessible to screen-readers.
      `
    }
  }
};
