/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { INavProps } from '../../types';
import { NavItem } from './NavItem';
import { NavItemIcon } from './NavItemIcon';
import { NavItemText } from './NavItemText';
import { NavList } from './NavList';
export declare const NavComponent: React.ForwardRefExoticComponent<INavProps & React.RefAttributes<HTMLElement>>;
/**
 * @deprecated no longer for general use
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const Nav: typeof NavComponent & {
    List: typeof NavList;
    Item: typeof NavItem;
    ItemIcon: typeof NavItemIcon;
    ItemText: typeof NavItemText;
};
