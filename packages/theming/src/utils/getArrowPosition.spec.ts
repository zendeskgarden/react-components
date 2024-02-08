/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Placement } from '@floating-ui/react-dom';
import { POSITION_MAP, getArrowPosition } from './getArrowPosition';
import { ArrowPosition } from '../types';

describe('getArrowPosition', () => {
  it.each<[Placement, ArrowPosition]>(Object.entries(POSITION_MAP) as [Placement, ArrowPosition][])(
    'converts "%s" to "%s"',
    (placement, expected) => {
      const position = getArrowPosition(placement);

      expect(position).toBe(expected);
    }
  );
});
