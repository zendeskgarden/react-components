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

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Apply danger styling */
  isDanger?: boolean;
  size?: 'small' | 'medium' | 'large';
  /** Applies primary button styling */
  isPrimary?: boolean;
  /** Applies basic button styling */
  isBasic?: boolean;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Rotates icon 180 degrees */
  isRotated?: boolean;
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

/** @component */
export default IconButton;
