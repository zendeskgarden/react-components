/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { PLACEMENT } from '../types';
import { getFloatingPlacements } from './getFloatingPlacements';
import { getMenuPosition } from './getMenuPosition';

describe('getMenuPosition', () => {
  it.each(PLACEMENT)('converts "%s" as expected', placement => {
    const placements = getFloatingPlacements(DEFAULT_THEME, placement);
    const position = getMenuPosition(placements[0]);
    const expected = placements[0].split('-')[0];

    expect(position).toBe(expected);
  });
});
