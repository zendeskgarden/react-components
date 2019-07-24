/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledButton } from '../styled';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

/**
 * Accepts all `<button>` props
 */
const Button = React.forwardRef(({ focused, ...other }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledButton
        {...getFocusProps({
          ref,
          ...other,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
));

Button.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  /** Stretch the button to its container width */
  stretched: PropTypes.bool,
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies link (anchor) button styling */
  link: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  focused: PropTypes.bool,
  selected: PropTypes.bool
};

Button.defaultProps = {
  size: SIZE.MEDIUM
};

Button.hasType = () => Button;

/** @component */
export default Button;
