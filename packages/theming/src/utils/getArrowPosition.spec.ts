/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';

import DEFAULT_THEME from '../elements/theme';
import { ArrowPosition } from '../types';
import { POSITION_MAP, RTL_POSITION_MAP, getArrowPosition } from './getArrowPosition';

describe('getArrowPosition', () => {
  it.each<[Placement, ArrowPosition]>(Object.entries(POSITION_MAP) as [Placement, ArrowPosition][])(
    'converts "%s" to "%s"',
    (placement, expected) => {
      const position = getArrowPosition(DEFAULT_THEME, placement);

      expect(position).toBe(expected);
    }
  );

  it.each<[Placement, ArrowPosition]>(
    Object.keys(POSITION_MAP).map(
      position =>
        [
          position,
          RTL_POSITION_MAP[POSITION_MAP[position as Placement]] ||
            POSITION_MAP[position as Placement]
        ] as [Placement, ArrowPosition]
    )
  )('converts RTL "%s" to "%s"', (placement, expected) => {
    const theme = { ...DEFAULT_THEME, rtl: true };
    const position = getArrowPosition(theme, placement);

    expect(position).toBe(expected);
  });
});
