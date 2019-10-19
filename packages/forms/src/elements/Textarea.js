/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../utils/useFieldContext';
import { StyledTextarea } from '../styled';
import VALIDATION from '../utils/validation';

/**
 * Accepts all `<textarea />` props
 */
const Textarea = React.forwardRef((props, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <StyledTextarea
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

Textarea.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  isResizable: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Textarea;
