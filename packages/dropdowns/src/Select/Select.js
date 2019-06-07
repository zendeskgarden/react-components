/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledInput, StyledSelect } from '../styled';
import useDropdownContext from '../utils/useDropdownContext';
import useFieldContext from '../utils/useFieldContext';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Select = ({ children, ...props }) => {
  const {
    popperReferenceElementRef,
    downshift: { getToggleButtonProps, getInputProps, isOpen }
  } = useDropdownContext();
  const { isLabelHovered } = useFieldContext();
  const hiddenInputRef = useRef(null);
  const triggerRef = useRef(null);
  const previousIsOpenRef = useRef(undefined);

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
    tabIndex: props.disabled ? -1 : 0,
    ...props
  });

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
            popperReference(selectRef);

            // Store ref locally to return focus on close
            triggerRef.current = selectRef;

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
            })}
          />
        </StyledSelect>
      )}
    </Reference>
  );
};

Select.propTypes = {
  children: PropTypes.node,
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

export default Select;
