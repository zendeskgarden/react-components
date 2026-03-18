/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IItem, IOptGroup, Options } from './types';

export const ITEMS: IItem[] = [
  { value: 'Apple' },
  { value: 'Berry', type: 'next' },
  { value: 'Orange' }
];

export const SUB_ITEMS: IItem[] = [
  { value: 'Fruits', type: 'previous' },
  { value: 'separator', isSeparator: true },
  { value: 'Strawberry' },
  { value: 'Loganberry' },
  { value: 'Boysenberry' }
];

export const OPTIONS: Options = [
  { value: 'Apple' },
  { value: 'Berry', type: 'next' },
  { value: 'Orange' }
];

export const SUB_OPTIONS: Options = [
  { value: 'Fruits', type: 'previous' },
  {
    'aria-label': 'Berries',
    options: [{ value: 'Strawberry' }, { value: 'Loganberry' }, { value: 'Boysenberry' }]
  }
];

export const SUB_OPTION_VALUES = (SUB_OPTIONS[1] as IOptGroup).options.map(option => option.value);
