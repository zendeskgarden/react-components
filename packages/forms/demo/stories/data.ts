/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IFileProps } from '@zendeskgarden/react-forms';
import { IFileListItem, IInputGroupItem, ITile } from './types';

export const FIELDSET_FIELDS = ['Field one', 'Field two', 'Field three'];

export const FILE_TYPES: IFileProps['type'][] = [
  'document',
  'generic',
  'image',
  'pdf',
  'presentation',
  'spreadsheet',
  'zip'
];

export const FILELIST_ITEMS: IFileListItem[] = [
  {
    text: 'Unknown.txt'
  },
  {
    type: 'generic',
    text: 'Garden file',
    remove: 'close',
    value: 0
  },
  {
    type: 'document',
    text: 'Plant ecology.doc',
    remove: 'close',
    value: 16
  },
  {
    type: 'image',
    text: 'Rose petals.jpg',
    remove: 'close',
    value: 32
  },
  {
    type: 'pdf',
    text: 'Basics of gardening.pdf',
    remove: 'close',
    value: 48
  },
  {
    type: 'presentation',
    text: 'Presentation bouquets.ppt',
    remove: 'close',
    value: 64
  },
  {
    type: 'spreadsheet',
    text: 'Seed inventory.xlsx',
    remove: 'close',
    value: 80
  },
  {
    type: 'zip',
    text: 'Landscape.zip',
    remove: 'delete',
    value: 100
  }
];

export const INPUT_GROUP_ITEMS: IInputGroupItem[] = [
  {
    text: 'A',
    isButton: true
  },
  {
    text: 'B',
    isButton: true
  },
  {
    text: 'Content',
    isButton: false
  },
  {
    text: 'Copy',
    isButton: true
  }
];

export const SELECT_OPTIONS = ['Option one', 'Option two', 'Option three', 'Option four'];

export const TILES: ITile[] = [
  {
    value: 'one',
    label: 'Tile one',
    description:
      'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.',
    disabled: false
  },
  {
    value: 'two',
    label: 'Tile two',
    description: 'Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.',
    disabled: false
  },
  {
    value: 'three',
    label: 'Tile three',
    description: 'Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean.',
    disabled: true
  },
  {
    value: 'four',
    label: 'Tile four',
    description:
      'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon.',
    disabled: false
  }
];
