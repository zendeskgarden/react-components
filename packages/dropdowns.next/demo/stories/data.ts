/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IOption } from './types';

export const OPTIONS: IOption[] = [
  { value: 'fruit-01', label: 'Apple' },
  { value: 'fruit-02', label: 'Banana', isDisabled: true },
  { value: 'fruit-03', label: 'Cherry' },
  { value: 'fruit-04', label: 'Grape' },
  { value: 'fruit-05', label: 'Kiwi' },
  { value: null, label: '???' }
];
