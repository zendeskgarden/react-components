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

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all `<textarea />` props
 */
const Textarea = React.forwardRef((props, ref) => {
  const { getInputProps } = useFieldContext();

  return (
    <StyledTextarea
      {...getInputProps(
        {
          'data-garden-id': 'forms.textarea',
          'data-garden-version': PACKAGE_VERSION,
          ref,
          ...props
        },
        { isDescribed: true }
      )}
    />
  );
});

Textarea.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  resizable: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Textarea;
