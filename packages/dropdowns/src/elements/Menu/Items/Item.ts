/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { StyledItem } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';

export interface IItemProps extends HTMLAttributes<HTMLLIElement> {
  /* The value that is returned through Dropdown during selection */
  value?: any;
  /* Used to optionally change the root element that is rendered */
  component?: any;
  isActive?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const Item = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ value, disabled, component = StyledItem, ...props }, ref) => {
    const {
      selectedItems,
      downshift: {
        isOpen,
        selectedItem,
        highlightedIndex,
        getItemProps,
        setHighlightedIndex,
        itemToString
      }
    } = useDropdownContext();
    const { itemIndexRef } = useMenuContext();

    if ((value === undefined || value === null) && !disabled) {
      throw new Error('All Item components require a `value` prop');
    }

    const currentIndex = itemIndexRef.current;
    const isFocused = highlightedIndex === currentIndex;
    let isSelected: boolean;

    // Calculate selection if provided value is an `object`
    if (selectedItems) {
      isSelected = selectedItems.some(item => {
        return itemToString(item) === itemToString(value);
      });
    } else {
      isSelected = itemToString(selectedItem) === itemToString(value);
    }

    useEffect(() => {
      // Highlight selected item when Select/Autocomplete is open
      if (isOpen && !disabled && !selectedItems && isSelected) {
        setHighlightedIndex(currentIndex);
      }
    }, [currentIndex, disabled, isOpen, isSelected, selectedItems, setHighlightedIndex]);

    if (disabled) {
      return React.createElement(component, {
        disabled,
        ...props
      });
    }

    // Only increment current item index if the `Item` is not disabled
    itemIndexRef.current++;

    return React.createElement(
      component,
      getItemProps({
        item: value,
        isFocused,
        checked: isSelected,
        ref,
        ...props
      })
    );
  }
);

Item.propTypes = {
  // The value that is returned through Dropdown during selection
  value: PropTypes.any,
  // Used to optionally change the root element that is rendered
  component: PropTypes.any,
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
