/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, ButtonHTMLAttributes, WeakValidationMap } from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledButton } from '../styled';
import { ButtonGroupContext } from './ButtonGroup';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Apply danger styling */
  danger?: boolean;
  size?: 'small' | 'medium' | 'large';
  /** Stretch the button to its container width */
  stretched?: boolean;
  /** Applies primary button styling */
  primary?: boolean;
  /** Applies basic button styling */
  basic?: boolean;
  /** Applies link (anchor) button styling */
  link?: boolean;
  /** Applies pill styling */
  pill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** @ignore */
  focused?: boolean;
  /** @ignore prop used by `ButtonGroup` */
  selected?: boolean;
}

/**
 * Accepts all `<button>` props
 */
const Button: React.ForwardRefExoticComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
> & { propTypes?: WeakValidationMap<IButtonProps> } = React.forwardRef<
  HTMLButtonElement,
  IButtonProps
>(({ focused, ...other }, ref) => {
  const focusInset = other.focusInset || useContext(ButtonGroupContext);

  return (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }: any) => (
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
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  stretched: PropTypes.bool,
  primary: PropTypes.bool,
  basic: PropTypes.bool,
  link: PropTypes.bool,
  pill: PropTypes.bool,
  focusInset: PropTypes.bool,
  focused: PropTypes.bool,
  selected: PropTypes.bool
};

Button.defaultProps = {
  size: 'medium'
};

(Button as any).hasType = () => Button;

/** @component */
export default Button;
