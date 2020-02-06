/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledInput, SelectWrapper } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface IAutocompleteProps {
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
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Autocomplete = React.forwardRef<HTMLDivElement, IAutocompleteProps>(
  ({ children, inputRef: controlledInputRef, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, isOpen }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const inputRef = useCombinedRefs<HTMLInputElement>(controlledInputRef);
    const triggerRef = useCombinedRefs<HTMLDivElement>(ref);
    const previousIsOpenRef = useRef<boolean | undefined>(undefined);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      // Focus internal input when Menu is opened
      if (isOpen && !previousIsOpenRef.current) {
        inputRef.current && inputRef.current.focus();
      }

      // Focus trigger when Menu is closed
      if (!isOpen && previousIsOpenRef.current) {
        triggerRef.current && triggerRef.current.focus();
      }
      previousIsOpenRef.current = isOpen;
    }, [isOpen, inputRef, triggerRef]);

    const selectProps = getToggleButtonProps({
      onKeyDown: e => {
        if (isOpen) {
          (e.nativeEvent as any).preventDownshiftDefault = true;
        }
      },
      ...props
    });

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <SelectWrapper
            isHovered={isLabelHovered && !isOpen}
            isFocused={isOpen ? true : isFocused}
            isOpen={isOpen}
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
            {!isOpen && children}
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

export default Autocomplete as React.FunctionComponent<IAutocompleteProps>;
