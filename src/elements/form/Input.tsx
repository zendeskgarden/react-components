/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { SyntheticEvent, forwardRef } from 'react';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import {
  useInputGroupContext,
  usePublishInputGroupValidation
} from '../../hooks/form/useInputGroupContext';
import { IInputProps, VALIDATION } from '../../types/elements';
import { StyledTextInput } from '../../views/form/StyledTextInput';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ onSelect, isBare, isCompact, focusInset, validation, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const inputGroupContext = useInputGroupContext();
    usePublishInputGroupValidation(validation);
    let combinedProps = other;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps<HTMLInputElement>(combinedProps);
    }

    const onSelectHandler = other.readOnly
      ? composeEventHandlers(onSelect, (event: SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    return (
      <StyledTextInput
        ref={ref}
        onSelect={onSelectHandler}
        {...combinedProps}
        $isBare={isBare === undefined && inputGroupContext?.isUnified ? true : isBare}
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
