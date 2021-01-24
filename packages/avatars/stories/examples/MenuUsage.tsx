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
  Trigger,
  Menu,
  MediaItem,
  MediaFigure,
  MediaBody,
  ItemMeta
} from '@zendeskgarden/react-dropdowns';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Button } from '@zendeskgarden/react-buttons';
import { PALETTE } from '@zendeskgarden/react-theming';

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuUsage: Story = ({ foo }) => {
  const [highlightedItem, setHighlightedItem] = useState<number | null>();

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <Dropdown onStateChange={changes => setHighlightedItem(changes.highlightedIndex)}>
            <Trigger>
              <Button>Default menu</Button>
            </Trigger>
            <Menu hasArrow>
              <MediaItem value="linden">
                <MediaFigure>
                  <Avatar
                    size="small"
                    status="away"
                    surfaceColor={highlightedItem === 0 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Linden" src="images/avatar-25.png" />
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
                    <img alt="Reed" src="images/avatar-30.png" />
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
                    <img alt="Sage" src="images/avatar-48.png" />
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
        <Col textAlign="center">
          <Dropdown onStateChange={changes => setHighlightedItem(changes.highlightedIndex)}>
            <Trigger>
              <Button>Small menu</Button>
            </Trigger>
            <Menu hasArrow isCompact>
              <MediaItem value="clove">
                <MediaFigure>
                  <Avatar
                    size="extraextrasmall"
                    status="away"
                    surfaceColor={highlightedItem === 0 ? PALETTE.blue[100] : undefined}
                  >
                    <img alt="Clove" src="images/avatar-31.png" />
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
                    <img alt="Fennel" src="images/avatar-32.png" />
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
                    <img alt="Rue" src="images/avatar-33.png" />
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

MenuUsage.storyName = 'Menu usage';

MenuUsage.parameters = {
  docs: {
    description: {
      story: `
  The following example demonstrates intended avatar
  sizing within menus. Additionally, note the detail of
  dynamically modifying \`surfaceColor\` to blend with the
  menu item's highlight color on focus and hover. See the code
  for details.
`
    }
  }
};
