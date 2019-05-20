/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef } from 'react';
import { composeEventHandlers } from '@zendeskgarden/react-selection';
import PropTypes from 'prop-types';

import Input from '../views/Input';
const DIVInput = Input.withComponent('div');
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

/**
 * Accepts all `<div>` props
 */
const FauxInput = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { onFocus, onBlur, focused, children, ...otherProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <DIVInput
      {...otherProps}
      ref={ref}
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      focused={focused === undefined ? isFocused : focused}
      aria-invalid={null} // eslint-disable-line jsx-a11y/aria-proptypes
    >
      {children}
    </DIVInput>
  );
});

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
  validation: PropTypes.oneOf([
    VALIDATION.SUCCESS,
    VALIDATION.WARNING,
    VALIDATION.ERROR,
    VALIDATION.NONE
  ])
};

/** @component */
export default FauxInput;
