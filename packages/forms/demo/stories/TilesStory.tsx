/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/box-3d-stroke.svg';
import Icon01 from '@zendeskgarden/svg-icons/src/16/chevron-box-stroke.svg';
import Icon02 from '@zendeskgarden/svg-icons/src/16/check-box-double-stroke.svg';
import Icon03 from '@zendeskgarden/svg-icons/src/16/text-stroke.svg';
import Icon04 from '@zendeskgarden/svg-icons/src/16/multiline-stroke.svg';
import Icon05 from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import Icon06 from '@zendeskgarden/svg-icons/src/16/number-stroke.svg';
import Icon07 from '@zendeskgarden/svg-icons/src/16/decimal-stroke.svg';
import Icon08 from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import Icon09 from '@zendeskgarden/svg-icons/src/16/credit-card-stroke.svg';
import Icon10 from '@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg';
import { ITilesProps, Tiles } from '@zendeskgarden/react-forms';
import { ITile } from './types';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

const TILE_ICONS = [
  <Icon01 key={1} />,
  <Icon02 key={2} />,
  <Icon03 key={3} />,
  <Icon04 key={4} />,
  <Icon05 key={5} />,
  <Icon06 key={6} />,
  <Icon07 key={7} />,
  <Icon08 key={8} />,
  <Icon09 key={9} />,
  <Icon10 key={10} />
];

interface IArgs extends ITilesProps {
  tiles: ITile[];
  hasDescription: boolean;
}

export const TilesStory: Story<IArgs> = ({ tiles, hasDescription, ...args }) => (
  <Tiles {...args}>
    <Grid gutters={false}>
      <Row>
        {tiles.map((tile, index) => (
          <Col key={index} md={3}>
            <Tiles.Tile value={tile.value} disabled={tile.disabled} style={{ margin: 10 }}>
              <Tiles.Icon>{TILE_ICONS[index] || <Icon />}</Tiles.Icon>
              <Tiles.Label>{tile.label}</Tiles.Label>
              {hasDescription && tile.description && (
                <Tiles.Description>{tile.description}</Tiles.Description>
              )}
            </Tiles.Tile>
          </Col>
        ))}
      </Row>
    </Grid>
  </Tiles>
);
