/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledSelect, StyledSelectWrapper } from '../styled';
import { ISelectProps, VALIDATION } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { FauxInput } from './faux-input/FauxInput';

/**
 * @extends SelectHTMLAttributes<HTMLSelectElement>
 */
export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ disabled, isCompact, validation, focusInset, isBare, ...props }, ref) => {
    const fieldContext = useFieldContext();

    let combinedProps = {
      $focusInset: focusInset,
      $isBare: isBare,
      $isCompact: isCompact,
      $validation: validation,
      disabled,
      ref,
      ...props
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <StyledSelectWrapper
        $isCompact={isCompact}
        $isBare={isBare}
        $isDisabled={disabled}
        $validation={validation}
        $focusInset={focusInset}
      >
        <StyledSelect {...combinedProps} />
        {!isBare && (
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
  validation: PropTypes.oneOf(VALIDATION)
};

Select.displayName = 'Select';
