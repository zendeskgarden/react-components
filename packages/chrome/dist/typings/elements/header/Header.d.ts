/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IHeaderProps } from '../../types';
import { HeaderItem } from './HeaderItem';
import { HeaderItemIcon } from './HeaderItemIcon';
import { HeaderItemText } from './HeaderItemText';
import { HeaderItemWrapper } from './HeaderItemWrapper';
export declare const HeaderComponent: React.ForwardRefExoticComponent<IHeaderProps & React.RefAttributes<HTMLElement>>;
/**
 * @deprecated no longer for general use
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const Header: typeof HeaderComponent & {
    Item: typeof HeaderItem;
    ItemIcon: typeof HeaderItemIcon;
    ItemText: typeof HeaderItemText;
    ItemWrapper: typeof HeaderItemWrapper;
};
