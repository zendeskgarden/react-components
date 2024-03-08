/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ISubNavItemProps } from '../../types';
import { StyledSubNavItem } from '../../styled';
import { useChromeContext } from '../../utils/useChromeContext';

/**
 * @deprecated use `SubNav.Item` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const SubNavItem = React.forwardRef<HTMLButtonElement, ISubNavItemProps>((props, ref) => {
  const { isDark, isLight } = useChromeContext();

  return <StyledSubNavItem ref={ref} isDark={isDark} isLight={isLight} {...props} />;
});

SubNavItem.displayName = 'SubNavItem';

SubNavItem.propTypes = {
  isCurrent: PropTypes.bool
};
