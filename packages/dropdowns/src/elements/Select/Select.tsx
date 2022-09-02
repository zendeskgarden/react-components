/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { composeEventHandlers, KEY_CODES } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { VALIDATION } from '@zendeskgarden/react-forms';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import mergeRefs from 'react-merge-refs';
import { ISelectProps } from '../../types';
import { StyledFauxInput, StyledInput, StyledSelect } from '../../styled';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Select = React.forwardRef<HTMLDivElement, ISelectProps>(
  ({ children, start, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      itemSearchRegistry,
      downshift: {
        getToggleButtonProps,
        getInputProps,
        isOpen,
        highlightedIndex,
        setHighlightedIndex,
        selectItemAtIndex,
        closeMenu
      }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const hiddenInputRef = useRef<HTMLInputElement>();
    const triggerRef = useRef<HTMLDivElement>();
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
    }, [isOpen, triggerRef]);

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

          if (
            itemTextValue &&
            itemTextValue.toUpperCase().indexOf(searchValue.toUpperCase()) === 0
          ) {
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
            closeMenu();
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
        closeMenu,
        setHighlightedIndex
      ]
    );

    /**
     * Destructure type out of props so that `type="button"`
     * is not spread onto the Select Dropdown `div`.
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { type, ...selectProps } = getToggleButtonProps({
      tabIndex: props.disabled ? undefined : 0,
      onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
      onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
      onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
      onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false)),
      ...props
    } as any);

    const isContainerHovered = isLabelHovered && !isOpen;
    const isContainerFocused = isFocused || isOpen;

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledFauxInput
            data-test-is-open={isOpen}
            data-test-is-hovered={isContainerHovered}
            data-test-is-focused={isOpen}
            isHovered={isContainerHovered}
            isFocused={isContainerFocused}
            {...selectProps}
            role="none"
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              // Apply Select ref to global Dropdown context
              mergeRefs([triggerRef, ref, popperReferenceElementRef])(selectRef);
            }}
          >
            {start && (
              <StyledFauxInput.StartIcon
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isContainerFocused}
                isDisabled={props.disabled}
              >
                {start}
              </StyledFauxInput.StartIcon>
            )}
            <StyledSelect>{children}</StyledSelect>
            <StyledInput
              {...getInputProps({
                readOnly: true,
                isHidden: true,
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
            {!props.isBare && (
              <StyledFauxInput.EndIcon
                data-test-id="select-icon"
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isContainerFocused}
                isDisabled={props.disabled}
                isRotated={isOpen}
              >
                <Chevron />
              </StyledFauxInput.EndIcon>
            )}
          </StyledFauxInput>
        )}
      </Reference>
    );
  }
);

Select.displayName = 'Select';

Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION),
  start: PropTypes.any
};
