/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledTextInput } from '../styled';
import { IInputProps, VALIDATION } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { useInputGroupContext } from '../utils/useInputGroupContext';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ onSelect, isBare, isCompact, focusInset, validation, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const inputGroupContext = useInputGroupContext();
    let combinedProps = other;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps<HTMLInputElement>(combinedProps);
    }

    const onSelectHandler = other.readOnly
      ? composeEventHandlers(onSelect, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    return (
      <StyledTextInput
        ref={ref}
        onSelect={onSelectHandler}
        {...combinedProps}
        $isBare={isBare}
        $isCompact={inputGroupContext ? inputGroupContext.isCompact : isCompact}
        $focusInset={inputGroupContext && focusInset === undefined ? true : focusInset}
        $validation={validation}
      />
    );
  }
);

Input.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

Input.displayName = 'Input';
