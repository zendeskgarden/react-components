/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledInput, SelectWrapper } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface ISelectProps {
  /** Allows flush spacing of Tab elements */
  tagLayout?: boolean;
  isCompact?: boolean;
  /** Removes all borders and styling */
  isBare?: boolean;
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Displays select open state */
  isOpen?: boolean;
  validation?: VALIDATION;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Select: React.FunctionComponent<ISelectProps> = ({ children, ...props }) => {
  const {
    popperReferenceElementRef,
    downshift: { getToggleButtonProps, getInputProps, isOpen }
  } = useDropdownContext();
  const { isLabelHovered } = useFieldContext();
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const previousIsOpenRef = useRef<boolean | undefined>(undefined);

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
  }, [isOpen]);

  const selectProps = getToggleButtonProps({
    tabIndex: props.disabled ? undefined : 0,
    ...props
  });

  return (
    <Reference>
      {({ ref: popperReference }) => (
        <SelectWrapper
          isHovered={isLabelHovered && !isOpen}
          isFocused={isOpen}
          isOpen={isOpen}
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
          {children}
          <StyledInput
            {...getInputProps({
              readOnly: true,
              isHidden: true,
              tabIndex: -1,
              ref: hiddenInputRef,
              value: ''
            } as any)}
          />
        </SelectWrapper>
      )}
    </Reference>
  );
};

Select.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
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

export default Select;
