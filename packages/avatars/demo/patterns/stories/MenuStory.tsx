/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Dropdown,
  Trigger,
  Menu,
  MediaItem,
  MediaFigure,
  MediaBody,
  ItemMeta
} from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Avatar } from '@zendeskgarden/react-avatars';

export const MenuStory: Story = () => {
  const [highlightedItem, setHighlightedItem] = useState<number | null>();
  const [isDefaultOpen, setDefaultOpen] = useState<boolean | undefined>();
  const [isCompactOpen, setCompactOpen] = useState<boolean | undefined>();

  return (
    <Grid>
      <Row style={{ height: 'calc(100vh - 112px)' }}>
        <Col textAlign="center" alignSelf="center">
          <Dropdown
            onStateChange={changes => {
              setHighlightedItem(changes.highlightedIndex);
              Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
                setDefaultOpen(changes.isOpen);
            }}
          >
            <Trigger>
              <Button>
                Default
                <Button.EndIcon isRotated={isDefaultOpen}>
                  <Icon />
                </Button.EndIcon>
              </Button>
            </Trigger>
            <Menu>
              <MediaItem value="linden">
                <MediaFigure>
                  <Avatar
                    size="small"
                    status="away"
                    surfaceColor={highlightedItem === 0 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Linden" src="images/avatars/linden.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Linden
                  <ItemMeta>linden@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="reed">
                <MediaFigure>
                  <Avatar
                    size="small"
                    status="available"
                    surfaceColor={highlightedItem === 1 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Reed" src="images/avatars/reed.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Reed
                  <ItemMeta>reed@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="sage">
                <MediaFigure>
                  <Avatar
                    size="small"
                    badge="3"
                    surfaceColor={highlightedItem === 2 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Sage" src="images/avatars/sage.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Sage
                  <ItemMeta>sage@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
            </Menu>
          </Dropdown>
        </Col>
        <Col textAlign="center" alignSelf="center">
          <Dropdown
            onStateChange={changes => {
              setHighlightedItem(changes.highlightedIndex);
              Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
                setCompactOpen(changes.isOpen);
            }}
          >
            <Trigger>
              <Button size="small">
                Compact
                <Button.EndIcon isRotated={isCompactOpen}>
                  <Icon />
                </Button.EndIcon>
              </Button>
            </Trigger>
            <Menu isCompact>
              <MediaItem value="clove">
                <MediaFigure>
                  <Avatar
                    size="extraextrasmall"
                    status="away"
                    surfaceColor={highlightedItem === 0 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Clove" src="images/avatars/clove.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Clove
                  <ItemMeta>clove@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="fennel">
                <MediaFigure>
                  <Avatar
                    size="extraextrasmall"
                    status="available"
                    surfaceColor={highlightedItem === 1 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Fennel" src="images/avatars/fennel.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Fennel
                  <ItemMeta>fennel@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
              <MediaItem value="rue">
                <MediaFigure>
                  <Avatar
                    size="extraextrasmall"
                    badge="1"
                    surfaceColor={highlightedItem === 2 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Rue" src="images/avatars/rue.png" />
                  </Avatar>
                </MediaFigure>
                <MediaBody>
                  Rue
                  <ItemMeta>rue@zendesk.garden</ItemMeta>
                </MediaBody>
              </MediaItem>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};
