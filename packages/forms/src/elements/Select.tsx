/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { ISelectProps, VALIDATION } from '../types';
import { StyledSelect, StyledSelectWrapper } from '../styled';
import { FauxInput } from './faux-input/FauxInput';
import useFieldContext from '../utils/useFieldContext';

/**
 * @extends SelectHTMLAttributes<HTMLSelectElement>
 */
export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ disabled, isCompact, validation, focusInset, isBare, ...props }, ref) => {
    const fieldContext = useFieldContext();

    let combinedProps = {
      disabled,
      isBare,
      isCompact,
      validation,
      focusInset,
      ref,
      ...props
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return (
      <StyledSelectWrapper
        isCompact={isCompact}
        isBare={isBare}
        validation={validation}
        focusInset={focusInset}
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
