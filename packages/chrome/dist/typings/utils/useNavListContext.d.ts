/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
interface INavListContext {
    hasList: boolean;
}
export declare const NavListContext: React.Context<INavListContext | undefined>;
export declare const useNavListContext: () => INavListContext | undefined;
export {};
