/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IMenuItem, MENU_SEPARATOR } from './types';

export const MENU_ITEMS: (IMenuItem | MENU_SEPARATOR)[] = [
  { type: 'header', text: 'Header item' },
  '---',
  { text: 'Item' },
  { type: 'next', text: 'Next item' },
  { text: 'Item', meta: 'Meta' },
  { text: 'Item' },
  '---',
  { type: 'add', text: 'Add item' }
];

export const SELECT_ITEMS = ['Item 1', 'Item 2', 'Item 3'];
