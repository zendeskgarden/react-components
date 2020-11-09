/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect, useCallback, HTMLAttributes } from 'react';
import {
  composeEventHandlers,
  useCombinedRefs,
  KEY_CODES
} from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledFauxInput, StyledInput, StyledSelect } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes the borders and padding  */
  isBare?: boolean;
  /** Disables the element's interactivity */
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Sets the element's menu to open */
  isOpen?: boolean;
  /** Sets the element's validation state */
  validation?: VALIDATION;
  /** Sets the icon rendered in the start position */
  start?: any;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
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
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const triggerRef = useCombinedRefs<HTMLDivElement>(ref, popperReferenceElementRef);
    const previousIsOpenRef = useRef<boolean | undefined>(undefined);
    const [searchString, setSearchString] = useState('');
    const searchTimeoutRef = useRef<number>();
    const currentSearchIndexRef = useRef<number>(0);

    useEffect(() => {
      // Focus internal input when Menu is opened
      if (isOpen && !previousIsOpenRef.current) {
        hiddenInputRef.current && hiddenInputRef.current.focus();
      }

      // Focus trigger when Menu is closed
      if (!isOpen && previousIsOpenRef.current) {
        triggerRef.current && triggerRef.current.focus();
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
      ...props
    } as any);

    const isContainerHovered = isLabelHovered && !isOpen;

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledFauxInput
            data-test-is-open={isOpen}
            data-test-is-hovered={isContainerHovered}
            data-test-is-focused={isOpen}
            isHovered={isContainerHovered}
            isFocused={isOpen}
            {...selectProps}
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              (triggerRef.current as any) = selectRef;

              // Apply Select ref to global Dropdown context
              popperReferenceElementRef.current = selectRef;
            }}
          >
            {start && (
              <StyledFauxInput.StartIcon isDisabled={props.disabled}>
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
                onKeyDown: onInputKeyDown
              } as any)}
            ></StyledInput>
            {!props.isBare && (
              <StyledFauxInput.EndIcon
                data-test-id="select-icon"
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isOpen}
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
  isOpen: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
