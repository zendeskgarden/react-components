/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, HTMLAttributes } from 'react';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledInput, SelectWrapper, StyledOverflowWrapper, StyledStartIcon } from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';

interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
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
  /** Slot for "start" icon */
  start?: any;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
export const Select = React.forwardRef<HTMLDivElement, ISelectProps>(
  ({ children, start, ...props }, ref) => {
    const {
      popperReferenceElementRef,
      downshift: { getToggleButtonProps, getInputProps, isOpen }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const triggerRef = useCombinedRefs<HTMLDivElement>(ref, popperReferenceElementRef);
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
    }, [isOpen, triggerRef]);

    const selectProps = getToggleButtonProps({
      tabIndex: props.disabled ? undefined : 0,
      ...props
    } as any);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <SelectWrapper
            isHovered={isLabelHovered && !isOpen}
            isFocused={isOpen}
            isOpen={isOpen}
            isShowingStart={start}
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
              <StyledStartIcon isCompact={props.isCompact} isBare={props.isBare}>
                {start}
              </StyledStartIcon>
            )}
            <StyledOverflowWrapper>{children}</StyledOverflowWrapper>
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
  }
);

Select.displayName = 'Select';

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
