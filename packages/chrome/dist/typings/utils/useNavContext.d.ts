/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import React from 'react';
interface INavContext {
    isExpanded: boolean;
}
export declare const NavContext: React.Context<INavContext>;
export declare const useNavContext: () => INavContext;
export {};
