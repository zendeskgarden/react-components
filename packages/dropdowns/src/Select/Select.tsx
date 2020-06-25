/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect, useCallback, HTMLAttributes } from 'react';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledInput, StyledSelect, VALIDATION } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';
import useFieldContext from '../utils/useFieldContext';

interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  /** Allows flush spacing of Tab elements */
  tagLayout?: boolean;
  /** Applies flex layout to support MediaFigure components */
  mediaLayout?: boolean;
  small?: boolean;
  /** Removes all borders and styling */
  bare?: boolean;
  disabled?: boolean;
  focused?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  hovered?: boolean;
  /** Displays select open state */
  open?: boolean;
  validation?: VALIDATION;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
export const Select = React.forwardRef<HTMLDivElement, ISelectProps>(
  ({ children, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      itemSearchRegistry,
      downshift: {
        getToggleButtonProps,
        getInputProps,
        isOpen,
        highlightedIndex,
        setHighlightedIndex
      }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const triggerRef = useCombinedRefs<HTMLDivElement>(ref, popperReferenceElementRef);
    const hiddenInputRef = useRef<HTMLInputElement>(null);
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
      searchTimeoutRef.current = (setTimeout(() => {
        setSearchString('');
      }, 500) as unknown) as number;

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
        // Only search with alphanumeric keys
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 65 || e.keyCode > 90)) {
          return;
        }

        const character = String.fromCharCode(e.which || e.keyCode);

        if (!character || character.length === 0) {
          return;
        }

        // Reset starting search index after delay has removed previous values
        if (!searchString) {
          currentSearchIndexRef.current = highlightedIndex || 0;
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
      [searchString, highlightedIndex, itemSearchRegistry, searchItems, setHighlightedIndex]
    );

    const selectProps = getToggleButtonProps({
      tabIndex: props.disabled ? -1 : 0,
      ...props
    } as any);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledSelect
            hovered={isLabelHovered && !isOpen}
            focused={isOpen ? isOpen : undefined}
            open={isOpen}
            {...selectProps}
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              (triggerRef.current as any) = selectRef;
            }}
          >
            {children}
            <StyledInput
              {...getInputProps({
                readOnly: true,
                isHidden: true,
                tabIndex: -1,
                ref: hiddenInputRef,
                value: '',
                onKeyDown: onInputKeyDown
              } as any)}
            />
          </StyledSelect>
        )}
      </Reference>
    );
  }
);

Select.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};
