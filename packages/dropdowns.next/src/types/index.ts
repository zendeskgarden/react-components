/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes } from 'react';

export const VALIDATION = ['success', 'warning', 'error'] as const;

export type Validation = (typeof VALIDATION)[number];

export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Accepts an "end" icon to display */
  endIcon?: any;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
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
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Accepts a "start" icon to display */
  startIcon?: any;
  /** Applies validation state styling */
  validation?: Validation;
}
