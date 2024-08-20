/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IIconButtonProps, SIZE } from '../types';
import { StyledIconButton, StyledIcon } from '../styled';
import { useSplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, isRotated, ...otherProps }, ref) => {
    const focusInset = useSplitButtonContext();

    return (
      <StyledIconButton ref={ref} {...otherProps} focusInset={otherProps.focusInset || focusInset}>
        <StyledIcon $isRotated={isRotated}>{children}</StyledIcon>
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  isDanger: PropTypes.bool,
  size: PropTypes.oneOf(SIZE),
  isNeutral: PropTypes.bool,
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
