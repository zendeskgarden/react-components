/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { KEY_CODES } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Reference } from 'react-popper';

import { StyledInput } from '../../styled';
import { ITriggerProps } from '../../types';
import useDropdownContext from '../../utils/useDropdownContext';

/**
 * @deprecated use `@zendeskgarden/react-dropdowns` Menu instead
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export const Trigger = ({ children, refKey = 'ref', ...triggerProps }: ITriggerProps) => {
  const {
    hasMenuRef,
    itemSearchRegistry,
    downshift: {
      getRootProps,
      getToggleButtonProps,
      getInputProps,
      isOpen,
      highlightedIndex,
      selectItemAtIndex,
      setHighlightedIndex
    }
  } = useDropdownContext();
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const previousIsOpenRef = useRef<boolean | undefined>(undefined);
  const [searchString, setSearchString] = useState('');
  const searchTimeoutRef = useRef<number>();
  const currentSearchIndexRef = useRef<number>(0);

  useEffect(() => {
    // Focus internal input when Menu is opened
    if (hiddenInputRef.current && isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current.focus();
    }

    // Focus trigger when Menu is closed
    if (triggerRef.current && !isOpen && previousIsOpenRef.current) {
      triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen, hasMenuRef]);

  useEffect(() => {
    if (hasMenuRef.current === false) {
      hasMenuRef.current = true;
    }
  }, [hasMenuRef]);

  /**
   * Handle timeouts for clearing search text
   */
  useEffect(() => {
    // Cancel existing timeout if keys are pressed rapidly
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Reset search string after delay
    searchTimeoutRef.current = window.setTimeout(() => {
      setSearchString('');
    }, 500);

    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, [searchString]);

  /**
   * Search item value registry based around current highlight bounds
   */
  const searchItems = useCallback(
    (searchValue: string, startIndex: number, endIndex: number) => {
      for (let index = startIndex; index < endIndex; index++) {
        const itemTextValue = itemSearchRegistry.current[index];

        if (itemTextValue && itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()) === 0) {
          return index;
        }
      }

      return undefined;
    },
    [itemSearchRegistry]
  );

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.keyCode === KEY_CODES.SPACE) {
        // Prevent space from closing Menu only if used with existing search value
        if (searchString) {
          e.preventDefault();
          e.stopPropagation();
        } else if (highlightedIndex !== null && highlightedIndex !== undefined) {
          e.preventDefault();
          e.stopPropagation();

          selectItemAtIndex(highlightedIndex);
        }
      }

      // Only search with alphanumeric keys
      if (
        (e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 65 || e.keyCode > 90) &&
        e.keyCode !== KEY_CODES.SPACE
      ) {
        return;
      }

      const character = String.fromCharCode(e.which || e.keyCode);

      if (!character || character.length === 0) {
        return;
      }

      // Reset starting search index after delay has removed previous values
      if (!searchString) {
        if (highlightedIndex === null || highlightedIndex === undefined) {
          currentSearchIndexRef.current = -1;
        } else {
          currentSearchIndexRef.current = highlightedIndex;
        }
      }

      const newSearchString = searchString + character;

      setSearchString(newSearchString);

      let matchingIndex = searchItems(
        newSearchString,
        currentSearchIndexRef.current + 1,
        itemSearchRegistry.current.length
      );

      if (matchingIndex === undefined) {
        matchingIndex = searchItems(newSearchString, 0, currentSearchIndexRef.current);
      }

      if (matchingIndex !== undefined) {
        setHighlightedIndex(matchingIndex);
      }
    },
    [
      searchString,
      searchItems,
      itemSearchRegistry,
      highlightedIndex,
      selectItemAtIndex,
      setHighlightedIndex
    ]
  );

  const renderChildren = (popperRef: any) => {
    // Destructuring the `ref` argument lets us share it with PopperJS
    const { ref: rootPropsRefCallback, ...rootProps } = getRootProps();

    const listboxToggleProps = getToggleButtonProps({
      ...rootProps,
      // Trigger usages do not include an role
      role: null,
      // Trigger usages do not include an associated label
      'aria-labelledby': undefined,
      ...triggerProps,
      ...(children as any).props
    });

    const menuToggleProps = {
      ...listboxToggleProps,
      'aria-haspopup': 'true',
      'aria-controls': listboxToggleProps['aria-owns'],
      'aria-owns': null
    };

    /**
     * Some ARIA attributes from Downshift's `getMenuProps` props are overwritten depending on
     * whether the dropdown renders a `role="menu"` or `role="listbox"`. This override is intended
     * to align a11y with examples demonstrated in WAI ARIA 1.1.
     */

    const toggleButtonProps = hasMenuRef.current ? menuToggleProps : listboxToggleProps;

    /**
     * Clone immediate child and provide:
     * - Necessary downshift props
     * - Ref collector based on `refKey` prop
     */
    return React.cloneElement(React.Children.only(children as any), {
      ...toggleButtonProps,
      [refKey!]: (childRef: HTMLElement) => {
        // Pass ref to popperJS for positioning
        popperRef(childRef);

        // Store ref locally to return focus on close
        (triggerRef as any).current = childRef;

        // Pass ref to getRootProps()
        rootPropsRefCallback(childRef);
      }
    });
  };

  return (
    <Reference>
      {({ ref: popperReference }) => (
        <>
          {renderChildren(popperReference)}
          <StyledInput
            {...getInputProps({
              readOnly: true,
              $isHidden: true,
              tabIndex: -1,
              ref: hiddenInputRef,
              value: '',
              onClick: (e: any) => {
                if (isOpen) {
                  (e.nativeEvent as any).preventDownshiftDefault = true;
                }
              },
              onKeyDown: onInputKeyDown
            } as any)}
          />
        </>
      )}
    </Reference>
  );
};

Trigger.propTypes = {
  children: PropTypes.any,
  refKey: PropTypes.string
};
