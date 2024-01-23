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
import {
  IUseMenuProps,
  ISelectedItem as IUseMenuSelectedItem
} from '@zendeskgarden/container-menu';
import { VALIDATION } from '@zendeskgarden/react-forms';
import { ITagProps as IBaseTagProps } from '@zendeskgarden/react-tags';
import { IButtonProps } from '@zendeskgarden/react-buttons';

export type ISelectedItem = IUseMenuSelectedItem;

export type ISelectedOption = Extract<IUseComboboxReturnValue['selection'], IOption>;

export type OptionValue = Exclude<IUseComboboxReturnValue['activeValue'], undefined>;

export const OPTION_TYPE = ['add', 'danger', 'next', 'previous'] as const;

export type OptionType = (typeof OPTION_TYPE)[number];

export type Validation = (typeof VALIDATION)[number];

export const SHARED_PLACEMENT = [
  'auto',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end'
] as const;

export const PLACEMENT = [
  ...SHARED_PLACEMENT,
  'end',
  'end-top',
  'end-bottom',
  'start',
  'start-top',
  'start-bottom'
] as const;

export type GardenPlacement = (typeof PLACEMENT)[number];

export interface IComboboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the currently active option index in a controlled combobox */
  activeIndex?: number;
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
  /** Appends the lisbox to the element provided */
  listboxAppendToNode?: Element | DocumentFragment;
  /** Specifies the listbox `aria-label` */
  listboxAriaLabel?: string;
  /** Sets the `max-height` of the listbox */
  listboxMaxHeight?: string;
  /** Overrides the `min-height` of the listbox */
  listboxMinHeight?: string | null;
  /** Sets the `z-index` of the listbox */
  listboxZIndex?: number;
  /** Overrides the `max-height` of the combobox */
  maxHeight?: string;
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
   * @returns {string} a replacement for the "+ N more" text
   */
  renderExpandTags?: (value: number) => string;
  /**
   * Overrides the `inputValue` or `placeholder` text displayed when the combobox is not focused
   *
   * @param {object|object[]} options.selection Current selection
   * @param {string} [options.inputValue] Current input value
   *
   * @returns {Object} content for the current combobox value
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
  /** Sets the `min-height` of the listbox */
  minHeight?: IComboboxProps['listboxMinHeight'];
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
  /** Hides the option while retaining props (i.e. selected `tagProps`) */
  isHidden?: boolean;
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

export interface IOptGroupProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'content'> {
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
  /** @ignore Sets the `z-index` of the tooltip */
  tooltipZIndex?: number;
}

export interface ITagGroupProps {
  /** Indicates that the tag group is not interactive */
  isDisabled?: boolean;
  /** Determines tag group expansion */
  isExpanded: boolean;
  /** Indicates the `z-index` of the listbox */
  listboxZIndex?: number;
  /** Determines the maximum number of tags displayed when the tag group is collapsed */
  maxTags: number;
  /** Provides tag props for the associated option */
  optionTagProps: Record<string, IOptionProps['tagProps']>;
  /** Provides the current selection */
  selection: IOption[];
}

export interface IMenuListProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the menu to the element provided */
  appendToNode?: Element | DocumentFragment;
  /** Attaches an arrow that points towards the menu trigger */
  hasArrow?: boolean;
  /** Applies compact styling */
  isCompact?: boolean;
  /** Determines menu expansion */
  isExpanded?: boolean;
  /** Provides a list of acceptable fallback placements */
  fallbackPlacements?: GardenPlacement[];
  /** Sets the `max-height` of the menu */
  maxHeight?: IListboxProps['maxHeight'];
  /** Sets the `min-height` of the menu */
  minHeight?: IListboxProps['minHeight'];
  /** Adjusts the placement of the menu */
  placement?: GardenPlacement;
  /** Provides ref access to the associated trigger element */
  triggerRef: RefObject<HTMLElement>;
  /** Sets the `z-index` of the menu */
  zIndex?: IListboxProps['zIndex'];
}

export interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Appends the menu to the element provided */
  appendToNode?: IMenuListProps['appendToNode'];
  /** Sets the menu button label or renders a provided trigger element */
  button: string | ((props: IButtonProps & { ref: RefObject<HTMLButtonElement> }) => ReactNode);
  /** Provides additional props to the menu [Button](/components/button#button) */
  buttonProps?: IButtonProps;
  /** Determines default expansion in an uncontrolled menu */
  defaultExpanded?: IUseMenuProps['defaultExpanded'];
  /** Determines focused value on menu initialization */
  defaultFocusedValue?: IUseMenuProps['defaultFocusedValue'];
  /** Provides a list of acceptable fallback placements */
  fallbackPlacements?: IMenuListProps['fallbackPlacements'];
  /** Sets the focused value in a controlled menu */
  focusedValue?: IUseMenuProps['focusedValue'];
  /** Attaches an arrow that points towards the menu trigger */
  hasArrow?: IMenuListProps['hasArrow'];
  /** Applies compact styling */
  isCompact?: IMenuListProps['isCompact'];
  /** Sets the expansion in a controlled menu */
  isExpanded?: IUseMenuProps['isExpanded'];
  /** Sets the `max-height` of the menu */
  maxHeight?: IListboxProps['maxHeight'];
  /** Sets the `min-height` of the menu */
  minHeight?: IListboxProps['minHeight'];
  /**
   * Handles menu state changes
   *
   * @param {string} changes.type The event type that triggered the change
   * @param {boolean} [changes.isExpanded] The updated menu expansion
   * @param {ISelectedItem[]} [changes.selectedItems] The updated selection values
   * @param {string | null} [changes.focusedValue] The updated focused value
   */
  onChange?: IUseMenuProps['onChange'];
  /** Sets the selected items in a controlled menu */
  selectedItems?: IUseMenuProps['selectedItems'];
  /** Adjusts the placement of the menu */
  placement?: GardenPlacement;
  /** Sets the `z-index` of the menu */
  zIndex?: IListboxProps['zIndex'];
}

export interface IItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Indicates that the item is not interactive */
  isDisabled?: boolean;
  /** Determines the initial selection state for the item */
  isSelected?: boolean;
  /** Sets the text label of the item (defaults to `value`) */
  label?: string;
  /** Associates the item in a radio item group */
  name?: string;
  /** Determines the item type */
  type?: OptionType;
  /** Sets the unique value that is returned upon selection */
  value: string;
}

export interface IItemGroupProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'content'> {
  /** Renders content for the item group (defaults to `legend` text) */
  content?: ReactNode;
  /** Accepts an icon to display */
  icon?: ReactElement;
  /** Sets the text label of the item group */
  legend?: string;
  /** Configures the selection type for items within the group */
  type?: ISelectedItem['type'];
}
