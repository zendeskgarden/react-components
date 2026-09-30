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
  (
    {
      children,
      focusInset,
      isBasic,
      isDanger,
      isNeutral,
      isPill,
      isPrimary,
      isRotated,
      size,
      type = 'button',
      ...other
    },
    ref
  ) => {
    const splitButton = useSplitButtonContext();

    return (
      <StyledIconButton
        {...other}
        type={type}
        $isBasic={isBasic ?? splitButton?.isBasic ?? true}
        $isDanger={isDanger ?? splitButton?.isDanger}
        $isNeutral={isNeutral ?? splitButton?.isNeutral}
        $isPill={isPill ?? splitButton?.isPill ?? true}
        $isPrimary={isPrimary ?? splitButton?.isPrimary}
        $size={size ?? splitButton?.size ?? 'medium'}
        $focusInset={focusInset || splitButton?.focusInset}
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
