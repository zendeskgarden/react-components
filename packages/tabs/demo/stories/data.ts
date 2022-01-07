/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ITab } from './types';

export const TABS: ITab[] = [
  {
    tab: 'Elm',
    panel:
      'Elms are deciduous and semi-deciduous trees comprising the flowering plant genus Ulmus in the plant family Ulmaceae.',
    disabled: false
  },
  {
    tab: 'Sugar maple',
    panel:
      'The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it as their state tree than any other single species—for New York, West Virginia, Wisconsin, and Vermont, the maple tree stands alone.',
    disabled: false
  },
  {
    tab: 'Sugar',
    panel:
      'Cornus is a genus of about 30–60 species of woody plants in the family Cornaceae, commonly known as dogwoods, which can generally be distinguished by their blossoms, berries, and distinctive bark.',
    disabled: false
  },
  {
    tab: 'Boysenberry syrup',
    panel: 'Boysenberry syrup has been discontinued due to low demand.',
    disabled: true
  }
];
