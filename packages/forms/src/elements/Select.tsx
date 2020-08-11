/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SelectHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { StyledSelect, StyledSelectWrapper } from '../styled';
import { FauxInput } from './FauxInput';
import useFieldContext from '../utils/useFieldContext';
import { VALIDATION } from '../utils/validation';

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Slot for "start" icon */
  start?: any;
  validation?: VALIDATION;
  /** Apply props to the wrapping `FauxInput` element */
  wrapperProps?: any;
}

/**
 * Must be rendered within a `<Field>` element; accepts all `<select>`
 * attributes and events.
 */
export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ start, disabled, wrapperProps = {}, ...props }, ref) => {
    const fieldContext = useFieldContext();
    const selectRef = useCombinedRefs(ref);

    let combinedProps = {
      disabled,
      ref: selectRef,
      ...props
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
    }

    return (
      <StyledSelectWrapper {...wrapperProps}>
        {start && <FauxInput.StartIcon isDisabled={disabled}>{start}</FauxInput.StartIcon>}
        <StyledSelect {...(combinedProps as any)} />
        {!props.isBare && (
          <FauxInput.EndIcon isDisabled={disabled}>
            <Chevron />
          </FauxInput.EndIcon>
        )}
      </StyledSelectWrapper>
    );
  }
);

Select.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  start: PropTypes.node,
  validation: PropTypes.oneOf(['success', 'warning', 'error']),
  wrapperProps: PropTypes.object
};
