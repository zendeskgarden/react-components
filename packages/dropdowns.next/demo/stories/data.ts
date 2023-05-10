/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Options } from './types';

export const OPTIONS: Options = [
  {
    label: 'Fruits',
    options: [
      { value: 'fruit-01', label: 'Apple' },
      { value: 'fruit-02', label: 'Banana', isDisabled: true },
      { value: 'fruit-03', label: 'Cherry' },
      { value: 'fruit-04', label: 'Grape' },
      { value: 'fruit-05', label: 'Kiwi' }
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'vegetable-01', label: 'Asparagus' },
      { value: 'vegetable-02', label: 'Broccoli', isDisabled: true },
      { value: 'vegetable-03', label: 'Brussel sprouts' },
      { value: 'vegetable-04', label: 'Cauliflower' },
      { value: 'vegetable-07', label: 'Kale' }
    ]
  }
];
