/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledButton } from '../styled';
import { ButtonGroupContext } from './ButtonGroup';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

/**
 * Accepts all `<button>` props
 */
const Button = React.forwardRef(({ focused, ...other }, ref) => {
  const focusInset = other.focusInset || useContext(ButtonGroupContext);

  return (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }) => (
        <StyledButton
          {...getFocusProps({
            ref,
            tabIndex: null,
            ...other,
            focused: focused || keyboardFocused,
            focusInset
          })}
        />
      )}
    </KeyboardFocusContainer>
  );
});

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
  /** @ignore */
  focused: PropTypes.bool,
  /** @ignore prop used by `ButtonGroup` */
  selected: PropTypes.bool
};

Button.defaultProps = {
  size: SIZE.MEDIUM
};

Button.hasType = () => Button;

/** @component */
export default Button;
