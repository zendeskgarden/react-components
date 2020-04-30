/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState, HTMLAttributes, KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledInput, SelectWrapper, StyledOverflowWrapper, StyledStartIcon } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface IAutocompleteProps extends HTMLAttributes<HTMLDivElement> {
  isCompact?: boolean;
  /** Removes all borders and styling */
  isBare?: boolean;
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Displays select open state */
  isOpen?: boolean;
  validation?: VALIDATION;
  inputRef?: React.Ref<HTMLInputElement>;
  /** Slot for "start" icon */
  start?: any;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
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
      ...props
    } as any);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <SelectWrapper
            isHovered={isLabelHovered && !isOpen}
            isFocused={isOpen ? true : isFocused}
            isOpen={isOpen}
            tabIndex={null}
            isShowingStart={start}
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
              <StyledStartIcon isCompact={props.isCompact} isBare={props.isBare}>
                {start}
              </StyledStartIcon>
            )}
            {!isOpen && <StyledOverflowWrapper>{children}</StyledOverflowWrapper>}
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
          </SelectWrapper>
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
