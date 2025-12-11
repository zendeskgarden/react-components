/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, LiHTMLAttributes, PropsWithChildren } from 'react';
import { ControllerStateAndHelpers, StateChangeOptions } from 'downshift';
import { Modifiers } from 'popper.js';
import { IFauxInputProps } from '@zendeskgarden/react-forms';

const SHARED_PLACEMENT = [
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

export const POPPER_PLACEMENT = [
  ...SHARED_PLACEMENT,
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end'
] as const;

export type GardenPlacement = (typeof PLACEMENT)[number];

export type PopperPlacement = (typeof POPPER_PLACEMENT)[number];

export interface IDropdownProps extends PropsWithChildren {
  /** Opens the dropdown */
  isOpen?: boolean;
  /** Identifies the currently selected item */
  selectedItem?: any;
  /** Identifies the currently selected items */
  selectedItems?: any[];
  /** Highlights an element at a selected index */
  highlightedIndex?: number;
  /** Sets the value of the input element*/
  inputValue?: string;
  /**
   * Handles item selection
   *
   * @param {any|null} selectedItem The selected item
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#onselect)
   * */
  onSelect?: (selectedItem: any | null, stateAndHelpers: ControllerStateAndHelpers<any>) => void;
  /**
   * Handles state change
   *
   * @param {Object} options [Downshift internal state changes](https://github.com/downshift-js/downshift#onstatechange)
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#onstatechange)
   * */
  onStateChange?: (
    options: StateChangeOptions<any>,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  /**
   * Handles input value change
   *
   * @param {string} inputValue Value of the input element
   * @param {Object} stateAndHelpers [Downshift state and helpers](https://github.com/downshift-js/downshift#oninputvaluechange)
   * */
  onInputValueChange?: (
    inputValue: string,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) => void;
  /** Passes customization props to the [Downshift](https://www.downshift-js.com/) component */
  downshiftProps?: Record<string, any>;
}

export interface ITriggerProps extends HTMLAttributes<HTMLElement> {
  /** Passes the ref callback to components with non-standard ref props (i.e. `innerRef`) */
  refKey?: string;
}

export interface ISelectProps extends Omit<
  IFauxInputProps,
  'isFocused' | 'isHovered' | 'readOnly'
> {
  /** Defines the icon rendered before the element's content */
  start?: any;
}

export interface IAutocompleteProps extends ISelectProps {
  /** Provides ref access to the underlying input element */
  inputRef?: React.Ref<HTMLInputElement>;
}

export interface IComboboxProps extends IAutocompleteProps {
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Defines the icon rendered in the end position */
  end?: any;
}

export interface IMultiselectProps extends IAutocompleteProps {
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Determines the maximum number of items displayed while collapsed */
  maxItems?: number;
  /**
   * Overrides the "+ N more" text displayed when the total number of items exceeds `maxItems`
   *
   * @param {number} value The number of hidden items
   * @returns {string} a replacement for the "+ N more" text
   */
  renderShowMore?: (value: number) => string;
  /**
   * Renders each item element. Designed to be used with [Tag](/components/tags).
   *
   * @param {Object} options Rendered item options
   * @param {any} options.value The item value
   * @param {Function} options.removeValue Remove item callback
   * @returns {React.ReactElement} the item element
   */
  renderItem: (options: { value: any; removeValue: () => void }) => React.ReactElement;
}

export interface IMenuProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Passes configuration options to the [Popper instance](https://popper.js.org/docs/v2/modifiers/)
   */
  popperModifiers?: Modifiers;
  /**
   * Allows the menu to reposition during browser resize events
   */
  eventsEnabled?: boolean;
  /**
   * Sets the `z-index` of the menu
   */
  zIndex?: number;
  /**
   * Adjusts the placement of the menu
   */
  placement?: GardenPlacement;
  /**
   * Animates the menu
   */
  isAnimated?: boolean;
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
  /**
   * Attaches an arrow that points towards the menu trigger
   */
  hasArrow?: boolean;
  /**
   * Sets the `max-height` of the menu
   */
  maxHeight?: string;
  /**
   * Appends the menu to the element provided
   */
  appendToNode?: HTMLElement;
}

export interface IItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Sets the value that is returned upon selection */
  value?: any;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Applies danger styling */
  isDanger?: boolean;
  /**
   * @ignore Sets the wrapping component for the item
   */
  component?: any;
  /**
   * @ignore Hides the select icon for the item
   */
  hasIcon?: boolean;
}

export interface IHeaderItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Applies icon styling */
  hasIcon?: boolean;
}
