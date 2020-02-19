/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { TextareaHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextarea } from '../styled';
import { VALIDATION } from '../utils/validation';

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Apply compact styling */
  isCompact?: boolean;
  /** Remove borders and padding */
  isBare?: boolean;
  /** Apply inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Display a mechanism for vertical resize */
  isResizable?: boolean;
  validation?: VALIDATION;
}

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<textarea />` attributes and events.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>((props, ref) => {
  const fieldContext = useFieldContext();

  let combinedProps = {
    ref,
    ...props
  };

  if (fieldContext) {
    combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
  }

  return <StyledTextarea {...(combinedProps as any)} />;
});

Textarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  focusInset: PropTypes.bool,
  isResizable: PropTypes.bool,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
