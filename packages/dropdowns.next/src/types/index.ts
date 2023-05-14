/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject
} from 'react';
import {
  IOption,
  IUseComboboxProps,
  IUseComboboxReturnValue
} from '@zendeskgarden/container-combobox';
import { VALIDATION } from '@zendeskgarden/react-forms';
import { ITagProps as IBaseTagProps } from '@zendeskgarden/react-tags';

export const OPTION_TYPE = ['add', 'danger', 'next', 'previous'] as const;

export type OptionType = (typeof OPTION_TYPE)[number];

export type Validation = (typeof VALIDATION)[number];

export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the currently active option index in a controlled combobox */
  activeIndex?: number;
  /** Appends the lisbox to the element provided */
  appendListboxToNode?: Element | DocumentFragment;
  /** Sets the default active option index in an uncontrolled combobox */
  defaultActiveIndex?: number;
  /** Determines default listbox expansion in an uncontrolled combobox */
  defaultExpanded?: boolean;
  /** Accepts an "end" icon to display */
  endIcon?: ReactElement;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Identifies the combobox */
  id?: string;
  /** Passes HTML attributes to the input element */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  /** Sets the input value in a controlled combobox */
  inputValue?: string;
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
  /** Determines listbox expansion in a controlled combobox */
  isExpanded?: boolean;
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
  /**
   * Handles combobox state changes
   *
   * @param {string} changes.type The event type that triggered the change
   * @param {boolean} [changes.isExpanded] The updated listbox expansion
   * @param {OptionValue|OptionValue[]} [changes.selectionValue] The updated selection value(s)
   * @param {string} [changes.inputValue] The updated input value
   * @param {number} [changes.activeIndex] The updated active option index
   */
  onChange?: IUseComboboxProps['onChange'];
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
  /**
   * Overrides the `inputValue` or `placeholder` text displayed when the combobox is not focused
   *
   * @param {object|object[]} options.selection Current selection
   * @param {string} [options.inputValue] Current input value
   *
   * @returns content for the current combobox value
   */
  renderValue?: (options: {
    selection: IUseComboboxReturnValue['selection'];
    inputValue?: IUseComboboxReturnValue['inputValue'];
  }) => ReactNode;
  /** Sets the selection value (or `isMultiselectable` values) in a controlled combobox */
  selectionValue?: IUseComboboxProps['selectionValue'];
  /** Accepts a "start" icon to display */
  startIcon?: ReactElement;
  /** Applies validation state styling */
  validation?: Validation;
}

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
  /** Hides the label visually without hiding it from screen readers */
  hidden?: LabelHTMLAttributes<HTMLLabelElement>['hidden'];
}

export interface IListboxProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the lisbox to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines listbox expansion */
  isExpanded?: boolean;
  /** Sets the `max-height` of the listbox */
  maxHeight?: IComboboxProps['listboxMaxHeight'];
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the `z-index` of the listbox */
  zIndex?: IComboboxProps['listboxZIndex'];
}

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies validation state styling */
  validation?: Validation;
  /** Defines the `aria-label` for the validation icon */
  validationLabel?: string;
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
