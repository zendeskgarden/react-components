/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement as FloatingPlacement } from '@floating-ui/react-dom';
import { PLACEMENT, Placement } from '../types';
import { PLACEMENT_MAP, RTL_PLACEMENT_MAP, getFloatingPlacements } from './getFloatingPlacements';
import DEFAULT_THEME from '../elements/theme';

describe('getFloatingPlacements', () => {
  it.each<[Placement, FloatingPlacement]>(
    PLACEMENT.map(placement => [placement, PLACEMENT_MAP[placement] || placement])
  )('converts Garden "%s" to Floating-UI "%s"', (placement, expected) => {
    const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(DEFAULT_THEME, placement);

    expect(floatingPlacement).toBe(expected);
    expect(fallbackPlacements).not.toContain(floatingPlacement);
  });

  it.each<[Placement, FloatingPlacement]>(
    PLACEMENT.map(placement => [
      placement,
      RTL_PLACEMENT_MAP[PLACEMENT_MAP[placement] || placement] ||
        PLACEMENT_MAP[placement] ||
        placement
    ])
  )('converts RTL Garden "%s" to Floating-UI "%s"', (placement, expected) => {
    const theme = { ...DEFAULT_THEME, rtl: true };
    const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(theme, placement);

    expect(floatingPlacement).toBe(expected);
    expect(fallbackPlacements).not.toContain(floatingPlacement);
  });

  it('handles fallbacks as expected', () => {
    const fallbacks = ['top-start', 'top', 'top-end'] as Placement[];
    const placements = getFloatingPlacements(DEFAULT_THEME, 'bottom', fallbacks);

    expect(placements[1]).toStrictEqual(fallbacks);
  });
});
