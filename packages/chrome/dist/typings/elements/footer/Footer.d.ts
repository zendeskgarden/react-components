/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { FooterItem } from './FooterItem';
/**
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const FooterComponent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
/**
 * @deprecated no longer for general use
 *
 * @extends HTMLAttributes<HTMLElement>
 */
export declare const Footer: typeof FooterComponent & {
    Item: typeof FooterItem;
};
