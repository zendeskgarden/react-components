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
import { StyledInput, StyledSelect, VALIDATION } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';
import useFieldContext from '../utils/useFieldContext';

interface IAutocompleteProps {
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
  inputRef?: React.Ref<HTMLInputElement>;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Autocomplete = React.forwardRef<HTMLDivElement, IAutocompleteProps>(
  ({ children, inputRef: controlledInputRef, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, getRootProps, isOpen }
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

    /**
     * Destructure type out of props so that `type="button"`
     * is not spread onto the MultiSelect Dropdown `div`.
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { type, ...selectProps } = getToggleButtonProps(
      getRootProps({
        onKeyDown: (e: any) => {
          if (isOpen) {
            (e.nativeEvent as any).preventDownshiftDefault = true;
          }
        },
        /**
         * Ensure that [role="combobox"] is applied directly to the input
         * for Safari screenreader support
         */
        role: null,
        ...props
      } as any)
    );

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledSelect
            hovered={isLabelHovered && !isOpen}
            focused={isOpen ? true : isFocused}
            open={isOpen}
            {...selectProps}
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Store ref locally to return focus on close
              (triggerRef as any).current = selectRef;

              // Apply Select ref to global Dropdown context
              popperReferenceElementRef.current = selectRef;
            }}
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
                role: 'combobox',
                ref: inputRef
              } as any)}
            />
          </StyledSelect>
        )}
      </Reference>
    );
  }
);

Autocomplete.propTypes = {
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

export default Autocomplete as React.FunctionComponent<IAutocompleteProps>;
