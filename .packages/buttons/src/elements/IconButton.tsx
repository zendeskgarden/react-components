/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledIconButton, StyledIcon } from '../styled';
import { IIconButtonProps, SIZE } from '../types';
import { useSplitButtonContext } from '../utils/useSplitButtonContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  (
    {
      children,
      focusInset,
      isBasic = true,
      isDanger,
      isNeutral,
      isPill = true,
      isPrimary,
      isRotated,
      size = 'medium',
      ...other
    },
    ref
  ) => {
    const splitButtonFocusInset = useSplitButtonContext();

    return (
      <StyledIconButton
        {...other}
        $isBasic={isBasic}
        $isDanger={isDanger}
        $isNeutral={isNeutral}
        $isPill={isPill}
        $isPrimary={isPrimary}
        $size={size}
        $focusInset={focusInset || splitButtonFocusInset}
        ref={ref}
      >
        <StyledIcon $isRotated={isRotated}>{children}</StyledIcon>
      </StyledIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  focusInset: PropTypes.bool,
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isRotated: PropTypes.bool,
  size: PropTypes.oneOf(SIZE)
};
