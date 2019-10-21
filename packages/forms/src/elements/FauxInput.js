/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { StyledTextFauxInput } from '../styled';
import VALIDATION from '../utils/validation';

/**
 * Provides styling without native input backing; accepts all `<div>`
 * attributes and events.
 */
const FauxInput = React.forwardRef(({ onFocus, onBlur, disabled, ...props }, ref) => {
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
      isFocused={isFocused}
      isDisabled={disabled}
      ref={ref}
      {...props}
    />
  );
});

FauxInput.propTypes = {
  /** Apply compact styling */
  isCompact: PropTypes.bool,
  /** Remove borders and padding */
  isBare: PropTypes.bool,
  /** Apply inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** Apply disabled styling */
  disabled: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  /** @ignore */
  onFocus: PropTypes.func,
  /** @ignore */
  onBlur: PropTypes.func
};

export default FauxInput;
