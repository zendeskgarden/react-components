/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IMenuItem, ITEM } from './types';

export const DROPDOWN_PLACEMENT = ['top', 'bottom', 'auto'];

export const MENU_ITEMS: ITEM[] = [
  { type: 'header', text: 'Header item', value: 'item-1' },
  '---',
  { text: 'Item', value: 'item-2' },
  { type: 'next', text: 'Next item', value: 'item-3' },
  { text: 'Item', meta: 'Meta', value: 'item-4' },
  { text: 'Item', value: 'item-5' },
  '---',
  { type: 'add', text: 'Add item', value: 'item-6' }
];

export const SELECT_ITEMS: IMenuItem[] = [
  { text: 'Item 1', value: 'item-1' },
  { text: 'Item 2', value: 'item-2' },
  { text: 'Item 3', value: 'item-3' }
];
