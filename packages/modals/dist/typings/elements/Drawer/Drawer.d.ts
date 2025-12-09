/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IDrawerProps } from '../../types';
import { Header } from './Header';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';
/**
 * [1] implementation of focus management for Drawer usage to support focus edge cases
 *     - (1:a) a ref used to return focus on the last focused element
 *     - (1:b) opt out of `@zendeskgarden/focus-jail` managing the focus
 *     - (1:c) implementation of the focus management effect inside the component
 *     - (1:d) set default props to match useFocusJail behavior
 */
declare const DrawerComponent: React.ForwardRefExoticComponent<IDrawerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export declare const Drawer: typeof DrawerComponent & {
    Body: typeof Body;
    Close: typeof Close;
    Footer: typeof Footer;
    FooterItem: typeof FooterItem;
    Header: typeof Header;
};
export {};
