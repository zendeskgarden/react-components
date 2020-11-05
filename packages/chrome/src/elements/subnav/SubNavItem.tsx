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
  /** Determines if the current item is in the sub-navigation */
  isCurrent?: boolean;
}

/**
 * Accepts all `<button>` props
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
