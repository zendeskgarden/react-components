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
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Defines the element's validation state */
  validation?: VALIDATION;
}

/**
 * @extends SelectHTMLAttributes<HTMLSelectElement>
 */
export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ disabled, ...props }, ref) => {
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
      <StyledSelectWrapper>
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
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
