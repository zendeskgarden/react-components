/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export const VALIDATION = ['success', 'warning', 'error'] as const;

export type Validation = typeof VALIDATION[number];

export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Indicates that the combobox provides autocompletion  */
  isAutocomplete?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Indicates that the combobox is not interactive */
  isDisabled?: boolean;
  /** Determines whether the combobox is editable or select-only */
  isEditable?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Applies validation state styling */
  validation?: Validation;
}
