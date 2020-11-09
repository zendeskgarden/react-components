/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledIconButton, StyledIcon } from '../styled';
import { useSplitButtonContext } from '../utils/useSplitButtonContext';

export interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Applies primary button styling */
  isPrimary?: boolean;
  /** Applies danger styling */
  isDanger?: boolean;
  /** Applies basic button styling */
  isBasic?: boolean;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Rotates the icon 180 degrees */
  isRotated?: boolean;
  /** Sets the size of the icon */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Accepts all `<button>` props
 */
const IconButton: React.FunctionComponent<
  IIconButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, isRotated, ...otherProps }, ref) => {
    const focusInset = useSplitButtonContext();

    return (
      <StyledIconButton ref={ref} {...otherProps} focusInset={otherProps.focusInset || focusInset}>
        <StyledIcon isRotated={isRotated}>{children}</StyledIcon>
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  isDanger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isPrimary: PropTypes.bool,
  isBasic: PropTypes.bool,
  isPill: PropTypes.bool,
  focusInset: PropTypes.bool,
  isRotated: PropTypes.bool
};

IconButton.defaultProps = {
  isPill: true,
  isBasic: true,
  size: 'medium'
};

export default IconButton;
