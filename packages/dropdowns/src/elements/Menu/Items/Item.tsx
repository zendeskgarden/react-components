/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import SelectedSvg from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { StyledItem, StyledItemIcon } from '../../../styled';
import useDropdownContext from '../../../utils/useDropdownContext';
import useMenuContext from '../../../utils/useMenuContext';
import { ItemContext } from '../../../utils/useItemContext';

export interface IItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * The value that is returned through Dropdown during selection
   */
  value?: any;
  /**
   * @ignore
   */
  component?: any;
  disabled?: boolean;
}

/**
 * Accepts all `<li>` props
 */
export const Item = React.forwardRef<HTMLLIElement, IItemProps>(
  ({ value, disabled, component = StyledItem, children, ...props }, forwardRef) => {
    const {
      selectedItems,
      hasMenuRef,
      itemSearchRegistry,
      downshift: {
        isOpen,
        selectedItem,
        highlightedIndex,
        getItemProps,
        setHighlightedIndex,
        itemToString
      }
    } = useDropdownContext();
    const { itemIndexRef, isCompact } = useMenuContext();
    const itemRef = useCombinedRefs(forwardRef);
    const Component = component;

    if ((value === undefined || value === null) && !disabled) {
      throw new Error('All Item components require a `value` prop');
    }

    const currentIndex = itemIndexRef.current;
    const isFocused = highlightedIndex === currentIndex;
    let isSelected: boolean;

    useEffect(() => {
      if (!disabled && itemRef.current) {
        const itemTextValue = itemRef.current!.innerText;

        if (itemTextValue) {
          itemSearchRegistry.current[currentIndex] = itemTextValue;
        }
      }
    });

    // Calculate selection if provided value is an `object`
    if (value) {
      if (selectedItems) {
        isSelected = selectedItems.some(item => {
          return itemToString(item) === itemToString(value);
        });
      } else {
        isSelected = itemToString(selectedItem) === itemToString(value);
      }
    } else {
      isSelected = false;
    }

    useEffect(() => {
      // Highlight selected item when Select/Autocomplete is open
      if (isOpen && !disabled && !selectedItems && isSelected) {
        setHighlightedIndex(currentIndex);
      }
    }, [currentIndex, disabled, isOpen, isSelected, selectedItems, setHighlightedIndex]);

    if (disabled) {
      return (
        <ItemContext.Provider value={{ isDisabled: disabled }}>
          <Component ref={itemRef} disabled={disabled} isCompact={isCompact} {...props}>
            {isSelected && (
              <StyledItemIcon isCompact={isCompact} isVisible={isSelected} isDisabled={disabled}>
                <SelectedSvg />
              </StyledItemIcon>
            )}
            {children}
          </Component>
        </ItemContext.Provider>
      );
    }

    // Only increment current item index if the `Item` is not disabled
    itemIndexRef.current++;

    return (
      <ItemContext.Provider value={{ isDisabled: disabled }}>
        <Component
          data-test-is-focused={isFocused}
          data-test-is-selected={isSelected}
          {...getItemProps({
            item: value,
            isFocused,
            ref: itemRef,
            isCompact,
            ...(hasMenuRef.current && {
              role: 'menuitem',
              'aria-selected': null
            }),
            ...props
          } as any)}
        >
          {isSelected && (
            <StyledItemIcon isCompact={isCompact} isVisible={isSelected} data-test-id="item-icon">
              <SelectedSvg />
            </StyledItemIcon>
          )}
          {children}
        </Component>
      </ItemContext.Provider>
    );
  }
);

Item.displayName = 'Item';

Item.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool
};
