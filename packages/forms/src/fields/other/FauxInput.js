/* eslint-disable react/prop-types */
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

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Provides input styling for use in non-input scenarios.
 * Accepts all `<div>` props.
 */
const FauxInput = React.forwardRef(
  ({ onMouseEnter, onMouseLeave, onFocus, onBlur, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const onMouseEnterHandler = composeEventHandlers(onMouseEnter, () => {
      setIsHovered(true);
    });

    const onMouseLeaveHandler = composeEventHandlers(onMouseLeave, () => {
      setIsHovered(false);
    });

    const onFocusHandler = composeEventHandlers(onFocus, () => {
      setIsFocused(true);
    });

    const onBlurHandler = composeEventHandlers(onBlur, () => {
      setIsFocused(false);
    });

    return (
      <StyledTextFauxInput
        data-garden-id="forms.faux_input"
        data-garden-version={PACKAGE_VERSION}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        hovered={isHovered}
        focused={isFocused}
        ref={ref}
        {...props}
      />
    );
  }
);

FauxInput.propTypes = {
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Applies select styling */
  select: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default FauxInput;
