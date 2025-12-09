/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
import { IItemProps } from '../../types';
import { ItemMeta } from './ItemMeta';
/**
 * 1. role='img' on `svg` is valid WAI-ARIA usage in this context.
 *    https://dequeuniversity.com/rules/axe/4.2/svg-img-alt
 */
declare const ItemComponent: React.ForwardRefExoticComponent<IItemProps & React.RefAttributes<HTMLLIElement>>;
/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export declare const Item: typeof ItemComponent & {
    Meta: typeof ItemMeta;
};
export {};
