/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { useInputGroupContext } from '../utils/useInputGroupContext';
import { StyledTextInput } from '../styled';
import { VALIDATION } from '../utils/validation';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  validation?: VALIDATION;
}

/**
 * Must be rendered within a `<Field>` element; accepts all `<input>`
 * attributes and events.
 */
export const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const fieldContext = useFieldContext();
  const inputGroupContext = useInputGroupContext();

  let combinedProps = {
    ref,
    ...props
  };

  if (inputGroupContext) {
    combinedProps = {
      ...combinedProps,
      isCompact: inputGroupContext.isCompact || combinedProps.isCompact,
      focusInset: true
    };
  }

  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
  }

  return <StyledTextInput {...(combinedProps as any)} />;
});

Input.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
