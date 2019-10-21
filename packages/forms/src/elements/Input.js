/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextInput } from '../styled';
import VALIDATION from '../utils/validation';

/**
 * Must be rendered within a `<Field>` element; accepts all `<input>`
 * attributes and events.
 */
const Input = React.forwardRef((props, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <StyledTextInput
      {...getInputProps(
        {
          ref,
          ...props
        },
        { isDescribed: true }
      )}
    />
  );
});

Input.propTypes = {
  /** Apply compact styling */
  isCompact: PropTypes.bool,
  /** Remove borders and padding */
  isBare: PropTypes.bool,
  /** Apply inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Input;
