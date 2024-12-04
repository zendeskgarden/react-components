/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import 'jest-styled-components';
import { TilesStory } from './TilesStory';
import { TILES } from './data';

const renderAndMatchSnapshot = (props: any) => {
  const { container } = render(<TilesStory {...props} />);
  expect(container.firstChild).toMatchSnapshot();
};

describe('TilesStory Component', () => {
  it('renders default TilesStory', () => {
    renderAndMatchSnapshot({ tiles: TILES, hasDescription: false });
  });

  it('renders TilesStory with centered tiles', () => {
    renderAndMatchSnapshot({ tiles: TILES, isCentered: true, hasDescription: false });
  });

  it('renders TilesStory with description', () => {
    renderAndMatchSnapshot({ tiles: TILES, hasDescription: true });
  });

  it('renders TilesStory with centered tiles and description', () => {
    renderAndMatchSnapshot({ tiles: TILES, isCentered: true, hasDescription: true });
  });

  it('renders TilesStory with a disabled tile', () => {
    const disabledTiles = TILES.map(tile => ({
      ...tile,
      disabled: tile.value === 'three'
    }));
    renderAndMatchSnapshot({ tiles: disabledTiles, hasDescription: false });
  });

  it('renders TilesStory with centered tiles and a disabled tile', () => {
    const disabledTiles = TILES.map(tile => ({
      ...tile,
      disabled: tile.value === 'three'
    }));
    renderAndMatchSnapshot({ tiles: disabledTiles, isCentered: true, hasDescription: false });
  });

  it('renders TilesStory with description and a disabled tile', () => {
    const disabledTiles = TILES.map(tile => ({
      ...tile,
      disabled: tile.value === 'three'
    }));
    renderAndMatchSnapshot({ tiles: disabledTiles, hasDescription: true });
  });

  it('renders TilesStory with centered tiles, description, and a disabled tile', () => {
    const disabledTiles = TILES.map(tile => ({
      ...tile,
      disabled: tile.value === 'three'
    }));
    renderAndMatchSnapshot({ tiles: disabledTiles, isCentered: true, hasDescription: true });
  });
});
