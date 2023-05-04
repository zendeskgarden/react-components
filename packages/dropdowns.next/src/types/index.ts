/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  HTMLAttributes,
  InputHTMLAttributes,
  LiHTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject
} from 'react';
import { IOption } from '@zendeskgarden/container-combobox';
import { ITagProps as IBaseTagProps } from '@zendeskgarden/react-tags';

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
  /** Passes HTML attributes to the input element */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
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
  /** Determines whether multiple options can be selected */
  isMultiselectable?: boolean;
  /** Specifies the listbox `aria-label` */
  listboxAriaLabel?: string;
  /** Sets the `max-height` of the listbox */
  listboxMaxHeight?: string;
  /** Sets the `z-index` of the listbox */
  listboxZIndex?: number;
  /** Determines the maximum number of tags displayed when a multiselectable combobox is collapsed */
  maxTags?: number;
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /**
   * Overrides the "+ N more" text displayed when the total number of multiselectable tags exceeds `maxTags`
   *
   * @param {number} value The number of hidden items
   *
   * @returns a replacement for the "+ N more" text
   */
  renderExpandTags?: (value: number) => string;
  /** Accepts a "start" icon to display */
  startIcon?: ReactElement;
  /** Applies validation state styling */
  validation?: Validation;
}

export interface IListboxProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the lisbox to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Determines listbox expansion */
  isExpanded?: boolean;
  /** Sets the `max-height` of the listbox */
  maxHeight?: IComboboxProps['listboxMaxHeight'];
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the `z-index` of the listbox */
  zIndex?: IComboboxProps['listboxZIndex'];
}

export interface IOptionProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Indicates that the option is not interactive */
  isDisabled?: boolean;
  /** Determines the initial selection state for the option */
  isSelected?: boolean;
  /** Sets the text label of the option (defaults to `value`) */
  label?: string;
  /** Overrides props (including `children`) for the associated tag */
  tagProps?: Omit<ITagProps, 'option'>;
  /** Determines the option type */
  type?: OptionType;
  /** Sets the unique value that is returned upon selection */
  value: string | object;
}

export interface IOptGroupProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Renders content for the option group (defaults to `label` text) */
  content?: ReactNode;
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Sets the text label of the option group */
  label?: string;
}

export interface ITagProps extends Omit<IBaseTagProps, 'isRound' | 'size'> {
  /** @ignore Associates this tag with the given option (internal only) */
  option: IOption;
  /** Sets the `aria-label` and tooltip for the remove icon */
  removeLabel?: string;
}
