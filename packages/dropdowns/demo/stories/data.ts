/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Items, Options } from './types';

export const BUTTON_TYPE = ['string', 'icon'];

export const ITEMS: Items = [
  {
    value: 'item',
    label: 'Item'
  },
  {
    value: 'item-icon',
    label: 'Item with icon',
    icon: true
  },
  {
    value: 'separator',
    isSeparator: true
  },
  {
    value: 'item-anchor',
    label: 'Item link',
    href: 'https://garden.zendesk.com',
    externalAnchorLabel: '(opens in new window)',
    isExternal: false
  },
  {
    value: 'item-meta',
    label: 'Item',
    meta: 'With meta'
  },
  {
    legend: 'Choose flowers',
    type: 'checkbox',
    icon: true,
    items: [
      {
        value: 'aster',
        label: 'Aster',
        isSelected: true
      },
      {
        value: 'daisy',
        label: 'Daisy',
        isDisabled: true
      },
      {
        value: 'ivy',
        label: 'Ivy'
      }
    ]
  },
  {
    'aria-label': 'Select a fruit',
    type: 'radio',
    icon: true,
    items: [
      {
        value: 'apple',
        label: 'Apple',
        name: 'fruits'
      },
      {
        value: 'cherry',
        label: 'Cherry',
        name: 'fruits'
      },
      {
        value: 'clementine',
        label: 'Clementine',
        name: 'fruits'
      }
    ]
  }
];

export const OPTIONS: Options = [
  {
    legend: 'Flowers',
    icon: true,
    options: [
      {
        value: 'flower-01',
        label: 'Aster',
        meta: 'Yohannes',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'flower-02',
        label: 'Daisy',
        meta: 'Bates',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'flower-03',
        label: 'Ivy',
        meta: 'Poison',
        icon: true,
        tagProps: {
          isPill: true,
          removeLabel: 'Remove'
        },
        isDisabled: true
      },
      {
        value: 'flower-04',
        label: 'Poppy',
        meta: 'Lee',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'flower-05',
        label: 'Lily-Rose',
        meta: 'Depp',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        },
        isHidden: true
      }
    ]
  },
  {
    legend: 'Fruits',
    icon: true,
    options: [
      {
        value: 'fruit-01',
        label: 'Apple',
        meta: 'Martin',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'fruit-02',
        label: 'Cherry',
        meta: 'Jones',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'fruit-03',
        label: 'Clementine',
        meta: 'Laine',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'fruit-04',
        label: 'Huckleberry',
        meta: 'Finn',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      }
    ]
  },
  {
    legend: 'Herbs',
    icon: true,
    options: [
      {
        value: 'herb-01',
        label: 'Basil',
        meta: 'Rathbone',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'herb-02',
        label: 'Clover',
        meta: 'Maitland',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'herb-03',
        label: 'Rue',
        meta: 'McClanahan',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'herb-04',
        label: 'Sage',
        meta: 'Francis',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      }
    ]
  },
  {
    legend: 'Trees',
    icon: true,
    options: [
      {
        value: 'tree-01',
        label: 'Ash',
        meta: 'Williams',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'tree-02',
        label: 'Oak',
        meta: 'Onaodowan',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'tree-03',
        label: 'Olive',
        meta: 'Borden',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      },
      {
        value: 'tree-04',
        label: 'Willow',
        meta: 'Smith',
        icon: true,
        tagProps: {
          'aria-label': 'Press delete or backspace to remove',
          isPill: true,
          removeLabel: 'Remove'
        }
      }
    ]
  }
];
