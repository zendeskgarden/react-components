/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, LiHTMLAttributes, ReactElement, ReactNode, RefObject } from 'react';

export const OPTION_TYPE = ['add', 'danger', 'next', 'previous'] as const;

export const VALIDATION = ['success', 'warning', 'error'] as const;

export type OptionType = (typeof OPTION_TYPE)[number];

export type Validation = (typeof VALIDATION)[number];

export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Appends the lisbox to the element provided */
  appendListboxToNode?: Element | DocumentFragment;
  /** Accepts an "end" icon to display */
  endIcon?: ReactElement;
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
  /** Sets the max-height of the listbox */
  listboxMaxHeight?: string;
  /** Sets the z-index of the listbox */
  listboxZIndex?: number;
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Accepts a "start" icon to display */
  startIcon?: ReactElement;
  /** Applies validation state styling */
  validation?: Validation;
}

export interface IListboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Appends the lisbox to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Determines listbox expansion */
  isExpanded?: boolean;
  /** Sets the max-height of the listbox */
  maxHeight?: IComboboxProps['listboxMaxHeight'];
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the z-index of the listbox */
  zIndex?: IComboboxProps['listboxZIndex'];
}

export interface IOptionProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Indicates that the option is not interactive */
  isDisabled?: boolean;
  /** Determines the option type */
  type?: OptionType;
}

export interface IOptGroupProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Renders a label for the option group */
  label?: ReactNode;
}
