/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useKeyboardFocus } from '@zendeskgarden/container-keyboardfocus';
import { StyledSubNavItem, IStyledSubNavItemProps } from '../../styled';

/**
 * Accepts all `<button>` props
 */
export const SubNavItem = React.forwardRef<
  HTMLButtonElement,
  IStyledSubNavItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ isFocused, ...other }, ref) => {
  const { getFocusProps, keyboardFocused } = useKeyboardFocus();

  return (
    <StyledSubNavItem
      {...getFocusProps({
        isFocused: isFocused || keyboardFocused,
        ref,
        ...other
      })}
    />
  );
});

SubNavItem.propTypes = {
  isCurrent: PropTypes.bool,
  isHovered: PropTypes.bool,
  isFocused: PropTypes.bool
};
