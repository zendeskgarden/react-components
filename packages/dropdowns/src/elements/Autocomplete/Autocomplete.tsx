/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  useState,
  HTMLAttributes,
  KeyboardEvent,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import mergeRefs from 'react-merge-refs';
import { StyledFauxInput, StyledInput, StyledSelect } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

export interface IAutocompleteProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Defines the element's validation state */
  validation?: VALIDATION;
  /** Provides ref access to the underlying input element */
  inputRef?: React.Ref<HTMLInputElement>;
  /** Defines the icon rendered in the start position */
  start?: any;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Autocomplete = forwardRef<HTMLDivElement, IAutocompleteProps>(
  ({ children, inputRef: controlledInputRef, start, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, getRootProps, isOpen },
      setDropdownType
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const inputRef = useRef<HTMLInputElement>();
    const triggerRef = useRef<HTMLDivElement>();
    const previousIsOpenRef = useRef<boolean | undefined>(isOpen);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (inputRef.current && isOpen !== previousIsOpenRef.current) {
        inputRef.current.focus();
      }

      previousIsOpenRef.current = isOpen;
    }, [inputRef, isOpen]);

    /**
     * Destructure type out of props so that `type="button"`
     * is not spread onto the MultiSelect Dropdown `div`.
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { type, ...selectProps } = getToggleButtonProps(
      getRootProps({
        onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
          if (isOpen) {
            (e.nativeEvent as any).preventDownshiftDefault = true;
          }
        },
        onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
        onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
        /**
         * Ensure that [role="combobox"] is applied directly to the input
         * for Safari screenreader support
         */
        role: null,
        ...props
      } as any)
    );

    const isContainerHovered = isLabelHovered && !isOpen;
    const isContainerFocused = isOpen || isFocused;

    useEffect(() => {
      setDropdownType('autocomplete');
    }, [setDropdownType]);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledFauxInput
            data-test-is-open={isOpen}
            data-test-is-hovered={isContainerHovered}
            data-test-is-focused={isContainerFocused}
            isHovered={isContainerHovered}
            isFocused={isContainerFocused}
            tabIndex={null}
            {...selectProps}
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              mergeRefs([triggerRef, ref])(selectRef);

              // Apply Select ref to global Dropdown context
              popperReferenceElementRef.current = selectRef;
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
            {!isOpen && <StyledSelect>{children}</StyledSelect>}
            <StyledInput
              {...getInputProps({
                isHidden: !isOpen,
                disabled: props.disabled,
                onFocus: () => {
                  setIsFocused(true);
                },
                onBlur: () => {
                  setIsFocused(false);
                },
                onClick: (e: any) => {
                  if (isOpen) {
                    (e.nativeEvent as any).preventDownshiftDefault = true;
                  }
                },
                role: 'combobox',
                ref: mergeRefs([inputRef, controlledInputRef || null])
              } as any)}
            />
            {!props.isBare && (
              <StyledFauxInput.EndIcon
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

Autocomplete.displayName = 'Autocomplete';

Autocomplete.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
