/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IMenuItem, ITEM } from './types';

export const AUTOCOMPLETE_ITEMS: IMenuItem[] = [
  { text: 'Asparagus', value: 'auto-item-01' },
  { text: 'Brussel sprouts', value: 'auto-item-02' },
  { text: 'Cauliflower', value: 'auto-item-03' },
  { text: 'Garlic', value: 'auto-item-04' },
  { text: 'Jerusalem artichoke', value: 'auto-item-05' },
  { text: 'Kale', value: 'auto-item-06' },
  { text: 'Lettuce', value: 'auto-item-07' },
  { text: 'Onion', value: 'auto-item-08' },
  { text: 'Mushroom', value: 'auto-item-09' },
  { text: 'Potato', value: 'auto-item-10' },
  { text: 'Radish', value: 'auto-item-11' },
  { text: 'Spinach', value: 'auto-item-12' },
  { text: 'Tomato', value: 'auto-item-13' },
  { text: 'Yam', value: 'auto-item-14' },
  { text: 'Zucchini', value: 'auto-item-15' }
];

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

export const MULTISELECT_ITEMS: IMenuItem[] = [
  { text: 'Aster', value: 'multi-item-01' },
  { text: "Bachelor's button", value: 'multi-item-02' },
  { text: 'Celosia', value: 'multi-item-03' },
  { text: 'Dusty miller', value: 'multi-item-04' },
  { text: 'Everlasting winged', value: 'multi-item-05' },
  { text: "Four o'clock", value: 'multi-item-06' },
  { text: 'Geranium', value: 'multi-item-07' },
  { text: 'Honesty', value: 'multi-item-08' },
  { text: 'Impatiens', value: 'multi-item-09' },
  { text: 'Johnny jump-up', value: 'multi-item-10' },
  { text: 'Lobelia', value: 'multi-item-11' },
  { text: 'Marigold', value: 'multi-item-12' },
  { text: 'Nastutium', value: 'multi-item-13' },
  { text: 'Ocimum (basil)', value: 'multi-item-14' },
  { text: 'Petunia', value: 'multi-item-15' },
  { text: 'Quaking grass', value: 'multi-item-16' },
  { text: 'Rose moss', value: 'multi-item-17' },
  { text: 'Salvia', value: 'multi-item-18' },
  { text: 'Torenia', value: 'multi-item-19' },
  { text: 'Ursinia', value: 'multi-item-20' },
  { text: 'Verbena', value: 'multi-item-21' },
  { text: 'Wax begonia', value: 'multi-item-22' },
  { text: 'Xeranthemum', value: 'multi-item-23' },
  { text: 'Yellow cosmos', value: 'multi-item-24' },
  { text: 'Zinnia', value: 'multi-item-25' }
];

export const SELECT_ITEMS: IMenuItem[] = [
  { text: 'Apple', value: 'item-1' },
  { text: 'Banana', value: 'item-2' },
  { text: 'Carrot', value: 'item-3' },
  { text: 'Grape', value: 'item-4' },
  { text: 'Kiwi', value: 'item-5' },
  { text: 'Quince', value: 'item-6' }
];

export const COMBOBOX_ITEMS = [...AUTOCOMPLETE_ITEMS, ...MULTISELECT_ITEMS].sort();
