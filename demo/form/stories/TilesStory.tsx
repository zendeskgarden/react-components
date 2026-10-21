/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Grid } from '@zendeskgarden/react-grid';
import Icon10 from '@zendeskgarden/svg-icons/src/asterisk.svg';
import Icon08 from '@zendeskgarden/svg-icons/src/calendar-stroke.svg';
import Icon02 from '@zendeskgarden/svg-icons/src/check-box-double-stroke.svg';
import Icon05 from '@zendeskgarden/svg-icons/src/check.svg';
import Icon01 from '@zendeskgarden/svg-icons/src/chevron-square-stroke.svg';
import Icon09 from '@zendeskgarden/svg-icons/src/credit-card-stroke.svg';
import Icon from '@zendeskgarden/svg-icons/src/cube-stroke.svg';
import Icon07 from '@zendeskgarden/svg-icons/src/decimal.svg';
import Icon06 from '@zendeskgarden/svg-icons/src/hashtag.svg';
import Icon04 from '@zendeskgarden/svg-icons/src/multiline.svg';
import Icon03 from '@zendeskgarden/svg-icons/src/text.svg';

import { ITilesProps, Tiles } from '../../../src/index';
import { ITile } from './types';

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
  hasIcon: boolean;
}

export const TilesStory = ({ tiles, hasDescription, hasIcon, ...args }: IArgs) => (
  <Tiles {...args}>
    <Grid gutters={false}>
      <Grid.Row>
        {tiles.map((tile, index) => (
          <Grid.Col key={index} md={3}>
            <Tiles.Tile value={tile.value} disabled={tile.disabled} style={{ margin: 10 }}>
              {!!hasIcon && <Tiles.Icon>{TILE_ICONS[index] || <Icon />}</Tiles.Icon>}
              <Tiles.Label>{tile.label}</Tiles.Label>
              {!!hasDescription && !!tile.description && (
                <Tiles.Description>{tile.description}</Tiles.Description>
              )}
            </Tiles.Tile>
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid>
  </Tiles>
);
