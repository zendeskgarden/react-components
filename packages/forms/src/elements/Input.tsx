/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { IInputProps, VALIDATION } from '../types';
import useFieldContext from '../utils/useFieldContext';
import { useInputGroupContext } from '../utils/useInputGroupContext';
import { StyledTextInput } from '../styled';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ onSelect, ...props }, ref) => {
    const fieldContext = useFieldContext();
    const inputGroupContext = useInputGroupContext();

    const onSelectHandler = props.readOnly
      ? composeEventHandlers(onSelect, (event: React.SyntheticEvent<HTMLInputElement>) => {
          event.currentTarget.select();
        })
      : onSelect;

    let combinedProps = {
      ref,
      onSelect: onSelectHandler,
      ...props
    };

    if (inputGroupContext) {
      combinedProps = {
        ...combinedProps,
        isCompact: inputGroupContext.isCompact || combinedProps.isCompact,
        focusInset: props.focusInset === undefined ? true : props.focusInset
      };
    }

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return <StyledTextInput {...(combinedProps as any)} />;
  }
);

Input.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(VALIDATION)
};

Input.displayName = 'Input';
