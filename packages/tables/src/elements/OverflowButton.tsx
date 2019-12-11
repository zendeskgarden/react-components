/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledOverflowButton, IStyledOverflowButtonProps } from '../styled';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';

/**
 * Accepts all `<button>` props
 */
export const OverflowButton = React.forwardRef<
  HTMLButtonElement,
  IStyledOverflowButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ onFocus, onBlur, isFocused: focused, ...other }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledOverflowButton
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      isFocused={typeof focused === 'undefined' ? isFocused : focused}
      ref={ref}
      {...other}
    >
      &nbsp;
    </StyledOverflowButton>
  );
});

OverflowButton.propTypes = {
  isHovered: PropTypes.bool,
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool
};
