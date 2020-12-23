/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledSubNavItem } from '../../styled';
import { useChromeContext } from '../../utils/useChromeContext';

interface ISubNavItemProps {
  /** Indicates that the item is current in the subnav */
  isCurrent?: boolean;
}

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SubNavItem = React.forwardRef<
  HTMLButtonElement,
  ISubNavItemProps & ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { isDark, isLight } = useChromeContext();

  return <StyledSubNavItem ref={ref} isDark={isDark} isLight={isLight} {...props} />;
});

SubNavItem.displayName = 'SubNavItem';

SubNavItem.propTypes = {
  isCurrent: PropTypes.bool
};
