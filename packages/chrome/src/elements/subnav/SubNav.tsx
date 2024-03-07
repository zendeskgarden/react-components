/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledSubNav } from '../../styled';
import { useChromeContext } from '../../utils/useChromeContext';
import { SubNavItem } from './SubNavItem';
import { SubNavItemText } from './SubNavItemText';
import { CollapsibleSubNavItem } from './CollapsibleSubNavItem';

export const SubNavComponent = React.forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const { hue, isLight, isDark } = useChromeContext();

    return <StyledSubNav ref={ref} hue={hue} isLight={isLight} isDark={isDark} {...props} />;
  }
);

SubNavComponent.displayName = 'SubNav';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const SubNav = SubNavComponent as typeof SubNavComponent & {
  Item: typeof SubNavItem;
  ItemText: typeof SubNavItemText;
  CollapsibleItem: typeof CollapsibleSubNavItem;
};

SubNav.Item = SubNavItem;
SubNav.ItemText = SubNavItemText;
SubNav.CollapsibleItem = CollapsibleSubNavItem;
