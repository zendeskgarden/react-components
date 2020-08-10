/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState, HTMLAttributes, KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { composeEventHandlers, useCombinedRefs } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { StyledFauxInput, StyledInput, StyledSelect } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface IAutocompleteProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Indicates that the element's menu is open */
  isOpen?: boolean;
  /** Defines the element's validation state */
  validation?: VALIDATION;
  /** Provides ref access to the underlying input element */
  inputRef?: React.Ref<HTMLInputElement>;
  /** Defines the icon rendered in the start position */
  start?: any;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
const Autocomplete = React.forwardRef<HTMLDivElement, IAutocompleteProps>(
  ({ children, inputRef: controlledInputRef, start, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, isOpen }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const inputRef = useCombinedRefs<HTMLInputElement>(controlledInputRef);
    const triggerRef = useCombinedRefs<HTMLDivElement>(ref);
    const previousIsOpenRef = useRef<boolean | undefined>(isOpen);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (isOpen !== previousIsOpenRef.current) {
        inputRef.current && inputRef.current.focus();
      }

      previousIsOpenRef.current = isOpen;
    }, [inputRef, isOpen]);

    const selectProps = getToggleButtonProps({
      onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
        if (isOpen) {
          (e.nativeEvent as any).preventDownshiftDefault = true;
        }
      },
      onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
      onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
      ...props
    } as any);

    const isContainerHovered = isLabelHovered && !isOpen;
    const isContainerFocused = isOpen || isFocused;

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
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              (triggerRef as any).current = selectRef;

              // Apply Select ref to global Dropdown context
              popperReferenceElementRef.current = selectRef;
            }}
            {...selectProps}
          >
            {start && (
              <StyledFauxInput.StartIcon isDisabled={props.disabled}>
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
                ref: inputRef
              } as any)}
            />
            {!props.isBare && (
              <StyledFauxInput.EndIcon
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

Autocomplete.displayName = 'Autocomplete';

Autocomplete.propTypes = {
  isCompact: PropTypes.bool,
  /** Removes all borders and styling */
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** Displays select open state */
  isOpen: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};

export default Autocomplete as React.FunctionComponent<
  IAutocompleteProps & React.RefAttributes<HTMLDivElement>
>;
