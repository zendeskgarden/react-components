/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, ButtonHTMLAttributes, WeakValidationMap } from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledIconButton, StyledIcon } from '../styled';
import { ButtonGroupContext } from './ButtonGroup';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Apply danger styling */
  danger?: boolean;
  size?: 'small' | 'medium' | 'large';
  /** Applies primary button styling */
  primary?: boolean;
  /** Applies basic button styling */
  basic?: boolean;
  /** Applies pill styling */
  pill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** @ignore */
  focused?: boolean;
  /** Rotates icon 180 degrees */
  rotated?: boolean;
}

/**
 * Accepts all `<button>` props
 */
const IconButton: React.ForwardRefExoticComponent<
  IIconButtonProps & React.RefAttributes<HTMLButtonElement>
> & { propTypes?: WeakValidationMap<IIconButtonProps> } = React.forwardRef<
  HTMLButtonElement,
  IIconButtonProps
>(({ children, focused, rotated, ...buttonProps }, ref) => {
  const focusInset = buttonProps.focusInset || useContext(ButtonGroupContext);

  return (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }: any) => (
        <StyledIconButton
          {...getFocusProps({
            ref,
            tabIndex: null,
            ...buttonProps,
            focused: focused || keyboardFocused,
            focusInset
          })}
        >
          <StyledIcon rotated={rotated}>{children}</StyledIcon>
        </StyledIconButton>
      )}
    </KeyboardFocusContainer>
  );
});

IconButton.propTypes = {
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primary: PropTypes.bool,
  basic: PropTypes.bool,
  pill: PropTypes.bool,
  focusInset: PropTypes.bool,
  focused: PropTypes.bool,
  rotated: PropTypes.bool
};

IconButton.defaultProps = {
  pill: true,
  basic: true,
  size: 'medium'
};

/** @component */
export default IconButton;
