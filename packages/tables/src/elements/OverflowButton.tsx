/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, useState } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import OverflowStrokeIcon from '@zendeskgarden/svg-icons/src/16/overflow-stroke.svg';
import {
  StyledOverflowButton,
  IStyledOverflowButtonProps,
  StyledOverflowButtonIconWrapper
} from '../styled';
import { useTableContext } from '../utils/useTableContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const OverflowButton = React.forwardRef<
  HTMLButtonElement,
  Omit<IStyledOverflowButtonProps, 'size'> & ButtonHTMLAttributes<HTMLButtonElement>
>(({ onFocus, onBlur, isFocused: focused, ...other }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const { size } = useTableContext();

  return (
    <StyledOverflowButton
      onFocus={composeEventHandlers(onFocus, () => {
        setIsFocused(true);
      })}
      onBlur={composeEventHandlers(onBlur, () => {
        setIsFocused(false);
      })}
      size={size}
      isFocused={typeof focused === 'undefined' ? isFocused : focused}
      ref={ref}
      {...other}
    >
      <StyledOverflowButtonIconWrapper>
        <OverflowStrokeIcon />
      </StyledOverflowButtonIconWrapper>
    </StyledOverflowButton>
  );
});

OverflowButton.displayName = 'OverflowButton';

OverflowButton.propTypes = {
  isHovered: PropTypes.bool,
  isActive: PropTypes.bool,
  isFocused: PropTypes.bool
};
