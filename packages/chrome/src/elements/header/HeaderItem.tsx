/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useKeyboardFocus } from '@zendeskgarden/container-keyboardfocus';
import { StyledHeaderItem, IStyledHeaderItemProps } from '../../styled/header/StyledHeaderItem';

/**
 * Accepts all `<button>` props
 */
export const HeaderItem = React.forwardRef<
  HTMLButtonElement,
  IStyledHeaderItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ isFocused, ...other }, ref) => {
  const { getFocusProps, keyboardFocused } = useKeyboardFocus();

  return (
    <StyledHeaderItem
      {...getFocusProps({
        ...other,
        ref,
        isFocused: isFocused || keyboardFocused
      })}
    />
  );
});

HeaderItem.propTypes = {
  maxX: PropTypes.bool,
  maxY: PropTypes.bool,
  isRound: PropTypes.bool,
  product: PropTypes.oneOf(['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk']),
  hasLogo: PropTypes.bool,
  isHovered: PropTypes.bool,
  isFocused: PropTypes.bool,
  isActive: PropTypes.bool
};
