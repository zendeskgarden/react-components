/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledTextFauxInput } from '../../styled';
import VALIDATION from '../../utils/validation';

/**
 * Provides input styling for use in non-input scenarios.
 * Accepts all `<div>` props.
 */
const FauxInput = React.forwardRef(({ onFocus, onBlur, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  });

  const onBlurHandler = composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  });

  return (
    <StyledTextFauxInput
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      focused={isFocused}
      ref={ref}
      {...props}
    />
  );
});

FauxInput.propTypes = {
  isCompact: PropTypes.bool,
  /** Removes all borders and styling */
  isBare: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  /** @ignore */
  focused: PropTypes.bool,
  /** @ignore */
  onFocus: PropTypes.func,
  /** @ignore */
  onBlur: PropTypes.func
};

export default FauxInput;
