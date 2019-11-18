/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useKeyboardFocus } from '@zendeskgarden/container-keyboardfocus';
import { StyledNavItem, IStyledNavItemProps } from '../../styled';

/**
 * Accepts all `<button>` attributes and events
 */
export const NavItem = React.forwardRef<
  HTMLButtonElement,
  IStyledNavItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ hasLogo, hasBrandmark, isFocused, ...other }, ref) => {
  const { getFocusProps, keyboardFocused } = useKeyboardFocus();

  return (
    <StyledNavItem
      {...getFocusProps({
        tabIndex: hasLogo || hasBrandmark ? -1 : 0,
        isFocused: isFocused || keyboardFocused,
        hasLogo: hasLogo || hasBrandmark,
        hasBrandmark,
        ref,
        ...other
      })}
    />
  );
});

NavItem.propTypes = {
  product: PropTypes.oneOf(['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk']),
  hasLogo: PropTypes.bool,
  hasBrandmark: PropTypes.bool,
  isCurrent: PropTypes.bool,
  isHovered: PropTypes.bool,
  isFocused: PropTypes.bool,
  isActive: PropTypes.bool
};
