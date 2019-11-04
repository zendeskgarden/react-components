/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
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
  /** Rotates icon 180 degrees */
  rotated?: boolean;
}

/**
 * Accepts all `<button>` props
 */
const IconButton: React.FunctionComponent<
  IIconButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, rotated, ...otherProps }, ref) => {
    const focusInset = otherProps.focusInset || useContext(ButtonGroupContext);

    return (
      <StyledIconButton ref={ref} {...otherProps} focusInset={focusInset}>
        <StyledIcon rotated={rotated}>{children}</StyledIcon>
      </StyledIconButton>
    );
  }
);

IconButton.propTypes = {
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primary: PropTypes.bool,
  basic: PropTypes.bool,
  pill: PropTypes.bool,
  focusInset: PropTypes.bool,
  rotated: PropTypes.bool
};

IconButton.defaultProps = {
  pill: true,
  basic: true,
  size: 'medium'
};

/** @component */
export default IconButton;
